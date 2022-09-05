import {
  Badge,
  Button,
  Card,
  Grid,
  Group,
  Image,
  Text,
  Title,
} from '@mantine/core';
import { useState } from 'react';
import { CardRatingProps } from '../types';

export function CardRating({ isSent, setSent }: CardRatingProps) {
  const [buttonColor1, setButtonColor1] = useState('gray');
  const [buttonColor2, setButtonColor2] = useState('gray');
  const [buttonColor3, setButtonColor3] = useState('gray');
  const [buttonColor4, setButtonColor4] = useState('gray');
  const [buttonColor5, setButtonColor5] = useState('gray');

  function gradeHandle(grade: number) {
    if (grade == 1) {
      setButtonColor1('orange');
      setButtonColor2('gray');
      setButtonColor3('gray');
      setButtonColor4('gray');
      setButtonColor5('gray');
    }
    if (grade == 2) {
      setButtonColor1('gray');
      setButtonColor2('orange');
      setButtonColor3('gray');
      setButtonColor4('gray');
      setButtonColor5('gray');
    }
    if (grade == 3) {
      setButtonColor1('gray');
      setButtonColor2('gray');
      setButtonColor3('orange');
      setButtonColor4('gray');
      setButtonColor5('gray');
    }
    if (grade == 4) {
      setButtonColor1('gray');
      setButtonColor2('gray');
      setButtonColor3('gray');
      setButtonColor4('orange');
      setButtonColor5('gray');
    }
    if (grade == 5) {
      setButtonColor1('gray');
      setButtonColor2('gray');
      setButtonColor3('gray');
      setButtonColor4('gray');
      setButtonColor5('orange');
    }
  }

  return (
    <Card
      p="lg"
      radius="lg"
      style={{
        width: 390,
        backgroundImage: 'linear-gradient(to bottom, #252a34, #181e27)',
      }}
      withBorder
    >
      <Group>
        <Image mb="md" width={17} height={16} src="icon-star.svg" />
      </Group>
      <Group position="left" mt="md" mb="xs">
        <Title order={2} color="white">
          How did we do?
        </Title>
      </Group>
      <Text size="sm" color="dimmed">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </Text>
      <Grid mt="sm" mb="lg" justify={'center'}>
        <Grid.Col span={2}>
          <Button
            radius="xl"
            size="md"
            color={buttonColor1}
            onClick={() => gradeHandle(1)}
          >
            1
          </Button>
        </Grid.Col>
        <Grid.Col span={2}>
          <Button
            radius="xl"
            size="md"
            color={buttonColor2}
            onClick={() => gradeHandle(2)}
          >
            2
          </Button>
        </Grid.Col>
        <Grid.Col span={2}>
          <Button
            radius="xl"
            size="md"
            color={buttonColor3}
            onClick={() => gradeHandle(3)}
          >
            3
          </Button>
        </Grid.Col>
        <Grid.Col span={2}>
          <Button
            radius="xl"
            size="md"
            color={buttonColor4}
            onClick={() => gradeHandle(4)}
          >
            4
          </Button>
        </Grid.Col>
        <Grid.Col span={2}>
          <Button
            radius="xl"
            size="md"
            color={buttonColor5}
            onClick={() => gradeHandle(5)}
          >
            5
          </Button>
        </Grid.Col>
      </Grid>
      <Button
        style={{ backgroundColor: '#fb7413' }}
        fullWidth
        mt="md"
        radius="lg"
        onClick={() => setSent(true)}
      >
        SUBMIT
      </Button>
    </Card>
  );
}
