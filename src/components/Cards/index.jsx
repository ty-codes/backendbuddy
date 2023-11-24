import { Card, Title } from 'components';
import { Products, Wrapper, Row } from './Cards.style';
import { iphone } from 'assets';

export default function Cards() {
  const types = ['Trending', 'Others'];
  const data = {
    image: iphone,
    name: 'Apple iPhone 13',
    price: '400',
    currency: '$',
  };

  return (
    <>
      {types?.map(type => (
        <Wrapper key={`${type}-card`}>
          <Row>
            <Title text={type} />
            <Products>
              {Array(20)
                .fill(0)
                .map((_arg, index) => (
                  <Card key={`card-${index}`} data={data} />
                ))}
            </Products>
          </Row>
        </Wrapper>
      ))}
    </>
  );
}
