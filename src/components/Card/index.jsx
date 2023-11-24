import {Wrapper} from './Card.style';

export default function Card ({data}) {
    const {image, name, price, currency} = data ?? {};
    console.log(data);
    
    return (
        <Wrapper>
            <img src={image} alt={`${name}`} />
            <h5>{name}</h5>
            <h4>{currency} {price}</h4>
        </Wrapper>
    )
}