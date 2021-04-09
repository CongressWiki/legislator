/**
 * @name match-sorter
 * @license MIT license.
 * @copyright (c) 2020 Kent C. Dodds
 * @author Kent C. Dodds <me@kentcdodds.com> (https://kentcdodds.com)
 */
import removeAccents from 'remove-accents';

type KeyAttributes = {
  threshold?: Ranking;
  maxRanking: Ranking;
  minRanking: Ranking;
};
interface RankingInfo {
  rankedValue: string;
  rank: Ranking;
  keyIndex: number;
  keyThreshold: Ranking | undefined;
}

type ValueGetterKey<ItemType> = (item: ItemType) => string | string[];
interface IndexedItem<ItemType> {
  item: ItemType;
  index: number;
}
interface RankedItem<ItemType> extends RankingInfo, IndexedItem<ItemType> {}

type BaseSorter<ItemType> = (
  a: RankedItem<ItemType>,
  b: RankedItem<ItemType>
) => number;

type Sorter<ItemType> = (
  matchItems: Array<RankedItem<ItemType>>
) => Array<RankedItem<ItemType>>;

interface KeyAttributesOptions<ItemType> {
  key?: string | ValueGetterKey<ItemType>;
  threshold?: Ranking;
  maxRanking?: Ranking;
  minRanking?: Ranking;
}

type KeyOption<ItemType> =
  | KeyAttributesOptions<ItemType>
  | ValueGetterKey<ItemType>
  | string;

interface searchOptions<ItemType = unknown> {
  keys?: Array<KeyOption<ItemType>>;
  threshold?: Ranking;
  baseSort?: BaseSorter<ItemType>;
  keepDiacritics?: boolean;
  sorter?: Sorter<ItemType>;
}
type IndexableByString = Record<string, unknown>;

const rankings = {
  CASE_SENSITIVE_EQUAL: 7,
  EQUAL: 6,
  STARTS_WITH: 5,
  WORD_STARTS_WITH: 4,
  CONTAINS: 3,
  ACRONYM: 2,
  MATCHES: 1,
  NO_MATCH: 0,
} as const;

type Ranking = typeof rankings[keyof typeof rankings];

search.rankings = rankings;

const defaultBaseSortFunction: BaseSorter<unknown> = (a, b) =>
  String(a.rankedValue).localeCompare(String(b.rankedValue));

/**
 * Takes an array of items and a value and returns a new array with the items that match the given value
 * @param {Array} items - the items to sort
 * @param {String} value - the value to use for ranking
 * @param {Object} options - Some options to configure the sorter
 * @return {Array} - the new sorted array
 */
function search<ItemType = string>(
  items: ItemType[],
  value: string,
  options: searchOptions<ItemType> = {}
): ItemType[] {
  const {
    keys,
    threshold = rankings.MATCHES,
    baseSort = defaultBaseSortFunction,
    sorter = (matchedItems) =>
      matchedItems.sort((a, b) => sortRankedValues(a, b, baseSort)),
  } = options;
  const matchedItems = items.reduce(reduceItemsToRanked, []);
  return sorter(matchedItems).map(({ item }) => item);

  function reduceItemsToRanked(
    matches: Array<RankedItem<ItemType>>,
    item: ItemType,
    index: number
  ): Array<RankedItem<ItemType>> {
    const rankingInfo = getHighestRanking(item, keys, value, options);
    const { rank, keyThreshold = threshold } = rankingInfo;
    if (rank >= keyThreshold) {
      matches.push({ ...rankingInfo, item, index });
    }

    return matches;
  }
}

/**
 * Gets the highest ranking for value for the given item based on its values for the given keys
 * @param {*} item - the item to rank
 * @param {Array} keys - the keys to get values from the item for the ranking
 * @param {String} value - the value to rank against
 * @param {Object} options - options to control the ranking
 * @return {{rank: Number, keyIndex: Number, keyThreshold: Number}} - the highest ranking
 */
function getHighestRanking<ItemType>(
  item: ItemType,
  keys: Array<KeyOption<ItemType>> | undefined,
  value: string,
  options: searchOptions<ItemType>
): RankingInfo {
  if (!keys) {
    // If keys is not specified, then we assume the item given is ready to be matched
    const stringItem = (item as unknown) as string;
    return {
      // Ends up being duplicate of 'item' in matches but consistent
      rankedValue: stringItem,
      rank: getMatchRanking(stringItem, value, options),
      keyIndex: -1,
      keyThreshold: options.threshold,
    };
  }

  const valuesToRank = getAllValuesToRank(item, keys);
  return valuesToRank.reduce(
    (
      { rank, rankedValue, keyIndex, keyThreshold },
      { itemValue, attributes },
      index
    ) => {
      let newRank = getMatchRanking(itemValue, value, options);
      let newRankedValue = rankedValue;
      const { minRanking, maxRanking, threshold } = attributes;
      if (newRank < minRanking && newRank >= rankings.MATCHES) {
        newRank = minRanking;
      } else if (newRank > maxRanking) {
        newRank = maxRanking;
      }

      if (newRank > rank) {
        rank = newRank;
        keyIndex = index;
        keyThreshold = threshold;
        newRankedValue = itemValue;
      }

      return { rankedValue: newRankedValue, rank, keyIndex, keyThreshold };
    },
    {
      rankedValue: (item as unknown) as string,
      rank: rankings.NO_MATCH as Ranking,
      keyIndex: -1,
      keyThreshold: options.threshold,
    }
  );
}

/**
 * Gives a rankings score based on how well the two strings match.
 * @param {String} testString - the string to test against
 * @param {String} stringToRank - the string to rank
 * @param {Object} options - options for the match (like keepDiacritics for comparison)
 * @returns {Number} the ranking for how well stringToRank matches testString
 */
function getMatchRanking<ItemType>(
  testString: string,
  stringToRank: string,
  options: searchOptions<ItemType>
): Ranking {
  testString = prepareValueForComparison(testString, options);
  stringToRank = prepareValueForComparison(stringToRank, options);

  // Too long
  if (stringToRank.length > testString.length) {
    return rankings.NO_MATCH;
  }

  // Case sensitive equals
  if (testString === stringToRank) {
    return rankings.CASE_SENSITIVE_EQUAL;
  }

  // Lower casing before further comparison
  testString = testString.toLowerCase();
  stringToRank = stringToRank.toLowerCase();

  // Case insensitive equals
  if (testString === stringToRank) {
    return rankings.EQUAL;
  }

  // Starts with
  if (testString.startsWith(stringToRank)) {
    return rankings.STARTS_WITH;
  }

  // Word starts with
  if (testString.includes(` ${stringToRank}`)) {
    return rankings.WORD_STARTS_WITH;
  }

  // Contains
  if (testString.includes(stringToRank)) {
    return rankings.CONTAINS;
  }

  if (stringToRank.length === 1) {
    // If the only character in the given stringToRank
    //   isn't even contained in the testString, then
    //   it's definitely not a match.
    return rankings.NO_MATCH;
  }

  // Acronym
  if (getAcronym(testString).includes(stringToRank)) {
    return rankings.ACRONYM;
  }

  // Will return a number between rankings.MATCHES and
  // rankings.MATCHES + 1 depending  on how close of a match it is.
  return getClosenessRanking(testString, stringToRank);
}

/**
 * Generates an acronym for a string.
 *
 * @param {String} string the string for which to produce the acronym
 * @returns {String} the acronym
 */
function getAcronym(string: string): string {
  let acronym = '';
  const wordsInString = string.split(' ');
  for (const wordInString of wordsInString) {
    const splitByHyphenWords = wordInString.split('-');
    for (const splitByHyphenWord of splitByHyphenWords) {
      acronym += splitByHyphenWord.slice(0, 1);
    }
  }

  return acronym;
}

/**
 * Returns a score based on how spread apart the
 * characters from the stringToRank are within the testString.
 * A number close to rankings.MATCHES represents a loose match. A number close
 * to rankings.MATCHES + 1 represents a tighter match.
 * @param {String} testString - the string to test against
 * @param {String} stringToRank - the string to rank
 * @returns {Number} the number between rankings.MATCHES and
 * rankings.MATCHES + 1 for how well stringToRank matches testString
 */
function getClosenessRanking(
  testString: string,
  stringToRank: string
): Ranking {
  let matchingInOrderCharCount = 0;
  let charNumber = 0;
  function findMatchingCharacter(
    matchChar: string,
    string: string,
    index: number
  ) {
    for (let index_ = index, J = string.length; index_ < J; index_++) {
      const stringChar = string[index_];
      if (stringChar === matchChar) {
        matchingInOrderCharCount += 1;
        return index_ + 1;
      }
    }

    return -1;
  }

  function getRanking(spread: number) {
    const spreadPercentage = 1 / spread;
    const inOrderPercentage = matchingInOrderCharCount / stringToRank.length;
    const ranking = rankings.MATCHES + inOrderPercentage * spreadPercentage;
    return ranking as Ranking;
  }

  const firstIndex = findMatchingCharacter(stringToRank[0], testString, 0);
  if (firstIndex < 0) {
    return rankings.NO_MATCH;
  }

  charNumber = firstIndex;
  for (let index = 1, I = stringToRank.length; index < I; index++) {
    const matchChar = stringToRank[index];
    charNumber = findMatchingCharacter(matchChar, testString, charNumber);
    const found = charNumber > -1;
    if (!found) {
      return rankings.NO_MATCH;
    }
  }

  const spread = charNumber - firstIndex;
  return getRanking(spread);
}

/**
 * Sorts items that have a rank, index, and keyIndex
 * @param {Object} a - the first item to sort
 * @param {Object} b - the second item to sort
 * @return {Number} -1 if a should come first, 1 if b should come first, 0 if equal
 */
function sortRankedValues<ItemType>(
  a: RankedItem<ItemType>,
  b: RankedItem<ItemType>,
  baseSort: BaseSorter<ItemType>
): number {
  const aFirst = -1;
  const bFirst = 1;
  const { rank: aRank, keyIndex: aKeyIndex } = a;
  const { rank: bRank, keyIndex: bKeyIndex } = b;
  const same = aRank === bRank;
  if (same) {
    if (aKeyIndex === bKeyIndex) {
      // Use the base sort function as a tie-breaker
      return baseSort(a, b);
    }

    return aKeyIndex < bKeyIndex ? aFirst : bFirst;
  }

  return aRank > bRank ? aFirst : bFirst;
}

/**
 * Prepares value for comparison by stringifying it, removing diacritics (if specified)
 * @param {String} value - the value to clean
 * @param {Object} options - {keepDiacritics: whether to remove diacritics}
 * @return {String} the prepared value
 */
function prepareValueForComparison<ItemType>(
  value: string,
  { keepDiacritics }: searchOptions<ItemType>
): string {
  // Value might not actually be a string at this point (we don't get to choose)
  // so part of preparing the value for comparison is ensure that it is a string
  value = `${value}`; // ToString
  if (!keepDiacritics) {
    value = removeAccents(value);
  }

  return value;
}

/**
 * Gets value for key in item at arbitrarily nested keypath
 * @param {Object} item - the item
 * @param {Object|Function} key - the potentially nested keypath or property callback
 * @return {Array} - an array containing the value(s) at the nested keypath
 */
function getItemValues<ItemType>(
  item: ItemType,
  key: KeyOption<ItemType>
): string[] {
  if (typeof key === 'object') {
    key = key.key as string;
  }

  let value: string | string[] | null | unknown;
  if (typeof key === 'function') {
    value = key(item);
  } else if (item === undefined) {
    value = null;
  } else if (Object.hasOwnProperty.call(item, key)) {
    value = (item as IndexableByString)[key];
  } else if (key.includes('.')) {
    return getNestedValues<ItemType>(key, item);
  } else {
    value = null;
  }

  // Because `value` can also be undefined
  if (value === undefined) {
    return [];
  }

  if (Array.isArray(value)) {
    return value;
  }

  return [String(value)];
}

/**
 * Given path: "foo.bar.baz"
 * And item: {foo: {bar: {baz: 'buzz'}}}
 *   -> 'buzz'
 * @param path a dot-separated set of keys
 * @param item the item to get the value from
 */
function getNestedValues<ItemType>(path: string, item: ItemType): string[] {
  const keys = path.split('.');

  type ValueA = Array<ItemType | IndexableByString | string>;
  let values: ValueA = [item];

  for (let index = 0, I = keys.length; index < I; index++) {
    const nestedKey = keys[index];
    let nestedValues: ValueA = [];

    for (let index = 0, J = values.length; index < J; index++) {
      const nestedItem = values[index];

      if (nestedItem === undefined) continue;

      if (Object.hasOwnProperty.call(nestedItem, nestedKey)) {
        const nestedValue = (nestedItem as IndexableByString)[nestedKey];
        if (nestedValue !== undefined) {
          nestedValues.push(nestedValue as IndexableByString | string);
        }
      } else if (nestedKey === '*') {
        // Ensure that values is an array
        nestedValues = nestedValues.concat(nestedItem);
      }
    }

    values = nestedValues;
  }

  if (Array.isArray(values[0])) {
    // Keep allowing the implicit wildcard for an array of strings at the end of
    // the path; don't use `.flat()` because that's not available in node.js v10
    const result: string[] = [];
    return result.concat(...(values as string[]));
  }

  // Based on our logic it should be an array of strings by now...
  // assuming the user's path terminated in strings
  return values as string[];
}

/**
 * Gets all the values for the given keys in the given item and returns an array of those values
 * @param item - the item from which the values will be retrieved
 * @param keys - the keys to use to retrieve the values
 * @return objects with {itemValue, attributes}
 */
function getAllValuesToRank<ItemType>(
  item: ItemType,
  keys: Array<KeyOption<ItemType>>
) {
  const allValues: Array<{ itemValue: string; attributes: KeyAttributes }> = [];
  for (let index = 0, J = keys.length; index < J; index++) {
    const key = keys[index];
    const attributes = getKeyAttributes(key);
    const itemValues = getItemValues(item, key);
    for (let index = 0, I = itemValues.length; index < I; index++) {
      allValues.push({
        itemValue: itemValues[index],
        attributes,
      });
    }
  }

  return allValues;
}

const defaultKeyAttributes = {
  maxRanking: Number.POSITIVE_INFINITY as Ranking,
  minRanking: Number.NEGATIVE_INFINITY as Ranking,
};
/**
 * Gets all the attributes for the given key
 * @param key - the key from which the attributes will be retrieved
 * @return object containing the key's attributes
 */
function getKeyAttributes<ItemType>(key: KeyOption<ItemType>): KeyAttributes {
  if (typeof key === 'string') {
    return defaultKeyAttributes;
  }

  return { ...defaultKeyAttributes, ...key };
}

export { search, rankings, defaultBaseSortFunction as defaultBaseSortFn };

export type {
  searchOptions,
  KeyAttributesOptions,
  KeyOption,
  KeyAttributes,
  RankingInfo,
  ValueGetterKey,
};

/*
eslint
  no-continue: "off",
*/
