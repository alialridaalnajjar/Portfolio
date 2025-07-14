"use client";

import { ArrowLeft, Facebook, LinkIcon } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Articles } from "../data/Articles";

interface ArticleData {
  articleTest: string;
  slug: string;
  title: string;
  link?: string;
  date: string;
  description: string;
  content?: string;
  setOfImages?: {
    image1: string;
    image2: string;
    image3?: string;
    image4?: string;
  };
}

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();

  const article: ArticleData | undefined = Articles.find(
    (a) => a.slug === slug
  );

  if (!article) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">
            Article Not Found
          </h1>
          <Link
            to="/"
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = article.title;

    switch (platform) {
      case "facebook":
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${url}`,
          "_blank"
        );
        break;
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
          "_blank"
        );
        break;
      case "copy":
        navigator.clipboard.writeText(url);
        break;
    }
  };

  // Function to format article text into paragraphs
  const formatArticleContent = (text: string) => {
    return text
      .split("\n")
      .filter((paragraph) => paragraph.trim() !== "")
      .map((paragraph, index) => (
        <p key={index} className="mb-6 text-gray-300 leading-relaxed">
          {paragraph.trim()}
        </p>
      ));
  };

  return (
    <div className="min-h-screen bg-black caret-transparent">
      {/* Header with back button */}
      <div className=" border-b border-gray-800 sticky top-0 z-10 backdrop-blur-sm bg-gray-900/95">
        <div className="max-w-4xl mx-auto px-4 py-4 lg:px-6">
          <Link
            to="/"
            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:text-blue-400 transition-colors" />
            <span className="font-medium">Article page</span>
          </Link>
        </div>
      </div>

      {/* Image Gallery */}
      {article.setOfImages && (
        <div className="w-full h-48 lg:h-64 overflow-hidden border-b border-gray-800">
          <div className="flex h-full">
            <div className="flex-1 relative group">
              <img
                src={article.setOfImages.image1 || "/placeholder.svg"}
                alt="Article image 1"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="flex-1 relative group border-l border-gray-800">
              <img
                src={article.setOfImages.image2 || "/placeholder.svg"}
                alt="Article image 2"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            {article.setOfImages.image3 && (
              <div className="flex-1 relative group border-l border-gray-800 hidden lg:block">
                <img
                  src={article.setOfImages.image3 || "/placeholder.svg"}
                  alt="Article image 3"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            )}
            {article.setOfImages.image4 && (
              <div className="flex-1 relative group border-l border-gray-800 hidden lg:block">
                <img
                  src={article.setOfImages.image4 || "/placeholder.svg"}
                  alt="Article image 4"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 py-8 lg:px-6 lg:py-12">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-6 lg:mb-8">
            <Link to="/" className="hover:text-blue-400 transition-colors">
              HOME
            </Link>
            <span className="mx-2 text-gray-600">/</span>
            <Link to="/" className="hover:text-blue-400 transition-colors">
              ARTICLES
            </Link>
            <span className="mx-2 text-gray-600">/</span>
            <span className="text-gray-400 uppercase  hover:text-green-400 transition-colors">
              {article.title}
            </span>
          </nav>

          {/* Date */}
          <div className="text-sm text-gray-500 mb-6 lg:mb-8 text-center">
            <div className="inline-flex items-center space-x-2">
              <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
              <span>
                {new Date(article.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "2-digit",
                })}
              </span>
              <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl lg:text-5xl font-light text-white text-center mb-8 lg:mb-12 leading-tight">
            {article.title}
            <div className="w-20 h-px bg-blue-400 mx-auto mt-4 lg:mt-6"></div>
          </h1>

          {/* Article Content */}
          <div className="prose prose-lg lg:prose-xl max-w-none">
            <div className="text-gray-300 leading-relaxed space-y-6">
              {/* Description as first paragraph */}
              <p className="text-lg lg:text-xl text-blue-200 font-light border-l-2 border-blue-400 pl-6 py-2 bg-blue-950/20 rounded-r-lg">
                {article.description}
              </p>

              {/* Main Article Content from articleTest */}
              <div className="text-base lg:text-lg mt-8 lg:mt-12">
                {formatArticleContent(article.articleTest)}
              </div>
            </div>
          </div>

          {/* Social Sharing */}
          <div className="mt-12 lg:mt-16 pt-8 border-t border-gray-800">
            <div className="flex items-center justify-center space-x-6">
              <span className="text-sm font-medium text-gray-400">
                Share this article
              </span>
              <div className="flex space-x-4">
                <button
                  onClick={() => handleShare("facebook")}
                  className="p-3 text-gray-500 hover:text-blue-400 hover:bg-gray-800 rounded-full transition-all duration-200"
                  aria-label="Share on Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleShare("twitter")}
                  className="p-3 text-gray-500 hover:text-blue-400 hover:bg-gray-800 rounded-full transition-all duration-200"
                  aria-label="Share on Twitter"
                >
                  <h1 className="h-5 w-5">X</h1>
                </button>
                <button
                  onClick={() => handleShare("copy")}
                  className="p-3 text-gray-500 hover:text-blue-400 hover:bg-gray-800 rounded-full transition-all duration-200"
                  aria-label="Copy link"
                >
                  <LinkIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* nv */}
          <div className="mt-12 lg:mt-16 pt-8 border-t border-gray-800">
            <div className="flex justify-between items-center">
              <Link
                to="/"
                className="group flex items-center space-x-2 text-sm text-gray-500 hover:text-blue-400 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                <span>BACK TO ARTICLES</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
