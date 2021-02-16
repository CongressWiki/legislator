import React from 'react';
import styled from 'styled-components';

const NoSummaryPlaceholder = styled.h2`
  color: var(--color-gray300);
  padding-top: 42px;
  margin: 0;
  :after {
    content: 'No Summary Available.';
  }
`;

export default NoSummaryPlaceholder;
