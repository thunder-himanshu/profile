import React from "react";
import HimansuImage from "../assets/himanshu_image.jpg";

const AboutMe = () => {
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-center overflow-hidden bg-transparent">
      {/* Background Gradient Shape (like Home) */}
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-20rem)]">
    
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="relative group">
          {/* Gradient Border */}
          <div className="p-[4px] rounded-full border border-[#64ffda]">
            <img
              src={HimansuImage}
              alt="Himanshu"
              className="w-60 h-60 sm:w-72 sm:h-72 md:w-96 md:h-96 object-cover rounded-full shadow-2xl transform transition duration-500 group-hover:scale-105 group-hover:rotate-2"
            />
          </div>
          {/* Glow */}
          <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-blue-400 via-purple-500 to-pink-500 opacity-20 blur-2xl group-hover:opacity-40 transition duration-500"></div>
        </div>
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 flex items-center p-6 sm:p-10 md:p-16">
        <div className="max-w-lg mx-auto text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold text-blue-200 font-poppins mb-6 border-b-2 border-[#64ffda] inline-block pb-2">
            About Me
          </h1>

          <div className="space-y-6 text-blue-200 font-poppins text-base sm:text-lg leading-relaxed">
            <p>
              I'm a passionate{" "}
              <span className="font-semibold text-[#64ffda]">
                Front End Developer
              </span>{" "}
              with expertise in modern web technologies. I love creating
              efficient, scalable, and user-friendly applications that solve
              real-world problems. With a strong foundation in front-end and a
              little bit of back-end development, I strive to deliver
              high-quality solutions that exceed expectations.
            </p>

            <p>
              When I'm not coding, you can find me exploring new technologies,
              contributing to{" "}
              <span className="text-[#64ffda]">open-source projects</span>, or
              sharing my knowledge with others to build a stronger tech
              community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
