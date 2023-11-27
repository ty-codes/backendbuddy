import { Card, Title, Empty } from 'components';
import { Products, Wrapper, Row } from './Cards.style';
import { useAppContext } from 'context/AppContext';

export default function Cards() {
  const types = ['Trending', 'Others'];
  const { data } = useAppContext();

  return (
    <>
      {data.length > 0 ? (
        types?.map(type => (
          <Wrapper key={`${type}-card`}>
            <Row>
              <Title text={type} />
              <Products>
                {data.map((product, index) => (
                  <Card key={`card-${index}`} data={product} />
                ))}
              </Products>
            </Row>
          </Wrapper>
        ))
      ) : (
        <Empty />
      )}
    </>
  );
}
