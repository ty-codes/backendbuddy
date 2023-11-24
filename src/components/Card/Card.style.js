import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 30rem;
  border-radius: 0.4rem;
  box-shadow: 0px 4px 8px 0px #eee, 0 6px 20px 0 #eee;
`;

export const Image = styled.div`
  background-color: wheat;
  padding: 0.5rem 3rem;
  display: flex;
  justify-content: center;
  border-radius: 0.4rem 0.4rem 0 0;
  width: 100%;

  img {
    width: 12rem;
    height: 12rem;
  }
`;

export const Text = styled.div`
  padding: 1rem;

  h6 {
    font-weight: 600;
    color: ${props => props.theme.primaryColor};
  }

  p {
    color: ${props => props.theme.black700};
  }
`;
