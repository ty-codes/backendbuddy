import { Wrapper, Header } from './Dashboard.style';
import { Filters, Cards, TopNav } from 'components';

export default function Dashboard() {
  return (
    <Wrapper>
      <TopNav />
      <Header>
        <h6>Products</h6>
        <p>A list of all available products, prices and other details</p>
      </Header>
      <Filters />
      <Cards />
    </Wrapper>
  );
}
