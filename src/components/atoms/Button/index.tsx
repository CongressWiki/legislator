import styled from 'styled-components';

const Button = styled.button`
  display: inline-block;
  outline: none;
  border: none;
  background-color: transparent;
  color: var(--color-text);
  border: solid thin var(--color-text);
  border-radius: 5px;

  :hover {
    color: var(--color-secondary);
    border-color: var(--color-secondary);
    cursor: pointer;
  }
`;

export default Button;
