/* eslint-disable react/no-children-prop */
import { AppShell, Header, Navbar, Group, Text } from "@mantine/core";
import { ThemeToggler } from "./darkmode-toggle";

export function TopNavbar() {
  return (
    <Header height={70} p="sm">
      <Group position="apart" style={{ display: "flex", height: "100%" }}>
        <Group position="left">
          <Text>Logo</Text>
        </Group>
        <Group position="right">
          <ThemeToggler />
        </Group>
      </Group>
    </Header>
  );
}
