import React from "react";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";

const Contact = () => {
  return (
    <section className="relative min-h-screen py-16 px-6 bg-transparent overflow-hidden">
      {/* Background Gradient Shape */}
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-25rem)]">
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-bold text-blue-200 font-poppins mb-12 border-b-2 border-[#64ffda] inline-block pb-2">
          Contact Me
        </h2>

        {/* Grid Layout */}
        <div className="grid gap-10 md:grid-cols-2">
          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start text-blue-100 space-y-6">
            <p className="text-lg text-blue-200 max-w-md leading-relaxed">
              I’d love to connect! Whether you have a question, want to
              collaborate, or just say hi — feel free to reach out.
            </p>

            <div className="space-y-4 w-full">
              {/* Email */}
              <a
                href="mailto:ratnakarhimanshu0@gmail.com"
                className="flex items-center gap-3 p-3 rounded-lg border border-[#64ffda]/30 hover:border-[#64ffda] bg-white/5 backdrop-blur-md transition"
              >
                <Mail className="w-5 h-5 text-[#64ffda]" />
                <span className="font-poppins">ratnakarhimanshu0@gmail.com</span>
              </a>

              {/* Phone */}
              <a
                href="tel:+919458704529"
                className="flex items-center gap-3 p-3 rounded-lg border border-[#64ffda]/30 hover:border-[#64ffda] bg-white/5 backdrop-blur-md transition"
              >
                <Phone className="w-5 h-5 text-[#64ffda]" />
                <span className="font-poppins">+91 9458704529</span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/himanshu-ratnakar-94744432/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg border border-[#64ffda]/30 hover:border-[#64ffda] bg-white/5 backdrop-blur-md transition"
              >
                <Linkedin className="w-5 h-5 text-[#64ffda]" />
                <span className="font-poppins">LinkedIn</span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/thunder-himanshu"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg border border-[#64ffda]/30 hover:border-[#64ffda] bg-white/5 backdrop-blur-md transition"
              >
                <Github className="w-5 h-5 text-[#64ffda]" />
                <span className="font-poppins">GitHub</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-[#64ffda]/30 hover:border-[#64ffda] transition">
            <form className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-left text-blue-200 mb-2 font-poppins">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-blue-100 border border-gray-600 focus:ring-2 focus:ring-[#64ffda] outline-none"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-left text-blue-200 mb-2 font-poppins">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-blue-100 border border-gray-600 focus:ring-2 focus:ring-[#64ffda] outline-none"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-left text-blue-200 mb-2 font-poppins">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-blue-100 border border-gray-600 focus:ring-2 focus:ring-[#64ffda] outline-none"
                ></textarea>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-[#64ffda] text-[#64ffda] font-semibold font-poppins hover:bg-[#64ffda]/10 transition"
              >
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>
            
          </div>
          
        </div>
          <div
    aria-hidden="true"
    className="absolute top-0 left-1/2 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
  >
    <div
      style={{
        clipPath:
          "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
      }}
      className="aspect-1155/678 w-288.75 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
    />
  </div>
      </div>
      
    </section>
  );
};

export default Contact;
