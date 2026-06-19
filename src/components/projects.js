import React from "react";
import { useInView } from "react-intersection-observer";
import { IoLogoGithub } from "react-icons/io";
import { FaEye } from "react-icons/fa";

const projectdata = [
  {
    name: "ATSForge AI",
    desc: "Built an AI interview prep platform with ATS resume tips, job match scoring, AI Q&A, skill gaps, and learning plans.",
    src: "https://github.com/shanyasahu/atsforge-ai-client",
    techUse: "MERN, Tailwind CSS, JWT, OAuth, Gemini API",
    github: "https://github.com/shanyasahu/atsforge-ai-server",
  },
  {
    name: "Konvo | Chatting App",
    desc: "Built a real-time chat app with JWT auth, responsive UI, Socket.io messaging, KafkaJS streaming, and scalable backend APIs support.",
    src: "https://github.com/shanyasahu/konvo-client",
    techUse: "MERN, Next.js, Socket.io, Aiven for Apache Kafka",
    github: "https://github.com/shanyasahu/konvo-server",
  },
  {
    name: "eSkoolnize",
    desc: "Developed a full-stack school management platform with role-based authentication, secure JWT APIs, scalable backend architecture, and responsive UI.",
    src: "https://github.com/shanyasahu/eskoolnize-client",
    techUse: "Next.js, TypeScript, Node.js, Express.js, PostgreSQL",
    github: "https://github.com/shanyasahu/eskoolnize-server",
  },
  {
    name: "Lenny | E-Commerce",
    desc: "Built Product page, navbar, footer, and article section on frontend; developed Article API and Single Product API in backend.",
    src: "https://e-commerce-fullstack-nine.vercel.app/",
    techUse: "NextJS, Firebase, Hono, BunJS, Tailwind CSS",
    github: "#",
  },
  {
    name: "COLLIKORPORATE",
    desc: "Collaborative freelancing project where I actively contributed to both frontend and backend aspects of development.",
    src: "https://collikorporate.com/",
    techUse: "NextJS, Tailwind CSS, MongoDB",
    github: "#",
  },
  {
    name: "Kairaan'24",
    desc: "This collaborative freelancing project showcases my frontend development skills, highlighting creativity, precision, and technical expertise.",
    src: "https://kairaan.vercel.app/",
    techUse: "NextJS, Tailwind CSS, Firebase",
    github: "#",
  },
];

const ProjectCard = ({ project, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${index * 120}ms`,
      }}
      className={`
        transition-all duration-700 ease-out
        ${inView ? "opacity-100 scale-100" : "opacity-0 scale-125"}
      `}
    >
      <div className="project-card bg-gray-100 p-7 shadow-md rounded-lg hover:bg-gray-50 hover:border-2 hover:border-[var(--pri-heading)] transition-all duration-300 hover:scale-105">
        <h2 className="text-xl font-bold uppercase">{project.name}</h2>

        <p className="text-sm font-semibold py-2">{project.techUse}</p>

        <p className="text-sm">{project.desc}</p>

        <div className="flex justify-between items-center mt-5">
          <a href={project.src} target="_blank" rel="noreferrer">
            <FaEye className="text-xl hover:text-[var(--pri-heading)] transition-colors duration-300" />
          </a>

          <a href={project.github} target="_blank" rel="noreferrer">
            <IoLogoGithub className="text-xl hover:text-[var(--pri-heading)] transition-colors duration-300" />
          </a>
        </div>
      </div>
    </div>
  );
};

const ProjectSec = () => {
  return (
    <div className="p-4 w-full pl-[6%] xl:pl-[15%] pr-[6%] py-20" id="projects">
      <h4 className="text-sm text-[var(--pri-heading)] font-medium text-center">
        Projects
      </h4>

      <h3 className="font-semibold text-2xl text-center uppercase">
        My Latest Works
      </h3>

      <br />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10">
        {projectdata.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ProjectSec;
