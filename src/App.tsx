import { Stack, Container, Text, Title } from "@mantine/core";
import { ScrollBlock, WindowImage } from "@/components/blocks";
import { Header } from "@/components/navigation";
import type { HeaderProps } from "@/components/navigation";
import { useScrollSpy } from "@mantine/hooks";
import { JobCard } from "@/components/cards";
import { Jobs } from "@/content";
import { EducationSection } from "@/components/sections";
import { Education } from "@/content/education";
import field from "./assets/images/field.jpg";
import flowers from "./assets/images/flowers.jpg";
import skyline from "./assets/images/brooklyn_skyline.jpg";

const HeaderContent: HeaderProps = {
  title: "Emily Rosenberg",
  spy: null,
  sections: ["home", "about", "experience", "education"],
  insta: "https://www.instagram.com/emily_rosenberg/?hl=en",
  linkedin: "https://www.linkedin.com/in/emily-rosenberg-1a95a1149/",
  twitter: "https://twitter.com/emrosenberg28",
};

export function App() {
  const spy = useScrollSpy({
    selector: "[data-section] h2",
    getDepth: () => 1,
    getValue: (el) => el.closest("[data-section]")?.id ?? "",
  });
  HeaderContent.spy = spy;
  return (
    <main>
      <Header {...HeaderContent} />
      <WindowImage id={"home"} src={field} alt="home">
        <Container size="lg" w="100%">
          <Title order={2} c="white">
            Hey there, I'm Emily Rosenberg
          </Title>
          <Text c="white" maw={480} mt="xs">
            Come Explore
          </Text>
        </Container>
      </WindowImage>

      <ScrollBlock id="about">
        <Container size="lg" py={80}>
          <Title order={2}>About</Title>
          <Text c="dimmed" maw={560} mt="xs">
            Hi, I'm Emily. Call me Em. Current PR Specialist at Deloitte. Former
            Brand Engagement Specialist at AllyHealth and Account Coordinator at
            BIGfish Communications. Boston University alumna who graduated magna
            cum laude with a Bachelor of Science in Public Relations and a minor
            in Spanish. Passionate storyteller and communicator, looking to
            strengthen relationships between brands and their audiences.
            Inspired by the ever-changing field of public relations and ready to
            adapt and innovate. Driven by my love of people.
          </Text>
        </Container>
      </ScrollBlock>

      <WindowImage src={flowers} alt="spacer_1" height="90vh" />

      <ScrollBlock id="experience">
        <Container size="lg" py={80}>
          <Title order={2}>My Experience</Title>
          <Stack gap="lg">
            {Jobs.map((j) => (
              <JobCard key={j.company + j.timeline} {...j} />
            ))}
          </Stack>
        </Container>
      </ScrollBlock>

      <WindowImage id="education" src={skyline} alt="education">
        <Container size="lg" w="100%">
          <Title order={2} c="white">
            Education
          </Title>
          <Title order={4} c="white">
            What I've Learned
          </Title>
        </Container>
      </WindowImage>

      <ScrollBlock id="education-info">
        <Container size="lg" py={80}>
          <EducationSection {...Education} />
        </Container>
      </ScrollBlock>
    </main>
  );
}
