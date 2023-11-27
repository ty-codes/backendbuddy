import { device } from 'constants';
import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  max-height: 100vh;
  overflow: hidden;
  width: 60%;
  position: relative;
  background-color: #f8f8f8;

  @media ${device.isSmallDevice} {
    width: 100%;
  }
`;

export const Header = styled.div`
  border-bottom: 1px solid #eee;
  width: 100%;
  position: sticky;
  top: 0;
`;

export const Content = styled.div`
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media ${device.isSmallDevice} {
    padding-inline: 1rem;
  }

  svg {
    width: 2rem;
    height: 2rem;

    @media ${device.mobileL} {
      width: 1.5rem;
      height: 1.5rem;
    }

    &.question {
      border-radius: 50%;
      background: rgba(174, 242, 206, 0.15);
      border: 1px solid ${props => props.theme.primaryColor};
      padding: 0.8rem;
      width: 2.5rem;
      height: 2.5rem;
    }
  }

  h6 {
    @media ${device.isSmallDevice} {
      font-size: 1.2rem;
    }
  }
`;

export const Avatar = styled.div`
  background-color: #ccc;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background-image: url(${props => props.background});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Suggestions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-inline: 2rem;

  @media ${device.isSmallDevice} {
    padding-inline: 1rem;
  }

  button {
    border: 1px solid rgba(57, 172, 110, 0.74);
    background: rgba(57, 172, 110, 0.07);
    color: ${props => props.theme.black700};
    height: 3rem;
    width: 20rem;
  }

  p {
    color: rgba(0, 0, 0, 0.8);
  }
`;

export const Messages = styled.div``;

export const Input = styled.div`
  position: fixed;
  bottom: 0;
  padding-block: 1rem 1.5rem;
  width: inherit;
  background-color: #F8F8F8;

  div {
    display: flex;
    justify-content: space-between;
    padding-inline: 1rem;
    align-items: center;
    height: 3rem;
    width: max(70%, 350px);
    margin: auto;
    border: 1px solid rgba(57, 172, 110, 0.58);
    background: rgba(57, 172, 110, 0.07);
    border-radius: 0.3rem;

    @media ${device.mobileM} {
      width: 21.42rem;
    }
  }

  input[type='text'],
  input[type='text']:hover,
  input[type='text']:focus {
    border: none;
    outline: none;
    background: transparent;
    flex-grow: 1;
    margin: 1rem;
  }

  svg {
    width: 1.4rem;
    height: 1.4rem;
  }
`;

export const AiAvatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-block: 2rem;
  flex-direction: column;

  h6 {
    font-weight: 600;
    font-size: 1.2rem;
  }
`;
