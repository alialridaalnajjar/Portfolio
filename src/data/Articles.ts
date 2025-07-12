export const Articles: {
  slug: string;
  title: string;
  link?: string;
  date: string;
  description: string;
  setOfImages?: {
    image1: string;
    image2: string;
    image3?: string;
    image4?: string;
  };
}[] = [
  {
    slug: "understanding-react-hooks",
    title: "Understanding React Hooks",
    link: "https://example.com/react-hooks",
    date: "2023-10-01",
    description:
      "A deep dive into React Hooks and how they revolutionize state management in functional components.",
    setOfImages: {
      image1: "https://example.com/image1.jpg",
      image2: "https://example.com/image2.jpg",
      image3: "https://example.com/image3.jpg",
      image4: "https://example.com/image4.jpg",
    },
  },
  {
    slug: "building-scalable-applications-with-nodejs",
    title: "Building Scalable Applications with Node.js",
    link: "https://example.com/nodejs-scalability",
    date: "2023-09-15",
    description:
      "Learn how to build scalable applications using Node.js and its asynchronous capabilities.",
    setOfImages: {
      image1: "https://example.com/nodejs-image1.jpg",
      image2: "https://example.com/nodejs-image2.jpg",
      image3: "https://example.com/nodejs-image3.jpg",
      image4: "https://example.com/nodejs-image4.jpg",
    },
  },
];
