import styled from 'styled-components';
import SimpleModal from 'simple-react-modal';

export const DimmerWrapper = styled(SimpleModal)`
  &.dimmer-wrapper {
    position: fixed;
    inset: 0;
    z-index: 12;
    transition: opacity 1s ease-in 0s;
    background: #01050cb2;
    backdrop-filter: blur(0.0714rem);
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
