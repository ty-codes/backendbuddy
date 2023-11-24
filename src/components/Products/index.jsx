import { Card } from 'components';
import { Wrapper, Products } from './Products.style';
import { iphone } from 'assets';

export default function Products () {
    const data = {
        image: iphone,
        name: 'Apple 13',
        price: '400',
        currency: '$'
    };

    console.log('products')

    return(
        <Wrapper>
            <h5>Products</h5>
            <Products>
            {Array(20).map(() => <Card data={data} />)}
            </Products>
        </Wrapper>
    )
}