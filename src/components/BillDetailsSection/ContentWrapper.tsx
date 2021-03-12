import React from 'react';
import styled from 'styled-components';

const ContentWrapper = styled.div`
  position: relative;
  float: right;
  height: 100%;
  width: 100%;
  max-width: 900px;
  display: flex;

  padding-left: 5rem;
  padding-bottom: 3rem;

  @media (max-width: 900px) {
    padding-left: 3rem;
    padding-bottom: 0;
  }
`;

export default ContentWrapper;
