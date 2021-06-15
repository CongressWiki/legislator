import React from 'react';
import BillParagraph from '@components/atoms/BillParagraph';

export type BillTextProps = {
  billText: string;
  className?: string;
};

const BillText = ({ billText, className }: BillTextProps) => {
  const paragraphs = billText.split('\n');

  return (
    <div className={className}>
      {paragraphs.map((paragraph, index) => (
        <BillParagraph key={index}>{paragraph}</BillParagraph>
      ))}
    </div>
  );
};

export default BillText;
