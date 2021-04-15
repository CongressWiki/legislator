import styled from 'styled-components';

const BillParagraph = styled.p`
  font-size: 1.35rem;
  line-height: 2rem;
  letter-spacing: -0.063px;
  font-weight: normal;
  padding-top: 2rem;
  margin: 0;

  @media (max-width: 450px) {
    font-size: 1.15rem;
  }
`;

export default BillParagraph;
