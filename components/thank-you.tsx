import { Card, Text } from '@mantine/core';

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
      <Text>Thanks</Text>
    </Card>
  );
}
