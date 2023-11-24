import { device } from 'constants';
import styled from 'styled-components';

export const Text = styled.span`
    border-bottom: 1rem solid ${props => props.theme.primaryColor};
    min-width: 8rem;
    width: fit-content;
    display: inline-flex;
    justify-content: center;

    @media ${device.isSmallDevice} {
        border-bottom: none;
        min-width: auto;
    }

    h6 {
        font-weight: 600;
        font-size: 1.2rem;
    }
`;