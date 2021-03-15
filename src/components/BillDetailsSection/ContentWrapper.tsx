import React from 'react';
import styled from 'styled-components';

const ContentWrapper = styled.div`
  position: relative;
  float: right;
  height: 100%;
  width: 70ch;
  max-width: 900px;
  display: flex;
  padding-left: 0.5rem;

  /* padding-bottom: 3rem; */

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

  /* @media (max-width: 600px) {
    flex-direction: column
  } */
`;

export default ContentWrapper;
