import { Wrapper, Header, Avatar, Content, Suggestions, Input, Messages } from './ChatPage.style';
import { prompts } from 'constants';
import { businessman } from 'assets';

export default function Chat () {
    document.title = 'New Chat';

    return (
        <Wrapper>
            <Header>
                <Content>
                    <Avatar background={businessman} />
                    <h6>New chat</h6>
                    <Avatar background={businessman} />
                </Content>
            </Header>
            <Avatar background={businessman} />
            <Suggestions>
                {prompts?.map((prompt, index) => 
                    <button type='text' key={`prompt-${index}`} >{prompt?.text}</button>
                )}
            </Suggestions>
            <Messages>
            </Messages>
            <Input>
            </Input>
        </Wrapper>
    )
}