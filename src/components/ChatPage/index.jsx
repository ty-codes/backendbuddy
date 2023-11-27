import {
  Wrapper,
  Header,
  Avatar,
  Content,
  Suggestions,
  Input,
  Messages,
  AiAvatar,
} from './ChatPage.style';
import { prompts } from 'constants';
import { ai } from 'assets';
import { AirplaneIcon, LogoIcon, QuestionIcon } from 'assets/svg';
import { CameraOutlined } from '@ant-design/icons';

export default function Chat() {
  document.title = 'New Chat';

  return (
    <Wrapper>
      <Header>
        <Content>
          <LogoIcon />
          <h6>New chat</h6>
          <QuestionIcon className='question' />
        </Content>
      </Header>
      <AiAvatar>
        <Avatar background={ai} />
        {/* <h6>Ada</h6> */}
      </AiAvatar>
      <Suggestions>
        {prompts?.map((prompt, index) => (
          <button type="text" key={`prompt-${index}`}>
            {prompt?.text}
          </button>
        ))}
        <p>Not okay with these suggestions? Type in your prompt in the message box below</p>
      </Suggestions>
      <Messages></Messages>
      <Input>
        <div>
          <CameraOutlined />
          <input type="text" placeholder="Enter a prompt..." />
          <AirplaneIcon />
        </div>
      </Input>
    </Wrapper>
  );
}
