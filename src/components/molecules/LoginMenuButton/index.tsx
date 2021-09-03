import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import LoginButton from '@components/molecules/LoginButton';
// Import ButtonCanvas from '@components/atoms/ButtonCanvas';
import { useAuth0 } from '@auth0/auth0-react';
import createApolloClient from '@utils/ApolloClient';
import { gql } from '@apollo/client';
import useLocalStorage from '@utils/useLocalStorage';
import { AUTH0_LOGOUT_URL } from '@constants';
import SignUpFormMask from '@components/organisms/SignUpFormMask';
import ButtonCanvas from '@components/atoms/ButtonCanvas';
import Avatar from '@components/atoms/Avatar';

export type LoginMenuButtonProps = Record<string, unknown>;

const LoginMenuButton = ({}: LoginMenuButtonProps) => {
  const [active, setActive] = useState(false);
  const [isNewUser, setIsNewUser] = useState(false);
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

  useEffect(() => {
    if (profile && (isLoading || isAuthenticated)) {
      setIsNewUser(profile && (!profile.political_party || !profile.state));

      if (isNewUser) {
        // Prevent background scrolling during overlay
        document.body.classList.toggle('noScroll', true);
      }

      if (!isNewUser) {
        document.body.classList.toggle('noScroll', false);
      }
    }
  }, [profile, isLoading, isAuthenticated, setIsNewUser, isNewUser]);

  useEffect(() => {
    if (profile && !isLoading && !isAuthenticated) {
      // Update local session if user is logged out
      setProfile('');
    }
  }, [profile, isLoading, isAuthenticated, setProfile]);

  const handleLogin = async () => {
    if (!isAuthenticated) {
      await loginWithPopup();
    }

    if (isAuthenticated) {
      setActive(!active);
    }
  };

  const handleLogout = async () => {
    setActive(false);
    logout({
      returnTo: AUTH0_LOGOUT_URL,
    });
    setProfile('');
  };

  return (
    <Wrapper>
      {isNewUser && (
        <SignUpFormMask userProfile={profile} setUserProfile={setProfile} />
      )}
      <ButtonGroup
        initial="hidden"
        animate={active ? 'visible' : 'hidden'}
        variants={GroupMotionVariants}
      >
        <SubButton
          variants={getSubButtonMotionVariants(1, 0)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleLogout}
        >
          LOGOUT
          {/* <Tooltip className="tooltip">
            <span>Logout</span>
          </Tooltip> */}
        </SubButton>
      </ButtonGroup>
      {profile ? (
        <ButtonCanvas onClick={handleLogin}>
          <Avatar party={profile.political_party}>
            <StyledImg src={profile.picture} alt="User Menu" />
          </Avatar>
        </ButtonCanvas>
      ) : (
        <ButtonCanvas onClick={handleLogin}>
          <StyledLoginButton>LOGIN</StyledLoginButton>
        </ButtonCanvas>
      )}
    </Wrapper>
  );
};

export default LoginMenuButton;

const GroupMotionVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const getSubButtonMotionVariants = (
  buttonIndex: number,
  totalButtons: number
) => {
  const buttonOrder = totalButtons - buttonIndex;
  const buttonGap = buttonOrder * 12;
  const buttonHeight = buttonOrder * 50;
  const animateTo = -(buttonHeight + buttonGap);

  return {
    hidden: { y: 0, opacity: 0 },
    visible: { y: animateTo, opacity: 1 },
  };
};

const Wrapper = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
`;

// TODO: Move Tooltips behind the button
const Tooltip = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: 0;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  z-index: -1;

  transition: all 0.3s;

  span {
    text-align: right;
    font-family: advocate_c43_mid;
    font-size: 1.2rem;
  }
`;

const ButtonGroup = styled(motion.div)`
  position: relative;
`;

const Button = styled(motion.button)`
  position: relative;

  width: 50px;
  height: 50px;

  background-color: rgba(0, 0, 0, 0.9);

  border: 0;
  border-radius: 100px;
  border: var(--color-text) solid thin;
  box-shadow: inset 0 0 0 1px rgba(#000, 0.2),
    0 2px 0 rgba(var(--color-text), 0.2);
  outline: none;

  font-size: 0.8rem;
  font-family: advocate_c43_mid;
  color: var(--color-text);

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: 100%;
    width: 100%;
  }

  :hover {
    .tooltip {
      left: -110%;
      opacity: 1;
    }
  }
`;

const SubButton = styled(Button)`
  position: absolute;
  top: 50%;
`;

const StyledLoginButton = styled.button`
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
