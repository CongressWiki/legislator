import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
// import { ThemeContext } from "./ThemeContext"

import DarkToggle from "@components/DarkToggle";

export type HeaderProps = {
  siteTitle: string;
};

const Header = ({ siteTitle }: HeaderProps) => {
  return (
    <Wrapper>
      <Link
        to="/"
        style={{
          textDecoration: `none`,
        }}
      >
        {siteTitle}
      </Link>
      <DarkToggle />
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 16px;
`;

export default Header;
