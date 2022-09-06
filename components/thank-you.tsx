import { Badge, Card, Group, Image, Text, Title } from '@mantine/core';
import { grade } from './card-rating';

export function ThankYou() {
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
      <Group style={{ display: 'block' }}>
        <Group position="center">
          <Image src="illustration-thank-you.svg" width={162} height={108} />
        </Group>
        <Group position="center" mt="lg">
          <Badge color="gray" style={{ color: 'orange' }}>
            You selected {grade} out of 5
          </Badge>
        </Group>
        <Group position="center" mt="xl">
          <Title order={2}>Thank you!</Title>
        </Group>
        <Group position="center">
          <Text align="center" color="dimmed">
            We appreciate you taking the time to give a rating, if you ever need
            more support, don't hesitate to get in touch!
          </Text>
        </Group>
      </Group>
    </Card>
  );
}
