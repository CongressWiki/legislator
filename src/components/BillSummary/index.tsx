import React from 'react';
import styled from 'styled-components';
import BillParagraph from '@components/BillParagraph';
import ActStatement from '@components/ActStatement';
import NoSummaryPlaceholder from '@components/NoSummaryPlaceholder';
import BillList from '@components/BillList';

export type BillSummaryProps = {
  summary: string;
};

export default function BillSummary({ summary }: BillSummaryProps) {
  if (summary === 'No summary available.') {
    return <NoSummaryPlaceholder />;
  }

  // Remove citations i.e. (2)
  summary = summary.replace(/\(\d*\)([^\S\r\n])?/g, '');
  // Remove horizontal spaces (\h) (horizontal space chars come from Perl and is not supported by Node regex)
  summary = summary.replace(/[^\S\r\n]/g, ' ');
  // Add ellipsis to paragraphs that end with "to" | "include" | "for"
  summary = summary.replace(/(to|include|for)\n/g, '$1…');
  // Add ellipsis if paragraph contains "For more detailed information"
  summary = summary.replace(/(For more detailed information)(,)?/g, '$1…\n');
  summary = summary.replace(/(Among other things, the bill)/g, '$1…\n');

  // If the first sentence is a statement that includes "of Act" then separate it from the regular text
  if (/^[\S\s]*Act( of \d+)? [A-Z]/g.test(summary)) {
    // TODO: Render in italics/bold
    summary = summary.replace(/(^[\S\s]*Act( of \d+)?) (\w)/g, '$1\n $3');
  }

  const BillParagraphs = summary
    .split('\n')
    .filter((paragraph) => paragraph !== '');

  return (
    <>
      {BillParagraphs.map((paragraph, index) => {
        if (paragraph === '') return;

        // If previous paragraph ended with "{includes|to|for}..." render paragraph as list
        if (index > 0 && BillParagraphs[index - 1].endsWith('…')) {
          // console.log(BillParagraphs[index]);

          return <BillList paragraph={paragraph} index={index} key={index} />;
        }

        // If paragraph contains ":" then render the colon's right side as list
        if (/:.*?(;|,)/g.test(paragraph)) {
          const colonSplitParagraph = paragraph.split(/:/g);

          return (
            <React.Fragment key={index}>
              <BillParagraph>{colonSplitParagraph.shift()}:</BillParagraph>
              <BillList
                paragraph={colonSplitParagraph.join('')}
                index={index}
              />
            </React.Fragment>
          );
        }

        // Render in special formatting if first sentence is a Bill/Act statement
        if (
          paragraph.split('.').length <= 1 &&
          /(Act|Bill of Rights)/g.test(paragraph)
        ) {
          return <ActStatement key={index}>{paragraph}</ActStatement>;
        }

        // Otherwise render as normal paragraph
        return <BillParagraph key={index}>{paragraph}</BillParagraph>;
      })}
    </>
  );
}
