import React from 'react';
import styled from 'styled-components';

const ContentWrapper = styled.div`
  position: relative;
  float: right;
  width: 100%;
  max-width: 710px;
  height: 100%;

  padding-left: 3rem;
  padding-bottom: 0;

  display: flex;

  .image {
    width: 100%;
    height: auto;
    max-height: 50%;
    align-self: center;

    path {
      fill: var(--color-gray500);
    }
  }
`;

export default ContentWrapper;
