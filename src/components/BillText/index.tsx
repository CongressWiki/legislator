import React from 'react';
import BillParagraph from '@components/BillParagraph';
import BillList from '@components/BillList';

export type BillTextProps = {
  billText: string;
};

export default function BillText({ billText: rawText }: BillTextProps) {
  console.log(rawText);

  const billTextSplitByLines = rawText.split(/[-_]{10,}/gm);
  let billText = billTextSplitByLines[billTextSplitByLines.length - 1];
  // Replace double back-ticks/single-quotes with  double quotes
  billText = billText.replace(/(``|'')/g, '"');
  // Replace double spaces with single space
  billText = billText.replace(/\s{2,}/g, ' ');
  // Remove HTML tags
  billText = billText.replace(/<[\S]+>/g, '');

  // Inject newlines before and after "SECTION" titles
  // billText = billText.replace(
  //   /(SEC\.|SECTION) (\d\.)([ A-Z:]+\.)/g,
  //   '\nSECTION $2$3\n'
  // );

  const paragraphs = billText.split('\n');

  const renders = paragraphs.map((paragraph, index) => {
    // If paragraph contains ":" then render the colon's right side as list
    if (/:/g.test(paragraph)) {
      const colonSplitParagraph = paragraph.split(/:/g);

      return (
        <React.Fragment key={index}>
          <BillParagraph>{colonSplitParagraph.shift()}:</BillParagraph>
          <BillList paragraph={colonSplitParagraph.join('')} index={index} />
        </React.Fragment>
      );
    }

    return <BillParagraph key={index}>{paragraph}</BillParagraph>;
  });

  return <>{renders}</>;
}
