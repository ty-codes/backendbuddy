import { error404, error404Mobile } from 'assets';
import { Wrapper, Footer, Button, Image, Text } from './Empty.style';
import { ChatPlusIcon } from 'assets/svg';

export default function Empty() {
  return (
    <Wrapper>
      <Image src={error404} alt="Error 404" />
      <Text>
        <span>
          <h3>Oops!</h3>
          <p>There are no products listed yet.</p>
          <p>All products posted will appear here.</p>
          <img src={error404Mobile} alt="Error 404" />
        </span>
        <Footer>
          <Button href="chat"><ChatPlusIcon /></Button>
          <p>Click to add products to your database</p>
        </Footer>
      </Text>
    </Wrapper>
  );
}
