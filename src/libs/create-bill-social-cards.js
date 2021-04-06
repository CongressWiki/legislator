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
  if (background.match(/[0-9A-Fa-f]{6}/g)) {
    return await new Jimp(WIDTH, HEIGHT, background);
  }
  return Jimp.read(background);
}

function validateFontSize(fontSize, fieldName) {
  if (
    isNaN(fontSize) ||
    parseInt(Number(fontSize)) != fontSize ||
    isNaN(parseInt(fontSize, 10))
  ) {
    throw new Error(`Please pass an integer as ${fieldName}`);
  }
}

function hexToRgb(hex) {
  const hexCode = hex.replace(/^#/, '');
  const bigint = parseInt(hexCode, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return [r, g, b];
}

module.exports = ({
  bill,
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

  const billId = `${bill.type.toUpperCase()}${bill.number}`;
  const subTitle = `${billId} | ${author}`;

  const fontToUint8Array = fontFile
    ? fs.readFileSync(require.resolve(fontFile), null)
    : new Uint8Array();

  if (fontFile) {
    fontStyle = 'custom';
  }

  const buffer = twitterCard.generate_text(
    truncate(bill.title, 300),
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
        .then(() => console.log('Generated Twitter Card: ', output))
        .catch((err) => err)
    )
    .catch(console.error);
};

function truncate(string, limit, useWordBoundary = true) {
  if (string.length <= limit) {
    return string;
  }

  const subString = string.substr(0, limit - 1);
  return (
    (useWordBoundary
      ? subString.substr(0, subString.lastIndexOf(' '))
      : subString) + '…'
  );
}
