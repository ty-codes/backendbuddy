import styled from 'styled-components';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Navbar from 'react-bootstrap/Navbar';
import { device } from 'constants';

export const OffcanvasTitle = styled(Offcanvas.Title)`
  img {
    @media ${device.isSmallDevice} {
      width: 8rem;
      height: 8rem;
    }
  }
`;

export const OffcanvasBody = styled(Offcanvas.Body)`
  display: flex;
  justify-content: space-between;
  margin-inline: 1rem;

  @media ${device.isSmallDevice} {
    margin-inline: 0;
  }

  a {
    text-transform: uppercase;
    text-decoration: none;
    color: ${props => props.theme.black};
    font-weight: 600;
    text-align: center;

    &:hover,
    &:active,
    &:focus {
      text-decoration: none;
      color: ${props => props.theme.black};
    }
  }
`;

export const OffcanvasHeader = styled(Offcanvas.Header)``;

export const Nav = styled(Navbar)`
  padding-inline: 6rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 1rem;

  @media ${device.isSmallDevice} {
    padding-inline: 2rem;
  }

  @media ${device.mobileL} {
    padding-inline: 1rem;
  }

  .offcanvas.offcanvas-end {
    display: flex;
    align-items: flex-end;
  }

  .navbar-toggler:focus {
    outline: none;
    box-shadow: none;
  }

  .navbar-brand {
    margin: 0;
    padding: 0;
    
    svg {
      width: 3rem;
      height: 3rem;
  
      @media ${device.isSmallDevice} {
        width: 2.2rem;
        height: 2.2rem;
      }
    }
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  width: inherit;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 2rem;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;
