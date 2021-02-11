import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import DarkToggle from '@components/DarkToggle';

export type HeaderProps = {
  siteTitle: string;
};

const Header = ({ siteTitle }: HeaderProps) => {
  return (
    <Wrapper>
      <ToolBar>
        <Link
          to="/"
          style={{
            textDecoration: `none`,
          }}
        >
          <SiteTitle>{siteTitle}</SiteTitle>
        </Link>
        <DarkToggle />
      </ToolBar>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  margin: 0;
  width: 100%;
  min-height: 115px;
  border-bottom: 1px solid var(--color-gray300);
  background-color: var(--color-background);
`;

const ToolBar = styled.div`
  margin: 0;
  padding-left: 32px;
  padding-right: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
`;

const SiteTitle = styled.p`
  margin: 0;
  padding: 0px 0px 6px 0px;
  font-size: 51px;
  line-height: 44px;
  letter-spacing: -2px;
  font-family: Georgia, serif;
  font-variant: small-caps;
  text-transform: none;
  font-weight: 100;
  color: var(--color-secondary);
`;

export default Header;
