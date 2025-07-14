export const Articles = [
  {
    slug: "first-year-cs-reflections",
    title: "📖 Reflections of a First-Year CS Student",
    date: "2024-07-14",
    description:
      "A personal journey through my first year in Computer Science - from uncertainty to clarity, from basic programs to meaningful projects. Written from within the very portfolio that represents the end of this chapter.",
    articleTest: `📖 Reflections of a First-Year CS Student

— written by me, living inside this very retro-styled portfolio

There's something poetic about reading this article within the very portfolio that represents the end of a chapter. It's like watching the credits of a film you just starred in. And what a ride this first year of Computer Science has been.

I started like anyone else: uncertain, curious, and at times overwhelmed. The world of computing didn't come with a map — just passion and persistence. At first, it was all about writing basic programs, understanding logic, and memorizing rules. But over time, I realized CS is not about rules — it's about thinking.

What started with variables and System.out.println slowly evolved into solving real problems. I moved from theory to projects, from abstract terms to meaningful applications. I learned Java deeply, nailed OOP concepts, and got comfortable with writing code that not only works, but makes sense. I found excitement in writing React code, styling interfaces, and even creating sounds on toggle buttons. I started understanding how everything connects — from frontend logic to backend potential.

There were moments of frustration, of course. Like when I struggled to understand how async worked, or when I thought a project would take two hours but ended up consuming the entire weekend. But every one of those moments was a stepping stone. And I took each one, proudly.

I built projects that meant something to me — not because they were perfect, but because they were mine. I played with ideas, broke things, and fixed them. I asked questions — sometimes too many — and kept pushing to understand. It wasn't about showing off. It was about growing.

Looking forward, I know I'm still at the beginning of the journey. There's so much to learn — Express, backend frameworks, maybe even AI and chatbots. But for now, I know that I'm capable of learning anything I choose to. Because this first year? It proved it.

So here I am, wrapping up my first-year summer semester, staring into the next horizon with clarity and fire.

And to anyone reading this (especially me in the future): Remember how far you've come — and how much further you're going to go.`,
    setOfImages: {
      image1: "/placeholder.svg?height=300&width=400",
      image2: "/placeholder.svg?height=300&width=400",
      image3: "/placeholder.svg?height=300&width=400",
      image4: "/placeholder.svg?height=300&width=400",
    },
  },
  {
    slug: "typescript-tips-tricks",
    title: "TypeScript Tips & Tricks",
    date: "2024-01-10",
    description:
      "Level up your TypeScript game with these advanced techniques and lesser-known features that will make your code more robust and maintainable.",
    articleTest: `TypeScript has become an essential tool for modern JavaScript development, providing static type checking and enhanced developer experience.

Utility types like Pick, Omit, and Partial can save you tons of time when working with complex type definitions. Pick allows you to create a new type by selecting specific properties from an existing type, while Omit does the opposite by excluding certain properties.

Conditional types and mapped types unlock powerful patterns for creating flexible, reusable type definitions that adapt to your needs. They allow you to create types that change based on other types, making your code more dynamic and reusable.

Type guards are functions that help TypeScript narrow down types at runtime. They're particularly useful when working with union types or when you need to check if an object has certain properties before using them.

Generic types make your functions and classes more flexible by allowing them to work with multiple types while maintaining type safety. They're like variables for types, letting you write reusable code that works with different data types.

The never type represents values that never occur. It's useful for exhaustive checking in switch statements and for functions that never return normally (like functions that always throw errors).`,
    setOfImages: {
      image1: "/placeholder.svg?height=300&width=400",
      image2: "/placeholder.svg?height=300&width=400",
      image3: "/placeholder.svg?height=300&width=400",
    },
  },
  {
    slug: "nextjs-performance-secrets",
    title: "Next.js Performance Secrets",
    date: "2024-01-05",
    description:
      "Optimize your Next.js apps for lightning-fast performance with these proven techniques for image optimization, code splitting, and caching strategies.",
    articleTest: `Performance is crucial for user experience and SEO, and Next.js provides many built-in optimizations that can dramatically improve your application's speed.

Image optimization with Next.js Image component can dramatically improve your Core Web Vitals scores. The Image component automatically optimizes images by serving them in modern formats like WebP when supported, and it includes lazy loading by default.

Code splitting and dynamic imports help reduce bundle sizes and improve initial page load times. Next.js automatically splits your code at the page level, but you can also use dynamic imports to split components and load them only when needed.

Static Site Generation (SSG) and Incremental Static Regeneration (ISR) are powerful features that can make your pages load instantly. SSG generates pages at build time, while ISR allows you to update static pages after deployment without rebuilding the entire site.

Caching strategies are essential for optimal performance. Next.js provides several caching mechanisms, including automatic static optimization, API route caching, and the ability to cache data at the component level using SWR or React Query.

Bundle analysis helps you understand what's making your application large. Use tools like @next/bundle-analyzer to visualize your bundle and identify opportunities for optimization.

Prefetching links that are likely to be visited next can make navigation feel instant. Next.js automatically prefetches pages linked with the Link component when they appear in the viewport.`,
    setOfImages: {
      image1: "/placeholder.svg?height=300&width=400",
      image2: "/placeholder.svg?height=300&width=400",
    },
  },
];
