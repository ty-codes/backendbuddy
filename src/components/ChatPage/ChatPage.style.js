import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100vh;
    max-height: 100vh;
    overflow: hidden;
    width: 100%;
`;

export const Header = styled.div`
    border-bottom: 1px solid #eee;
    width: 100%;
`;

export const Content = styled.div`
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const Avatar = styled.div`
    background-color: #ccc;
    width: 4rem;
    height: 4rem;
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

    button {
        border: 1px solid rgba(0, 0, 255, 0.1);
        color: ${props => props.theme.black700};
        height: 3rem;
        width: 20rem;
    }
`;

export const Messages = styled.div``;

export const Input = styled.div``;