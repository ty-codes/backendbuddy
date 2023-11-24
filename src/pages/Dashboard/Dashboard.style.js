import { device } from 'constants';
import styled from 'styled-components';

export const Wrapper = styled.main`
  background: #f8f8f8;
`;

export const Header = styled.div`
  padding: 2rem 6rem 0 6rem;

  @media ${device.isSmallDevice} {
    padding-inline: 2rem;
  }

  @media ${device.mobileL} {
    padding-inline: 1rem;
  }

  h6 {
    font-weight: 700;
    color: ${props => props.theme.black};
  }

  p {
    color: ${props => props.theme.black700};
  }
`;
