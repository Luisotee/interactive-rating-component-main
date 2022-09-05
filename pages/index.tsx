import { Group } from '@mantine/core';
import { NextPage } from 'next';
import { useState } from 'react';
import { CardRating } from '../components/card-rating';
import { ThankYou } from '../components/thank-you';

const Home: NextPage = () => {
  const [isSent, setSent] = useState(false);
  return (
    <>
      <Group
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        {isSent ? (
          <ThankYou />
        ) : (
          <CardRating isSent={isSent} setSent={setSent} />
        )}
      </Group>
    </>
  );
};

export default Home;
