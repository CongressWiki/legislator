import { ReactComponent as CandidateSvg } from '@static/images/Candidate.svg';
import styled from 'styled-components';

const Candidate = styled(CandidateSvg)`
  margin: 0;
  width: 100%;

  path {
    fill: var(--color-text);
  }
`;

export default Candidate;
