import { useState } from 'react';
import { config } from './static';
import { Wrapper, Row, Tab, Button, Header } from './Filters.style';

export default function Filters() {
  // monitors active tab state
  const [tab, setTab] = useState('all');

  function isActive(title) {
    return title.toLowerCase() === tab.toLowerCase();
  };

  return (
    <Wrapper>
      <Header>Categories</Header>
      <Row>
        {config?.map(field => (
          <Tab
            isActive={isActive(field.title)}
            onClick={() => setTab(field.title)}
            key={`${field.title}-tab`}
          >
            <p>{field.title}</p>
            <Button isActive={isActive(field.title)}></Button>
          </Tab>
        ))}
      </Row>
    </Wrapper>
  );
}
