import type { EducationContent } from "@/components/EducationSection";

export const Education = {
  schools: [
    {
      name: "Boston University",
      dates: "Sept. 2016 - May 2020",
      details: [
        "College of Communications",
        "Bachelor of Science in Public Relations; Minor in Spanish, magna cum laude",
        "GPA: 3.74",
        "Dean’s List, Blue Chip Award Recipient",
      ],
    },
    {
      name: "Instituto Internacional de Madrid",
      dates: "Jan. - May 2019",
      details: ["Semester abroad in Madrid, Spain"],
    },
  ],

  skills: [
    {
      label: "Software",
      items: [
        "Hootsuite (Certified)",
        "Google Analytics (Certified)",
        "Sprinklr",
        "Buffer",
        "Brandwatch",
        "SharpSpring",
        "HubSpot",
        "Salesforce",
        "Muck Rack",
        "Cision",
        "Egnyte",
        "Asana",
        "Brandmaker",
        "ShortStack",
        "MailChimp",
        "Facebook Advertising",
        "Streak",
        "Wordpress",
        "Canva",
        "Adobe Photoshop",
        "Microsoft and Google Suite",
      ],
    },
    {
      label: "Language",
      items: ["Proficient Spanish writing and speaking"],
    },
  ],

  certifications: [
    {
      name: "Hootsuite Platform Certification",
      issued: "October 2019",
      url: "https://www.linkedin.com/company/hootsuite/",
    },
    {
      name: "Advanced Google Analytics Certification",
      issued: "November 2019",
      url: "https://analytics.google.com/analytics/academy/certificate/iZxeKEZ3QVynUoQSvX-X1w",
    },
    {
      name: "Google Analytics for Beginners Certification",
      issued: "November 2019",
      url: "https://analytics.google.com/analytics/academy/certificate/lmch37JHSFue5C4xbfMvzw",
    },
  ],

  awards: [
    {
      name: "College of Communication Blue Chip Award - 2020 Recipient",
      url: "http://www.bu.edu/com/resources/current-students/undergraduate/blue-chip-award-winners/",
    },
  ],
} satisfies EducationContent;
