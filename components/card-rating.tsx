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
import { useHover } from '@mantine/hooks';
import StarIcon from './icons/icon-star.svg';

export function CardRating() {
  const { hovered, ref } = useHover(); //Mudar cor do botão

  return (
    <Card
      p="lg"
      radius="lg"
      style={{
        width: 390,
        backgroundImage: 'linear-gradient(to bottom, #252d37, #121417)',
      }}
      withBorder
    >
      <Group>
        <Image src={StarIcon} />
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
      <Grid mt="sm" justify={'center'}>
        <Grid.Col span={2}>
          <Button radius="xl" color="gray" size="md">
            1
          </Button>
        </Grid.Col>
        <Grid.Col span={2}>
          <Button radius="xl" color="gray" size="md">
            2
          </Button>
        </Grid.Col>
        <Grid.Col span={2}>
          <Button radius="xl" color="gray" size="md">
            3
          </Button>
        </Grid.Col>
        <Grid.Col span={2}>
          <Button radius="xl" color="gray" size="md">
            4
          </Button>
        </Grid.Col>
        <Grid.Col span={2}>
          <Button radius="xl" color="gray" size="md">
            5
          </Button>
        </Grid.Col>
      </Grid>
      <Button
        style={{ backgroundColor: '#fb7413' }}
        fullWidth
        mt="md"
        radius="lg"
      >
        SUBMIT
      </Button>
    </Card>
  );
}
