import styled from 'styled-components';
import { device } from 'constants';
import { Wrapper, Header } from './Dashboard.style';
import { Filters, Trending, Products } from 'components';

export default function Dashboard() {
  return (
    <Wrapper>
      <Header>
        <h4>Products</h4>
      </Header>
      <Filters />
      <Trending />
      <Products />
    </Wrapper>
  );
}
