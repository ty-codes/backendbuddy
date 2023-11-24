import { device } from 'constants';
import styled from 'styled-components';

export const Wrapper = styled.section`
  margin-bottom: 5rem;

  @media ${device.isSmallDevice} {
    padding-inline: 2rem;
  }

  @media ${device.mobileL} {
    padding-inline: 1rem;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  overflow-x: auto;
  gap: 1.5rem;

  &::-webkit-scrollbar {
    display: none;
  }

  @media ${device.isSmallDevice} {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    overflow: hidden;
  }
`;

export const Products = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  gap: 3rem;

  @media ${device.isSmallDevice} {
    gap: 1rem;
    overflow-x: auto;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
