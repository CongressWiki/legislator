import { ReactComponent as LibertyTorchSvg } from '../../images/Liberty_Torch.svg';
import styled from 'styled-components';

const LibertyTorch = styled(LibertyTorchSvg)`
  margin: 0;
  width: 4vw;
  padding: 10px;

  path {
    fill: var(--color-text);
  }

  path:hover {
    fill: var(--color-secondary);
  }
`;

export default LibertyTorch;
