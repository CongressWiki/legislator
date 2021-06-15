const fs = require('fs');
const path = require('path');
const Jimp = require('jimp');
const twitterCard = require('wasm-twitter-card');

const WIDTH = 1200;
const HEIGHT = 630;

async function writeTextToCard(buffer) {
  return await new Jimp({ data: buffer, width: WIDTH, height: HEIGHT });
}

async function generateBackground(background) {
  if (/[\dA-Fa-f]{6}/g.test(background)) {
    return await new Jimp(WIDTH, HEIGHT, background);
  }

  return Jimp.read(background);
}

function validateFontSize(fontSize, fieldName) {
  if (
    isNaN(fontSize) ||
    Number.parseInt(Number(fontSize)) != fontSize ||
    isNaN(Number.parseInt(fontSize, 10))
  ) {
    throw new Error(`Please pass an integer as ${fieldName}`);
  }
}

function hexToRgb(hex) {
  const hexCode = hex.replace(/^#/, '');
  const bigint = Number.parseInt(hexCode, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return [r, g, b];
}

function normalizePosition(position) {
  if (position === 'house_representative') {
    return 'House Representative';
  }

  if (position === 'senator') {
    return 'Senator';
  }

  if (position === 'president') {
    return 'President';
  }

  if (position === 'vice_president') {
    return 'Vice President';
  }
}

module.exports = ({
  electedOfficial,
  author = 'USACounts',
  background = '#04113D',
  fontColor = '#ffffff',
  titleFontSize = 62,
  subtitleFontSize = 52,
  fontFile,
  slug,
}) => {
  validateFontSize(titleFontSize, 'titleFontSize');
  validateFontSize(subtitleFontSize, 'subtitleFontSize');

  const output = path.join('./public', slug, 'twitter-card.jpg');

  const position = normalizePosition(electedOfficial.position);
  let location = `${electedOfficial.state}`;
  if (electedOfficial.district) {
    location += `, district ${electedOfficial.district}`;
  }

  const title = `${electedOfficial.political_party} ${position} from ${location}.`;
  const subTitle = `${electedOfficial.preferred_name} | ${author}`;

  const fontToUint8Array = fontFile
    ? fs.readFileSync(require.resolve(fontFile), null)
    : new Uint8Array();

  if (fontFile) {
    fontStyle = 'custom';
  }

  const buffer = twitterCard.generate_text(
    truncate(title, 300),
    subTitle,
    titleFontSize,
    subtitleFontSize,
    hexToRgb(fontColor),
    fontStyle,
    fontToUint8Array
  );

  return Promise.all([generateBackground(background), writeTextToCard(buffer)])
    .then(([base, text]) => base.composite(text, 0, 0))
    .then((image) =>
      image
        .writeAsync(output)
        .then(() => console.log('Generated Twitter Card:', output))
        .catch((error) => error)
    )
    .catch(console.error);
};

function truncate(string, limit, useWordBoundary = true) {
  if (string.length <= limit) {
    return string;
  }

  const subString = string.slice(0, Math.max(0, limit - 1));
  return (
    (useWordBoundary
      ? subString.slice(0, Math.max(0, subString.lastIndexOf(' ')))
      : subString) + '…'
  );
}
