import React, { useEffect } from 'react';
import ButtonCanvas from '@components/atoms/ButtonCanvas';
import { useAuth0 } from '@auth0/auth0-react';
import Avatar from '@components/atoms/Avatar';
import createApolloClient from '@utils/ApolloClient';
import { gql } from '@apollo/client';
import useLocalStorage from '@utils/useLocalStorage';
import SignUpFormMask from '@components/organisms/SignUpFormMask';
import styled from 'styled-components';
import { AUTH0_LOGOUT_URL } from '@constants';

export type LoginButtonProps = {
  className?: string;
};

const LoginButton = ({ className }: LoginButtonProps) => {
  const [profile, setProfile] = useLocalStorage('profile', '');
  const {
    user,
    loginWithPopup,
    isAuthenticated,
    logout,
    getAccessTokenSilently,
    isLoading,
  } = useAuth0();

  useEffect(() => {
    async function getUserProfile() {
      const accessToken = await getAccessTokenSilently();
      const apolloClient = createApolloClient(accessToken);
      const response = await apolloClient.query({
        query: gql(`query getUserProfile($id: String!) {
          users(where: {id: {_eq: $id}}) {
            id
            first_name
            last_name
            last_seen
            picture
            political_party
            state
          }
        }`),
        variables: { id: user?.sub },
      });
      setProfile(response.data.users[0]);
    }

    if (isAuthenticated && user?.sub && !profile) {
      void getUserProfile();
    }
  }, [isAuthenticated, user, profile, setProfile, getAccessTokenSilently]);

  if (profile && !isLoading && !isAuthenticated) {
    // Update local session if user is logged out
    setProfile('');
  }

  if (profile && (isLoading || isAuthenticated)) {
    const isNewUser = profile && (!profile.political_party || !profile.state);

    if (isNewUser) {
      // Prevent background scrolling during overlay
      document.body.classList.toggle('noScroll', true);
    }

    if (!isNewUser) {
      document.body.classList.toggle('noScroll', false);
    }

    return (
      <>
        <ButtonCanvas
          className={className}
          onClick={() => {
            logout({
              returnTo: AUTH0_LOGOUT_URL,
            });
            setProfile('');
          }}
        >
          <Avatar party={profile.political_party}>
            <StyledImg src={profile.picture} alt="Logout" />
          </Avatar>
        </ButtonCanvas>
        {isNewUser && (
          <SignUpFormMask userProfile={profile} setUserProfile={setProfile} />
        )}
      </>
    );
  }

  return (
    <ButtonCanvas
      className={className}
      onClick={async () => {
        await loginWithPopup();
      }}
    >
      <Button>LOGIN</Button>
    </ButtonCanvas>
  );
};

export default LoginButton;

const Button = styled.button`
  width: fit-content;
  height: 50px;

  border-radius: 50%;
  border: solid thin transparent;
  background-color: transparent;
  outline: none;

  color: var(--color-text);
  font-family: advocate_c43_mid;
  font-size: 1.3rem;

  :hover {
    cursor: pointer;
  }
`;

const StyledImg = styled.img`
  width: 100%;
  height: auto;
  max-height: 60px;
`;
