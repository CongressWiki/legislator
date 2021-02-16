import React from 'react';
import BillParagraph from '@components/BillParagraph';

export type BillTextProps = {
  billText: string;
  billTitle: string;
};

export default function BillText({ billText, billTitle }: BillTextProps) {
  console.log(billText);
  // Replace double back-ticks/single-quotes with  double quotes
  billText = billText.replace(/(``|'')/g, '"');
  // Replace double spaces with single space
  billText = billText.replace(/\s\s+/g, ' ');
  // Remove HTML tags
  billText = billText.replace(/<[\S]*>/g, '');

  // Remove intro words from title (I.e. "A BILL...", "A RESOLUTION...")
  billTitle = billTitle.replace(/^A \w+/gi, '');

  const deliminator = new RegExp(billTitle, 'gi');
  const [_meta, _sponsorships, content] = billText.split(deliminator);

  // The real bill text is after the last print of the Bill title.
  if (content) billText = content;

  // Inject newlines before and after "SECTION" titles
  billText = billText.replace(
    /(SEC\.|SECTION) (\d\.)([ A-Z:]+\.)/g,
    '\nSECTION $2$3\n'
  );

  let [intro, ...paragraphs] = billText.split('\n');

  // Filter empty paragraphs
  paragraphs = paragraphs.filter((paragraph) => /\S/g.test(paragraph));

  return (
    <>
      <BillParagraph>{intro}</BillParagraph>
      {paragraphs.map((paragraph, index) => {
        return <BillParagraph key={index}>{paragraph}</BillParagraph>;
      })}
    </>
  );
}
