import React from 'react';
import styled from 'styled-components';

const ContentWrapper = styled.div`
  position: relative;
  float: right;
  height: 100%;
  width: 70ch;
  max-width: 900px;
  display: flex;

  @media (max-width: 1400px) {
    width: 100%;
    padding-left: 3rem;
    padding-bottom: 0;
  }

  @media (max-width: 900px) {
    width: 100%;
    padding-left: 3rem;
    padding-bottom: 0;
  }
`;

export default ContentWrapper;
