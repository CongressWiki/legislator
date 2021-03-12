import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: block;

  background: hsl(215, 51%, 14%);

  border-top: thin solid hsl(45, 81%, 53%);
  border-bottom: thin solid hsl(45, 81%, 53%);

  -webkit-box-shadow: 0px 6px 15px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 6px 15px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 6px 15px 0px rgba(0, 0, 0, 0.75);
`;

export default Wrapper;
