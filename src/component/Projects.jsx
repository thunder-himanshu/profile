import React from "react";
import { Code, Monitor, Database } from "lucide-react"; // icons from lucide-react

const projects = [
  {
    title: "Suryoday MSME Credit Platform",
    description:
      "Built CRM dashboards and backend efficiency logic using SQL. Enhanced loan approval workflows and data processing.",
    tech: ["React.js", "Redux", "SQL", "Node.js"],
    icon: <Database className="w-8 h-8 text-blue-400" />,
  },
  {
    title: "Credit Approval Web Portal",
    description:
      "Developed UI for MSME loan workflows, reducing processing time and improving efficiency.",
    tech: ["React.js", "Bootstrap", "REST API"],
    icon: <Monitor className="w-8 h-8 text-purple-400" />,
  },
  {
    title: "Lead Generation Platform",
    description:
      "Implemented a React-based automation system to generate and manage leads effectively.",
    tech: ["React.js", "Redux", "REST API"],
    icon: <Code className="w-8 h-8 text-pink-400" />,
  },
  {
    title: "Home Loan Application",
    description:
      "Led frontend development for a fully responsive home loan portal with modern UI/UX.",
    tech: ["React.js", "Material UI", "SQL"],
    icon: <Monitor className="w-8 h-8 text-green-400" />,
  },
  {
    title: "CA CRM",
    description:
      "Built CRM components for dashboards, reporting, and customer management with API integration.",
    tech: ["React.js", "Redux", "Node.js", "Express.js"],
    icon: <Database className="w-8 h-8 text-orange-400" />,
  },
  {
    title: "Official RIRABH Website",
    description:
      "Developed and deployed the company’s official website with React Slick, SEO, and custom UI.",
    tech: ["React.js", "Redux", "Bootstrap", "Material UI"],
    icon: <Code className="w-8 h-8 text-teal-400" />,
  },
];

const Projects = () => {
  return (
    <section className="relative min-h-screen py-16 px-6 bg-transparent overflow-hidden">
    

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-bold text-blue-200 font-poppins mb-12 border-b-2 border-[#64ffda] inline-block pb-2">
          My Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-[#64ffda]/20 hover:border-[#64ffda] transition duration-300"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-14 h-14 rounded-full  mb-4 mx-auto group-hover:scale-110 transition">
                {project.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-poppins text-blue-200 mb-3 group-hover:text-[#64ffda] transition">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-blue-100 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap justify-center gap-2">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-gray-800/60 text-blue-200 border border-[#64ffda]/30"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
