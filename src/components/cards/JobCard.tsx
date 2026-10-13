import { Card, List, Stack, Text, Title } from "@mantine/core";
import classes from "./JobCard.module.css";

export interface JobCardProps {
  title: string;
  company: string;
  timeline: string;
  summary?: string;
  bullets?: string[];
  icon?: string;
  url?: string;
}

export function JobCard({
  title,
  company,
  timeline,
  summary,
  bullets = [],
}: JobCardProps) {
  return (
    <Card
      padding="sm"
      withBorder
      orientation="horizontal"
      className={classes.card}
    >
      {/* Title column: fixed width, so every card's divider lines up. */}
      <Card.Section
        inheritPadding
        px="md"
        withBorder
        className={classes.titleSection}
      >
        <Title order={3}>{title}</Title>
        <Text fw={500}>{company}</Text>
        <Text size="sm" c="dimmed">
          {timeline}
        </Text>
      </Card.Section>

      {/* Details column: takes the remaining width. */}
      <Card.Section inheritPadding px="md" className={classes.detailsSection}>
        <Stack gap="xs">
          {summary && <Text>{summary}</Text>}
          {bullets.length > 0 && (
            <List>
              {bullets.map((bullet) => (
                <List.Item key={bullet}>{bullet}</List.Item>
              ))}
            </List>
          )}
        </Stack>
      </Card.Section>
    </Card>
  );
}
