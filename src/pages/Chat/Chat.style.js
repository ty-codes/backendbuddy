import styled from 'styled-components';
import { device } from 'constants';

export const Wrapper = styled.main`
    display: flex;
    width: 100%;
    max-height: 100vh;
    height: 100vh;
    overflow: hidden;
`;

export const Banner = styled.div`
    background-color: ${props => props.theme.primaryColor};
    height: 100vh;
    width: 40vw;
    min-width: 24rem;
    display: flex;
    justify-content: center;

    @media ${device.isSmallDevice} {
        display: none;
    }
`;

export const Text = styled.div`
    padding-block: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-inline: 3rem;
    margin: auto;

    h4 {
        color: ${props => props.theme.white};
        text-align: center;
        font-weight: 700;
    }

    img {
        width: 35vw;
        height: 35vw;

        @media (max-width: 991px) {
            width: 24rem;
            height: 24rem;
        }
    }
`