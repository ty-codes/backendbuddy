import { Wrapper, Image, Text } from './Card.style';

export default function Card({ data }) {
  const { image, name, price, currency } = data ?? {};

  return (
    <Wrapper>
      <Image>
        <img src={image} alt={`${name}`} />
      </Image>
      <Text>
        <p>{name}</p>
        <h6>
          {currency} {price}
        </h6>
      </Text>
    </Wrapper>
  );
}
