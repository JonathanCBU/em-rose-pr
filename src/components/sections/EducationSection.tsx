import { Anchor, Stack, Text, Title } from "@mantine/core";

export interface School {
  name: string;
  dates: string;
  /** One line each: college, degree, GPA, honors, and so on. */
  details: string[];
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface Certification {
  name: string;
  issued: string;
  url?: string;
}

export interface Award {
  name: string;
  url?: string;
}

export interface EducationContent {
  schools: School[];
  skills: SkillGroup[];
  certifications: Certification[];
  awards: Award[];
}

/** An external link that opens in a new tab. Renders plain text when there's no url. */
function ExternalLink({ url, children }: { url?: string; children: string }) {
  if (!url) return <>{children}</>;
  return (
    <Anchor href={url} target="_blank" rel="noopener noreferrer">
      {children}
    </Anchor>
  );
}

export function EducationSection({
  schools,
  skills,
  certifications,
  awards,
}: EducationContent) {
  return (
    <Stack gap="xl">
      {schools.map((school) => (
        <Stack key={school.name} gap={2}>
          <Title order={4}>{school.name}</Title>
          <Text size="sm" c="dimmed">
            {school.dates}
          </Text>
          {school.details.map((line) => (
            <Text key={line}>{line}</Text>
          ))}
        </Stack>
      ))}

      <Stack gap="xs">
        <Title order={3}>Skills</Title>
        {skills.map(({ label, items }) => (
          <Text key={label}>
            <Text span fw={600}>
              {label}:
            </Text>{" "}
            {items.join(", ")}
          </Text>
        ))}
      </Stack>

      <Stack gap="xs">
        <Title order={3}>Certifications</Title>
        {certifications.map(({ name, issued, url }) => (
          <Text key={name}>
            <ExternalLink url={url}>{name}</ExternalLink> - Issued {issued}
          </Text>
        ))}
      </Stack>

      <Stack gap="xs">
        <Title order={3}>Awards</Title>
        {awards.map(({ name, url }) => (
          <Text key={name}>
            <ExternalLink url={url}>{name}</ExternalLink>
          </Text>
        ))}
      </Stack>
    </Stack>
  );
}
