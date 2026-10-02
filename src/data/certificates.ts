import TSCert from "../assets/CertificatesImages/TSCert.webp";
import AubAi from "../assets/CertificatesImages/AubAI.webp";
import SC from "../assets/CertificatesImages/FsScrimba.webp";
import ResponsiveWebDesign from "../assets/CertificatesImages/Responsive-Web-Design.webp";
import ReactB from "../assets/CertificatesImages/React-B.webp";
export type TimelineEntry = {
  title: string;
  certificateTitle: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  issuer?: string;
  date?: string;
};

export const Certificates: TimelineEntry[] = [
  {
    title: "Full Stack",
    certificateTitle: "Full Stack Developer Certification",
    description:
      "Completed the Full Stack Developer program on Scrimba, gaining comprehensive skills in both front-end and back-end web development.",
    issuer: "Scrimba",
    date: "Aug 2025",
    imageUrl: SC,
    imageAlt:
      "https://scrimba.com/certificate/9b1e5f8c-7a0c-4d9b-8c3e-1a2b3c4d5e6f",
  },
  {
    title: "AI",
    certificateTitle: "AI Starter Kit Professional Certificate",
    description:
      "Completed the AI Starter Kit Professional Certificate from the American University of Beirut (AUB) in partnership with ZAKA, gaining foundational knowledge in artificial intelligence concepts and applications.",
    issuer: "American University of Beirut",
    date: "Nov 2025",
    imageUrl: AubAi,
    imageAlt: "https://www.hackerrank.com/certificates/iframe/d13ff605e066",
  },
  {
    title: "FRONT-END",
    certificateTitle: "Responsive Web Design Certification",
    description:
      "Completed comprehensive Front-End development program covering HTML5, Vanilla CSS, JavaScript ES6+. Built multiple projects and gained frontend development skills.",
    issuer: "freeCodeCamp",
    date: "Feb 2025",
    imageUrl: ResponsiveWebDesign,
    imageAlt:
      "https://www.freecodecamp.org/certification/AliAlNajjar/responsive-web-design",
  },
  {
    title: "REACT",
    certificateTitle: "React B HackerRank",
    description:
      "Completed the React (B) Developer certification on HackerRank, demonstrating foundational skills in React.js.",
    issuer: "HackerRank",
    date: "Mar 2025",
    imageUrl: ReactB,
    imageAlt: "https://www.hackerrank.com/certificates/iframe/d0d28b52c281",
  },
  {
    title: "TypeScript",
    certificateTitle: "TypeScript Scrimba",
    description:
      "Completed the TypeScript course on Scrimba, gaining proficiency in static typing and advanced JavaScript features.",
    issuer: "Scrimba",
    date: "Jul 2025",
    imageUrl: TSCert,
    imageAlt: "https://scrimba.com/certificate/d13ff605e066",
  },
];
