import { Anchor, Card, List, Title } from "@mantine/core";

export interface HyperLinkProps {
  text: string;
  url: string;
}

export interface LinksCardProps {
  title: string;
  icon?: string;
  links: HyperLinkProps[];
}

export function LinksCard({ title, links, icon = "" }: LinksCardProps) {
  return (
    <Card padding="sm" withBorder orientation="vertical">
      <Card.Section inheritPadding px="xs" withBorder>
        <Title>{title}</Title>
      </Card.Section>
      <Card.Section inheritPadding px="md">
        <List>
          {links.map((l) => (
            <List.Item>
              <Anchor href={l.url} target="_blank">
                {l.text}
              </Anchor>
            </List.Item>
          ))}
        </List>
      </Card.Section>
    </Card>
  );
}
