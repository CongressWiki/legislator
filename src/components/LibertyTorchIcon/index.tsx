import {ReactComponent as LibertyTorchSvg} from '@static/images/Liberty_Torch.svg';
import styled from 'styled-components';

const LibertyTorchIcon = styled(LibertyTorchSvg)`
  margin: 0;
  width: 2em;

  path {
    fill: var(--color-gray500);
  }
`;

export default LibertyTorchIcon;
