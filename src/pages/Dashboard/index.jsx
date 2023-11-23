import styled from 'styled-components';
import { device } from 'constants';

export default function Dashboard() {
  return (
    <Page>
      <h1>Dashboard</h1>
    </Page>
  );
}
const Page = styled.div`
  width: 100%;
  gap: 20px;
  display: flex;

  @media ${device.isSmallDevice} {
    flex-direction: column;
  }
`;

const Main = styled.section`
  width: 65%;

  @media ${device.isSmallDevice} {
    width: 100%;
  }
`;

const SideBar = styled.section`
  width: 35%;

  @media ${device.isSmallDevice} {
    width: 100%;
  }
`;
