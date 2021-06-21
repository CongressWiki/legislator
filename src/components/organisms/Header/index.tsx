import React from 'react';
import styled from 'styled-components';
import ThemeToggle from '@components/molecules/ThemeToggle';
import LoginButton from '@components/molecules/LoginButton';
import SiteTitle from '@components/atoms/SiteTitle';
import { useStaticQuery, graphql, Link } from 'gatsby';

export type HeaderProps = {};

const Header = ({}: HeaderProps) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Wrapper>
      <ToolBar>
        <Link to="/">
          <SiteTitle title={data.site.siteMetadata?.title} />
        </Link>
        {/* TODO: Center menu */}
        {/* <Link to="/bills">
          <p>Bills</p>
        </Link> */}
        <ButtonsBar>
          <ThemeToggle />
          <LoginButton />
        </ButtonsBar>
      </ToolBar>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  position: absolute;
  top: 0;
  left: 0;

  margin: 0;
  padding: 0;

  display: flex;
  justify-content: center;

  width: 100%;
  /* width: 100vw; */
  height: 115px;

  border-bottom: 1px solid var(--color-gray300);
  background-color: var(--color-background);
`;

const ToolBar = styled.div`
  z-index: 100;
  position: relative;

  height: 100%;
  /* width: 100vw; */
  width: min(140ch, calc(100% - 64px));
  margin: 0;
  margin-left: 9%;
  margin-right: 9%;
  padding: 0;

  justify-self: center;

  display: flex;
  /* flex-wrap: wrap; */
  justify-content: space-between;
  align-items: center;

  gap: 0;

  a {
    text-decoration: none;
  }

  @media (max-width: 600px) {
    width: 100%;
    justify-content: space-around;
    flex-direction: column;
  }
`;

const ButtonsBar = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
  width: 120px;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const HeaderSpacer = styled.div`
  position: relative;
  top: 0;
  margin: 0;
  padding: 0;
  height: 115px;
  width: 100%;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export default Header;