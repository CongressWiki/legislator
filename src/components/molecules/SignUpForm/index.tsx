import React, { useState } from 'react';
import styled from 'styled-components';
import { User } from '@type/hasura';
import Avatar from '@components/atoms/Avatar';
import { motion } from 'framer-motion';
import states from './states.json';
import createApolloClient from '@utils/ApolloClient';
import { gql } from '@apollo/client';
import { useAuth0 } from '@auth0/auth0-react';
import { AUTH0_LOGOUT_URL } from '@constants';

export type SignUpFormProps = {
  userProfile: User;
  setUserProfile: (profile: User) => void;
};

const SignUpForm = ({ userProfile, setUserProfile }: SignUpFormProps) => {
  const { user, getAccessTokenSilently, logout } = useAuth0();
  const [inputs, setInputs] = useState({
    firstName: userProfile.first_name || '',
    lastName: userProfile.last_name || '',
    politicalParty: userProfile.political_party || '',
    state: userProfile.state || '',
  });

  async function updateUserProfile() {
    const accessToken = await getAccessTokenSilently();
    const apolloClient = createApolloClient(accessToken);
    return apolloClient.mutate({
      mutation: gql(`mutation updateUserSignUp(
          $id: String!,
          $first_name: String!,
          $last_name: String!,
          $political_party: String!,
          $state: String!
          ) {
            update_users(where: {id: {_eq: $id}}, _set: {
              first_name: $first_name,
              last_name: $last_name,
              political_party: $political_party,
              state: $state
            }) {
              returning {
                id
                first_name
                last_name
                last_seen
                picture
                political_party
                state
              }
            }
          }`),
      variables: {
        id: user?.sub,
        first_name: inputs.firstName,
        last_name: inputs.lastName,
        political_party: inputs.politicalParty,
        state: inputs.state,
      },
    });
  }

  const handleInputChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLSelectElement
  > = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit: React.FormEventHandler<
    HTMLInputElement | HTMLFormElement
  > = async (e) => {
    e.preventDefault();
    const response = await updateUserProfile();
    setUserProfile(response?.data?.update_users.returning[0]);
  };

  return (
    <>
      <Logout
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() =>
          logout({
            returnTo: AUTH0_LOGOUT_URL,
          })
        }
      >
        logout
      </Logout>
      <Wrapper
        transition={{ duration: 0.4 }}
        initial={{
          scaleY: 0,
        }}
        animate={{
          scaleY: 1,
        }}
      >
        <Title>
          <h1 className="name">Sign Up</h1>
          <h2 className="title">New User</h2>
        </Title>

        <Avatar className="image" party={inputs.politicalParty} size="80px">
          <StyledImg src={userProfile.picture} />
        </Avatar>

        <StyledForm onSubmit={handleSubmit}>
          <label>First Name</label>
          <input
            required
            placeholder="First Name"
            type="text"
            name="firstName"
            value={inputs.firstName}
            onChange={handleInputChange}
          />

          <label>Last Name</label>
          <input
            required
            placeholder="Last Name"
            type="text"
            name="lastName"
            value={inputs.lastName}
            onChange={handleInputChange}
          />

          <label>State</label>
          <select
            required
            placeholder="State"
            name="state"
            value={inputs.state}
            onChange={handleInputChange}
          >
            <option hidden value="">
              State
            </option>
            {states.map((state) => (
              <option key={state.abbreviation} value={state.abbreviation}>
                {state.name}
              </option>
            ))}
          </select>

          <label>Political Party</label>
          <select
            required
            placeholder="Political Party"
            name="politicalParty"
            value={inputs.politicalParty}
            onChange={handleInputChange}
          >
            <option hidden value="">
              Political Party
            </option>
            <option value="democrat">Democrat</option>
            <option value="republican">Republican</option>
            <option value="independent">Independent</option>
          </select>

          <Submit
            className="center"
            type="submit"
            value="submit"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onSubmit={handleSubmit}
          />
        </StyledForm>
      </Wrapper>
    </>
  );
};

export default SignUpForm;

const Logout = styled(motion.span)`
  position: fixed;
  top: 1%;
  left: auto;
  font-family: advocate_c43_mid;
  color: var(--color-secondary);
  font-size: 1.2rem;

  :hover {
    cursor: pointer;
  }
`;

const Wrapper = styled(motion.div)`
  position: relative;
  z-index: 2;

  width: 500px;
  max-width: 100vw;
  height: 400px;
  max-height: 500px;

  overflow: hidden;

  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.2);
  background: rgba(0, 0, 0, 0.5);

  border-radius: 10px;
  border: solid thin var(--color-text);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const Title = styled.div`
  position: relative;
  z-index: 2;

  flex: 0 1 65px;
  height: 70px;
  padding: 10px;

  background: rgba(0, 0, 0, 0.2);

  color: #fff;
  text-transform: uppercase;
  text-align: center;

  display: flex;
  flex-direction: column;

  .name {
    grid-area: name;
  }

  .title {
    grid-area: title;
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.8rem;
    letter-spacing: 1px;
  }

  h1,
  h2 {
    font-family: advocate_c43_mid;
    font-weight: normal;
    font-size: 1.5rem;
    margin: 0;
    padding: 0;
  }
`;

const StyledImg = styled.img`
  width: 100%;
  height: auto;
`;

const StyledForm = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 6px;
  row-gap: 1rem;

  label {
    grid-column: 1 / 2;
    width: auto;
    max-width: 200px;
    text-align: right;
    font-family: advocate_c43_mid;
  }

  input,
  select {
    grid-column: 2 / 3;
    width: auto;
    max-width: 200px;
    position: relative;

    background-color: transparent;

    border: unset;
    border-bottom: solid thin var(--color-text);
    outline: none;

    transition: 0.3s all;

    color: var(--color-gray700);
  }

  .center {
    grid-column: 1 / -1;
    justify-self: center;
    border: unset;
  }
`;

const Submit = styled(motion.input)`
  font-family: advocate_c43_mid;
  font-size: 1.5rem;
  color: var(--color-secondary) !important;
  :hover {
    cursor: pointer;
  }
`;
