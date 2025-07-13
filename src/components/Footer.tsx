import { Mail } from "lucide-react";
import { LuGithub, LuLinkedin } from "react-icons/lu";
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-white py-12 border-t-2 border-blue-700 caret-transparent">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Company Info / Logo (Optional, can be added here) */}
        <div className="col-span-1 md:col-span-3 lg:col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-3xl font-extrabold text-blue-500 mb-4 tracking-wide">
            A Najjar
          </h3>
          <p className="text-gray-400 text-sm max-w-xs">
            Crafting digital experiences with passion and precision.
          </p>
        </div>

        {/* navi */}
        <div className="col-span-1 flex flex-col items-center md:items-start">
          <h4 className="text-xl font-semibold text-blue-400 mb-4">Sections</h4>
          <nav className="space-y-2 text-center md:text-left">
            <a
              href="#"
              className="text-gray-300 hover:text-blue-400 transition-colors duration-200 block"
            >
              Main
            </a>
            <a
              href="#About"
              className="text-gray-300 hover:text-blue-400 transition-colors duration-200 block"
            >
              Services
            </a>
            <a
              href="#Projects"
              className="text-gray-300 hover:text-blue-400 transition-colors duration-200 block"
            >
              Projects
            </a>
            <a
              href="#Certificates"
              className="text-gray-300 hover:text-blue-400 transition-colors duration-200 block"
            >
              Certificates
            </a>
            <a
              href="#Articles"
              className="text-gray-300 hover:text-blue-400 transition-colors duration-200 block"
            >
              Articles
            </a>
            <a
              href="#Contact"
              className="text-gray-300 hover:text-blue-400 transition-colors duration-200 block"
            >
              Contact
            </a>
          </nav>
        </div>

        {/* Social Media lnks */}
        <div className="col-span-1 flex flex-col items-center md:items-start">
          <h4 className="text-xl font-semibold text-blue-400 mb-4">Connect</h4>
          <div className="flex space-x-6">
            <a
              href="mailto:your.email@example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-green-400 transition-colors duration-200"
              aria-label="Email"
            >
              <Mail className="w-7 h-7 lg:w-8 lg:h-8" />
              <span className="sr-only">Email</span>
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-green-400 transition-colors duration-200"
              aria-label="GitHub"
            >
              <LuGithub className="w-7 h-7 lg:w-8 lg:h-8" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://aedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-green-400 transition-colors duration-200"
              aria-label="aedIn"
            >
              <LuLinkedin className="w-7 h-7 lg:w-8 lg:h-8" />
              <span className="sr-only">aedIn</span>
            </a>
          </div>
        </div>
{/* conteact infooso */}
        <div className="col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
          <h4 className="text-xl font-semibold text-blue-400 mb-4">
            Get in Touch
          </h4>
          <p className="text-gray-400 text-sm">
            Have a project in mind? Let's build something amazing together.
          </p>
          <p className="text-gray-400 text-sm mt-2">
           Beirut somewhere, Lebanon
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
        &copy; {currentYear} Ali Al Najjar. All rights reserved.
      </div>
    </footer>
  );
}
