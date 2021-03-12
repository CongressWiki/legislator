import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  height: 100%;
  width: 50%;
  display: block;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export default Container;
