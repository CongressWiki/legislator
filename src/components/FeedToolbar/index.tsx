import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import ThemeToggle from '@components/ThemeToggle';
import UsaCountsLogo from '@components/icons/UsaCountsLogo';

const StyledUsaCountsLogo = styled(UsaCountsLogo)`
  width: 60px;
`;

export type FeedToolbarProps = {
  className?: string;
};

const FeedToolbar = ({ className }: FeedToolbarProps) => {
  return (
    <Wrapper className={className}>
      <Link to="/">
        <StyledUsaCountsLogo />
      </Link>
      <ThemeToggle className="button" />
    </Wrapper>
  );
};

export default FeedToolbar;

const Wrapper = styled.div`
  width: 100%;

  margin: 0;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas: 'logo . . button';

  border-left: 1px solid var(--color-gray300);
  border-right: 1px solid var(--color-gray300);
  border-bottom: 1px solid var(--color-gray300);

  background-color: var(--color-background);

  align-items: center;

  a {
    text-decoration: none;
  }

  .logo {
    grid-area: logo;
  }

  .button {
    grid-area: button;

    display: flex;
    justify-content: flex-end;
  }
`;
