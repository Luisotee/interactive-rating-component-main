import { Group } from '@mantine/core';
import { NextPage } from 'next';
import { CardRating } from '../components/card-rating';
import { ThemeToggler } from '../components/darkmode-toggle';
import { TopNavbar } from '../components/header';

const Home: NextPage = () => {
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
        <CardRating />
      </Group>
    </>
  );
};

export default Home;
