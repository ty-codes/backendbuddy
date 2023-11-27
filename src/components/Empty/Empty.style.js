import { device } from 'constants';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 2rem 6rem 0 6rem;
  gap: 8rem;
  margin-top: 5rem;

  @media ${device.isSmallDevice} {
    padding-inline: 2rem;
    justify-content: center;
    padding-bottom: 3rem;
    margin-top: 0;
  }

  @media ${device.mobileL} {
    padding-inline: 1rem;
  }
`;

export const Button = styled.a`
  text-decoration: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 4rem;
    height: 4rem;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 7rem;

  h3 {
    font-weight: 600;
    color: rgb(0, 0, 0);
    text-align: center;
  }

  p {
    text-align: center;
    color: rgb(0, 0, 0);
    font-weight: 600;
  }

  img {
    display: none;

    @media ${device.isSmallDevice} {
      display: block;
      margin-inline: auto;
      margin-block: 2rem;
    }

    @media ${device.mobileM} {
      width: 12rem;
      height: 9rem;
    }
`;

export const Image = styled.img`
  width: 30rem;
  height: 25rem;

  @media ${device.isSmallDevice} {
    display: none;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;

  p {
    text-align: center;
    color: rgba(0, 0, 0, 0.8);
  }
`;
