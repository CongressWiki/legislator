/**
 * Remove citations i.e. (2)
 */
export const removeCitations = (text: string) => {
  return text.replace(/\(\d*\)([^\S\r\n])?/g, '');
};

/**
 * Remove horizontal spaces (\h) (horizontal space chars come from Perl and is not supported by Node regex)
 */
export const removeHorizontalSpaces = (text: string) => {
  return text.replace(/[^\S\r\n]/g, ' ');
};

/**
 * Add ellipsis to paragraphs that end with specified regex
 */
export const appendEllipsisToTrailingListPointer = (
  text: string,
  phrase: string
) => {
  const regex = new RegExp(`(${phrase})\n`, 'g');
  return text.replace(regex, '$1...');
};

/**
 * Add ellipsis to paragraphs that end with "to" | "include" | "for"
 */
export const addEllipsisToListPointers = (text: string) => {
  return text.replace(/(to|include|for)\n/g, '$1...');
};

/**
 * Add ellipsis if paragraph contains "For more detailed information"
 */
export const addEllipsisToPhraseForMoreInformation = (text: string) => {
  return text.replace(/(For more detailed information)(,)?/g, '$1...\n');
};

/**
 * If the first sentence is a statement that includes "of Act" then separate it from the regular text
 */
export const lineBreakPhraseOfAct = (text: string) => {
  return text.replace(/(^[\S\s]*Act( of [\d]+)?) (\w)/g, '$1$2\n $3');
};
