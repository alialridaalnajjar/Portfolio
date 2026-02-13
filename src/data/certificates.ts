import TSCert from "../assets/CertificatesImages/TSCert.png";
import AubAi from "../assets/CertificatesImages/AubAi.png";
import SC from "../assets/CertificatesImages/FsScrimba.png";
export type TimelineEntry = {
  title: string;
  certificateTitle: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
};

export const Certificates: TimelineEntry[] = [
  {
    title: "Full Stack",
    certificateTitle: "Full Stack Developer Certification",
    description:
      "Completed the Full Stack Developer program on Scrimba, gaining comprehensive skills in both front-end and back-end web development.",
    imageUrl: SC,
    imageAlt:
      "https://scrimba.com/certificate/9b1e5f8c-7a0c-4d9b-8c3e-1a2b3c4d5e6f",
  },
  {
    title: "Soft Skills",
    certificateTitle: "AI Fundamentals",
    description:
      "Completed the AI Fundamentals course from the American University of Beirut (AUB), gaining foundational knowledge in artificial intelligence concepts and applications.",
    imageUrl: AubAi,
    imageAlt: "https://www.hackerrank.com/certificates/iframe/d13ff605e066",
  },
  {
    title: "FRONT-END",
    certificateTitle: "Full Stack Web Development Certification",
    description:
      "Completed comprehensive Front-End development program covering HTML5, Vanilla CSS, JavaScript ES6+. Built multiple projects and gained frontend development skills.",
    imageUrl:
      "https://alialridaalnajjar.github.io/My-Cetificates.github.io/images/Screenshot%202025-02-17%20234635.png",
    imageAlt:
      "https://www.freecodecamp.org/certification/AliAlNajjar/responsive-web-design",
  },
  {
    title: "REACT",
    certificateTitle: "React B HackerRank",
    description:
      "Completed the React (B) Developer certification on HackerRank, demonstrating foundational skills in React.js.",
    imageUrl:
      "https://alialridaalnajjar.github.io/My-Cetificates.github.io/images/Screenshot%202025-03-21%20154149.png",
    imageAlt: "https://www.hackerrank.com/certificates/iframe/d0d28b52c281",
  },
  {
    title: "TypeScript",
    certificateTitle: "TypeScript Scrimba",
    description:
      "Completed the TypeScript course on Scrimba, gaining proficiency in static typing and advanced JavaScript features.",
    imageUrl: TSCert,
    imageAlt: "https://scrimba.com/certificate/d13ff605e066",
  },
];
