import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useState } from "react";

// Define a type for the quote object
type Quote = {
  text: string;
  author: string;
};

// Hardcoded array of developer quotes
const devQuotes: Quote[] = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    text: "First, solve the problem. Then, write the code.",
    author: "John Johnson",
  },
  {
    text: "Hating JavaSctript is the key toward success",
    author: "Ali Al Najjar",
  },
  {
    text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    author: "Martin Fowler",
  },
  {
    text: "Measuring programming progress by lines of code is like measuring aircraft building progress by weight.",
    author: "Bill Gates",
  },
  {
    text: "The best way to predict the future is to invent it.",
    author: "Alan Kay",
  },
  {
    text: "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    author: "Brian W. Kernighan",
  },
  {
    text: "Programs must be written for people to read, and only incidentally for machines to execute.",
    author: "Harold Abelson",
  },
  {
    text: "The most important property of a program is whether it accomplishes the intention of its user.",
    author: "C.A.R. Hoare",
  },
  {
    text: "Talk is cheap. Show me the code.",
    author: "Linus Torvalds",
  },
  {
    text: "Simplicity is the ultimate sophistication.",
    author: "Leonardo da Vinci (often quoted in programming contexts)",
  },
  {
    text: "The function of a good software engineer is to make himself obsolete.",
    author: "Niklaus Wirth",
  },
  {
    text: "Code is like humor. When you have to explain it, it's bad.",
    author: "Cory House",
  },
];

export default function QuoteGenerator() {
  const [currentQuote, setCurrentQuote] = useState<Quote | null>(null);
  const [isFading, setIsFading] = useState(false); // State to control fade effect

  // Function to generate a random quote
  const generateRandomQuote = () => {
    setIsFading(false); // Start fade out
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * devQuotes.length);
      setCurrentQuote(devQuotes[randomIndex]);
      setIsFading(true); // Start fade in
    }, 300);
  };

  useEffect(() => {
    generateRandomQuote(); // Initial quote
    const intervalId = setInterval(generateRandomQuote, 7000);

    // Cleanup function to clear the interval when the component unmountsfgds
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col items-center min-h-auto pb-40 lg:pb-40 bg-black p-4 w-full caret-transparent">
      <Card className="w-full max-w-sm md:max-w-md lg:max-w-lg bg-gray-950 text-white border-blue-700 border-2 shadow-2xl rounded-2xl p-6">
        <CardHeader className="pb-6">
          <CardTitle className="text-3xl font-extrabold text-blue-500 text-center tracking-wide">
            Dev Insights
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-grow flex items-center justify-center text-center px-4 py-8 min-h-[180px] lg:min-h-[220px]">
          {currentQuote ? (
            <blockquote
              className={`text-2xl font-semibold italic leading-relaxed text-gray-100 lg:text-3xl transition-opacity duration-300 ease-in-out ${
                isFading ? "opacity-100" : "opacity-0"
              }`}
            >
              &ldquo;{currentQuote.text}&rdquo;
            </blockquote>
          ) : (
            <p className="text-gray-400 text-lg">Loading inspiration...</p>
          )}
        </CardContent>
        <CardFooter className="flex flex-col items-end pt-6">
          {currentQuote && (
            <p className="text-lg font-medium text-blue-400 mt-4 lg:text-xl text-right w-full pr-2">
              ~ {currentQuote.author}
            </p>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
