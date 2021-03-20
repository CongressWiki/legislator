import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: block;

  background: var(--color-ribbon);

  border-top: thin solid var(--color-gold);
  border-bottom: thin solid var(--color-gold);

  -webkit-box-shadow: 0px 6px 15px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 6px 15px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 6px 15px 0px rgba(0, 0, 0, 0.75);
`;

export default Wrapper;
