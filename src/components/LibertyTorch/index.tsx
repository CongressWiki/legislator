import { ReactComponent as LibertyTorchSvg } from '@static/images/Liberty_Torch.svg';
import styled from 'styled-components';

const LibertyTorch = styled(LibertyTorchSvg)`
  margin: 0;
  width: 2em;

  path {
    fill: var(--color-gray500);
  }

  path:hover {
    cursor: pointer;
    fill: var(--color-secondary);
  }
`;

export default LibertyTorch;
