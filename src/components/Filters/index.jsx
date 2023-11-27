import { useEffect, useState } from 'react';
import { config } from './static';
import { Wrapper, Row, Tab, Button, Header } from './Filters.style';
import { useAppContext } from 'context/AppContext';
import { iphone } from 'assets';

export default function Filters() {
  const { setData } = useAppContext();

  // monitors active tab state
  const [tab, setTab] = useState({
    title: 'All',
    key: '',
  });

  function isActive(title) {
    return title?.toLowerCase() === tab?.title?.toLowerCase();
  }

  useEffect(() => {
    // filter products by tab key
    // alter data in context

    // test empty state (tbd)
    if (tab.key == 'phone') {
      setData([]);
    } else {
      setData(
        Array(20).fill({
          image: iphone,
          name: 'Apple iPhone 13',
          price: '400',
          currency: '$',
        }),
      );
    }
  }, [tab]);

  return (
    <Wrapper>
      <Header>Categories</Header>
      <Row>
        {config?.map(field => (
          <Tab
            isActive={isActive(field.title)}
            onClick={() => setTab(field)}
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
