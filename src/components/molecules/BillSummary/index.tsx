import React from 'react';
import BillParagraph from '@components/atoms/BillParagraph';
import ActStatement from '@components/atoms/ActStatement';
import NoSummaryPlaceholder from '@components/atoms/NoSummaryPlaceholder';

export type BillSummaryProps = {
  summary: string;
  className?: string;
};

const BillSummary = ({ summary, className }: BillSummaryProps) => {
  console.log(summary);

  if (summary === 'No summary available.') {
    return <NoSummaryPlaceholder />;
  }

  // If the first sentence is a statement that includes "of Act" then separate it from the regular text.
  if (/^[\S\s]*Act( of \d+)? [A-Z]/g.test(summary)) {
    summary = summary.replace(/(^[\S\s]*Act( of \d+)?) (\w)/g, '$1\n $3');
  }

  const BillParagraphs = summary
    .split('\n')
    .filter((paragraph) => paragraph !== '');

  return (
    <div className={className}>
      {BillParagraphs.map((paragraph, index) => {
        // Render in special formatting if first sentence is a Bill/Act statement.
        if (
          paragraph.split('.').length <= 1 &&
          /(Act|Bill of Rights)/g.test(paragraph)
        ) {
          return <ActStatement key={index}>{paragraph}</ActStatement>;
        }

        // Otherwise render as normal paragraph
        return <BillParagraph key={index}>{paragraph}</BillParagraph>;
      })}
    </div>
  );
};

export default BillSummary;
