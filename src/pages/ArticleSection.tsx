"use client"

import { Link } from "react-router-dom"
import { Articles } from "../data/Articles"
import { useState } from "react"

export default function ArticleSection() {
  const [isOpen, setIsOpen] = useState(false)
  const [showMessages, setShowMessages] = useState(false)
  const [showChatSection, setShowChatSection] = useState(false)

  const handleMainToggle = () => {
    setShowChatSection(!showChatSection)
    if (!showChatSection) {
      // Reset Chat state when opening!!
      setIsOpen(false)
      setShowMessages(false)
    }
  }

  const handleChatToggle = () => {
    setIsOpen(!isOpen)
    if (!isOpen) {
      // Delay howing messages for a cool effect
      setTimeout(() => setShowMessages(true), 300)
    } else {
      setShowMessages(false)
    }
  }

  return (
    <div className="flex min-h-auto items-start justify-center max-w-full bg-black  p-4 lg:p-8 caret-transparent w-full " id="Articles">
      <div className="w-full max-w-md lg: lg:max-w-lg">
        {/* Simple Articles Button */}
        <div className="mb-8 lg:max-w-full">
          <button onClick={handleMainToggle} className="group relative w-full flex items-center justify-between">
            <div>
              <h2 className="text-4xl lg:text-8xl font-light text-white hover:text-blue-400 transition-colors duration-300 mb-2 text-left">
                Articles
              </h2>
              {/* Long thin underline */}
              <div className="relative">
                <div className="h-px bg-white w-32 lg:w-40"></div>
                <div
                  className={`absolute top-0 left-0 h-px bg-blue-400 transition-all duration-500 ${
                    showChatSection ? "w-32 lg:w-40" : "w-0"
                  }`}
                ></div>
              </div>
            </div>

            {/* Expand/Shrink Indicator */}
            <div className="flex flex-col items-center space-y-1">
              <div
                className={`transform transition-transform duration-300 text-white text-2xl ${
                  showChatSection ? "rotate-180" : ""
                }`}
              >
                ⌄
              </div>
              <div
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  showChatSection ? "bg-blue-400" : "bg-white"
                }`}
              ></div>
            </div>
          </button>
        </div>

        {/* Chat Section */}
        {showChatSection && (
          <div className="animate-in slide-in-from-top duration-500">
            {/* Phone mockup container */}
            <div className="relative mx-auto bg-gray-900 rounded-3xl p-2 shadow-2xl">
              {/* Phone screen */}
              <div className="bg-white rounded-2xl overflow-hidden">
                {/* Chat header */}
                <div className="bg-blue-600 text-white p-4 flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center text-sm font-bold">
                    📝
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">My Articles</h3>
                    <p className="text-xs text-blue-100">Online now</p>
                  </div>
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                </div>

                {/* Chat messages area */}
                <div className="h-80 lg:h-96 bg-gray-50 p-4 overflow-y-auto">
                  {/* Initial message */}
                  <div className="flex items-start space-x-2 mb-4">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-xs">👋</div>
                    <div className="bg-white rounded-2xl rounded-tl-md p-3 shadow-sm max-w-xs">
                      <p className="text-sm text-gray-800">Hey! Want to check out my latest articles?</p>
                      <span className="text-xs text-gray-500">Just now</span>
                    </div>
                  </div>

                  {/* Toggle button message */}
                  <div className="flex justify-end mb-4">
                    <button
                      onClick={handleChatToggle}
                      className="bg-blue-500 hover:bg-blue-600 text-white rounded-2xl rounded-tr-md p-3 shadow-sm transition-all duration-200 max-w-xs"
                    >
                      <p className="text-sm">{isOpen ? "Hide articles 📚" : "Show me! 🚀"}</p>
                      <span className="text-xs text-blue-100">Tap to {isOpen ? "close" : "open"}</span>
                    </button>
                  </div>

                  {/* Articles as chat messages */}
                  {isOpen && showMessages && (
                    <div className="space-y-3 animate-in slide-in-from-bottom duration-500">
                      {Articles.map((article, index) => (
                        <div
                          key={article.title}
                          className="flex items-start space-x-2"
                          style={{
                            animationDelay: `${index * 200}ms`,
                            animation: `slideUp 0.5s ease-out ${index * 200}ms both`,
                          }}
                        >
                          <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-xs font-bold text-white">
                            {index + 1}
                          </div>
                          <Link to={`/Article/${article.slug}`}>
                            <div className="bg-white hover:bg-blue-50 rounded-2xl rounded-tl-md p-3 shadow-sm max-w-xs border border-gray-100 hover:border-blue-200 transition-all duration-200 cursor-pointer group">
                              <h4 className="font-semibold text-blue-700 text-sm group-hover:text-blue-800 mb-1">
                                {article.title}
                              </h4>
                              <p className="text-xs text-gray-600 mb-2">{article.description}</p>
                              <div className="flex items-center justify-between">
                                <span className="text-xs text-gray-500">2 min read</span>
                                <span className="text-xs text-blue-500 group-hover:text-blue-600">Read more →</span>
                              </div>
                            </div>
                          </Link>
                        </div>
                      ))}

                      {/* Typing indicator */}
                      <div className="flex items-start space-x-2">
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-xs">
                          ✨
                        </div>
                        <div className="bg-white rounded-2xl rounded-tl-md p-3 shadow-sm">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                            <div
                              className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                              style={{ animationDelay: "0.1s" }}
                            ></div>
                            <div
                              className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                              style={{ animationDelay: "0.2s" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Chat input (decorative) */}
                <div className="bg-white border-t border-gray-200 p-3 flex items-center space-x-2">
                  <div className="flex-1 bg-gray-100 rounded-full px-4 py-2">
                    <span className="text-sm text-gray-500">More articles coming soon...</span>
                  </div>
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">📤</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone reflection effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-10 rounded-3xl pointer-events-none"></div>
          </div>
        )}

        <style >{`
          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>
    </div>
  )
}
