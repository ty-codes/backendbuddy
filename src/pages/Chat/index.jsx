import { ChatPage } from 'components';
import { Wrapper, Banner, Text } from './Chat.style';
import { businessman } from 'assets';

export default function Chat () {
    document.title = 'New Chat';

    return (
        <Wrapper>
            <Banner>
                <Text>
                    <h4>
                        Build your store without any hassle 
                        and in just a few quick steps</h4>
                    <img src={businessman} alt='idea-man' />
                </Text>
            </Banner>
            <ChatPage />
        </Wrapper>
    )
}