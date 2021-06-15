import React from 'react';
import styled from 'styled-components';

export type FooterProps = { className?: string };

const Footer = ({}: FooterProps) => {
  return (
    <Wrapper>
      <ToolBar>
        <ButtonsBar>
          <a href="https://ryanparker.dev/" referrerPolicy="no-referrer">
            <p>about the site author</p>
          </a>
        </ButtonsBar>
      </ToolBar>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: block;
  height: 10vh;
  margin: 0;
  padding: 0;

  text-align: center;

  display: flex;
  justify-content: center;
  border-top: 1px solid var(--color-gray300);
  background-color: var(--color-background);
`;

const ButtonsBar = styled.div`
  position: relative;
  margin: 0;
  padding: 0;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const ToolBar = styled.div`
  position: relative;
  height: 100%;
  width: min(140ch, calc(100% - 64px));
  margin: 0;
  z-index: 100;

  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-family: advocate_c43_mid;
  }

  a {
    text-decoration: none;
    color: var(--color-secondary);
    :hover {
      color: var(--color-gold);
    }
  }

  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const FooterSpacer = styled.div`
  position: relative;
  top: 0;
  margin: 0;
  padding: 0;
  height: 115px;
  width: 100%;
`;

export default Footer;
