import { device } from 'constants';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem auto;
  padding-inline: 6rem;

  @media ${device.isSmallDevice} {
    justify-content: flex-start;
    padding-inline: 2rem;
    flex-direction: column;
    gap: 0.7rem;
  }

  @media ${device.mobileL} {
    padding-inline: 1rem;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: start;
  gap: 1rem;
  width: 100%;
  overflow-x: auto;
  justify-content: center;

  @media ${device.isSmallDevice} {
    justify-content: flex-start;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Button = styled.span`
  background-color: ${props =>
    props.isActive ? props.theme.primaryColor : 'transparent'};
  width: ${props => (props.isActive ? '1rem' : '0')};
  height: ${props => (props.isActive ? '1rem' : '0')};
  border-radius: 50%;

  @media ${device.isSmallDevice} {
    display: none;
  }
`;

export const Tab = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  @media ${device.isSmallDevice} {
    background-color: ${props =>
      props.isActive ? props.theme.primaryColor : 'rgba(222, 241, 231, 0.5)'};
    border-radius: 0.8rem;
    height: 3rem;
    padding-inline: 1.2rem;
    justify-content: center;
    border: ${props => props.isActive ? 'none' : '1px solid rgba(57, 172, 110, 0.7)'};
  }

  p {
    color: ${props =>
      props.isActive ? props.theme.primaryColor : props.theme.black700};
    font-weight: 600;
    width: max-content;

    @media ${device.isSmallDevice} {
      color: ${props =>
        props.isActive ? props.theme.white : props.theme.black700};
    }
  }
`;

export const Header = styled.h6`
  font-weight: 600;
  font-size: 1.2rem;
  display: none;

  @media ${device.isSmallDevice} {
    display: block;
  }
`;
