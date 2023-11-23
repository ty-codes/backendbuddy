import styled from "styled-components";
import { device } from "constants";

export const Wrapper = styled.nav`
  display: flex;
  // width: 100%;
  align-items: center;
  padding: 1.2rem 1.85rem;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  transition: all 1s ease;
  z-index: 5;
  width: calc(100vw - ${(props) => props.theme.sideBarWidth});
  float: right;
  justify-content: space-between;
  background: #ffffff;

  .input-wrap {
    margin-bottom: 0;
  }

  .searchbar {
    height: 2.7rem;
    width: 20vw;
    min-width: 10.6rem;
    border-radius: 2rem;

    @media ${device.isSmallDevice} {
      margin-left: 0.65rem;
    }
  }

  @media ${device.laptop} {
    width: calc(100vw - 11.8rem);
  }

  @media ${device.isSmallDevice} {
    width: 100%;
    padding-inline: 0.65rem;
    gap: 0.5rem;
  }

  .burger {
    margin-right: 0.65rem;

    rect {
      fill: ${(props) => props.theme.primaryColor};
    }
  }

  .flex.icons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }
`;

export const Avatar = styled.span`
  position: relative;

  img {
    width: 2.7rem;
    height: 2.7rem;
    border-radius: 50%;
    object-fit: cover;

    @media (max-width: 520px) {
      width: 1.8rem;
      height: 1.8rem;
    }
  }
`;

export const User = styled.div`
  display: flex;
  gap: 0.5rem;

  .user-details {
    @media (max-width: 520px) {
      display: none;
    }
  }
`;
