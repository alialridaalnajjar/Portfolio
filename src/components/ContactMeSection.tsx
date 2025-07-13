"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, MessageCircle } from "lucide-react"; // Changed Phone !~

export function ContactMeSection() {
  return (
    <section
      id="contact"
      className="w-full pb-16 md:pb-24 lg:pb-28 bg-black text-white caret-transparent"
    >
      <div className="container mx-auto px-4 max-w-5xl" id="Contact">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-blue-500 mb-4 tracking-wide md:text-5xl">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Have a project in mind, a question, or just want to say hello? Feel
            free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col space-y-8 text-center lg:text-left">
            <div className="flex flex-col items-center lg:items-start">
              <Mail className="w-8 h-8 text-blue-400 mb-3" />
              <h3 className="text-xl font-semibold text-blue-300 mb-1">
                Email Me
              </h3>
              <a
                href="mailto:alialridaalnajjar@gmail.com"
                className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-lg"
              >
                alialridaalnajjar@gmail.com
              </a>
            </div>

            <a
              href="https://wa.me/+96171235971"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-lg"
            >
              <div className="flex flex-col items-center lg:items-start">
                <MessageCircle className="w-8 h-8 text-blue-400 mb-3" />{" "}
                <h3 className="text-xl font-semibold text-blue-300 mb-1 hover:text-green-400 transition-colors duration-200">
                  WhatsApp Me
                </h3>
              </div>{" "}
            </a>

            <div className="flex flex-col items-center lg:items-start">
              <MapPin className="w-8 h-8 text-blue-400 mb-3" />
              <h3 className="text-xl font-semibold text-blue-300 mb-1">
                Find Me
              </h3>
              <p className="text-gray-300 text-lg">Beirut somewhere, Lebanon</p>
            </div>
          </div>

          <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-blue-700">
            <h3 className="text-2xl font-bold text-blue-400 mb-6 text-center">
              Send a Message
            </h3>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  className="bg-gray-800 border-gray-700 text-white focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className="bg-gray-800 border-gray-700 text-white focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Subject
                </label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="Regarding..."
                  className="bg-gray-800 border-gray-700 text-white focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message here..."
                  rows={5}
                  className="bg-gray-800 border-gray-700 text-white focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
