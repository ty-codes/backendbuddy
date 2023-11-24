import { Card } from 'components';
import { Wrapper } from './Trending.style';
import { iphone } from 'assets';

export default function Trending () {
    const data = {
        image: iphone,
        name: 'Apple 13',
        price: '400',
        currency: '$'
    };

    return(
        <Wrapper>
            <h5>Trending</h5>
            {Array(20).map((_arg, index) => <Card data={data} />)}
        </Wrapper>
    )
}