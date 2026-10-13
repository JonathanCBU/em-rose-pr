import {
  Anchor,
  Box,
  Container,
  Group,
  Title,
  ActionIcon,
} from "@mantine/core";
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";
import classes from "./Header.module.css";

export interface HeaderProps {
  title: string;
  spy: any;
  sections: Array<string>;
  insta?: string;
  linkedin?: string;
  twitter?: string;
}

export function Header({
  title,
  spy,
  sections,
  insta = "",
  linkedin = "",
  twitter = "",
}: HeaderProps) {
  return (
    <Box
      component="header"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        backdropFilter: "blur(8px)",
        background:
          "color-mix(in srgb, var(--mantine-color-body) 85%, transparent)",
        borderBottom: "1px solid var(--mantine-color-default-border)",
      }}
    >
      <Container size="lg" py="sm">
        <Group justify="space-between" wrap="nowrap">
          <Title order={3}>{title}</Title>
          <Group gap="lg" component="nav" aria-label="Sections">
            {sections.map((s, i) => (
              <Anchor
                key={s}
                href={`#${s}`}
                size="sm"
                fw={spy.active === i ? 700 : 400}
                c={spy.active === i ? "blue" : "dimmed"}
                underline={spy.active === i ? "always" : "hover"}
              >
                {s}
              </Anchor>
            ))}
          </Group>
          <Group>
            {linkedin && (
              <ActionIcon
                component="a"
                target="_blank"
                href={linkedin}
                variant="subtle"
                aria-label="Settings"
                className={classes.socialIcon}
              >
                <IconBrandLinkedin style={{ width: "70%", height: "70%" }} />
              </ActionIcon>
            )}
            {insta && (
              <ActionIcon
                component="a"
                target="_blank"
                href={insta}
                variant="subtle"
                aria-label="Settings"
                className={classes.socialIcon}
              >
                <IconBrandInstagram style={{ width: "70%", height: "70%" }} />
              </ActionIcon>
            )}
            {twitter && (
              <ActionIcon
                component="a"
                target="_blank"
                href={twitter}
                variant="subtle"
                aria-label="Settings"
                className={classes.socialIcon}
              >
                <IconBrandX style={{ width: "70%", height: "70%" }} />
              </ActionIcon>
            )}
          </Group>
        </Group>
      </Container>
    </Box>
  );
}
