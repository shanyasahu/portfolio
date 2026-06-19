import React from "react";
import profile from "../assets/devgirl.jpg";
import { Link } from "react-scroll";
import { useInView } from "react-intersection-observer";

// import Resume from "../assets/shanya-sahu-resume.pdf";
const resumeLink =
  "https://drive.google.com/uc?export=download&id=1oyi76a2twdAKsR3vCrkaL7LRBFt-MwQp";

function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div
      ref={ref}
      className="ml-0 xl:ml-[12%] h-full flex justify-center items-center flex-col lg:flex-row px-5 md:px-20 pb-20 lg:p-[100px] mr-0 xl:mr-[5%]"
      id="about"
    >
      {/* Left Section */}
      <div
        className={`
          w-full lg:w-[50%] hidden lg:block
          transition-all duration-1000 ease-out
          ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}
        `}
      >
        <div className="flex justify-center items-start flex-col border-4 border-[var(--pink)] py-5 mr-5 m-0 xl:m-10">
          <img
            src={profile}
            alt="profile_image"
            className="-mt-16 ml-5 object-cover w-full"
          />
        </div>
      </div>

      {/* Right Section */}
      <div
        className={`
          w-full lg:w-[50%] h-full flex justify-center items-center lg:items-start flex-col pl-5
          transition-all duration-1000 ease-out delay-300
          ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}
        `}
      >
        <h4 className="text-sm text-[var(--pri-heading)] font-medium">
          About Me
        </h4>

        <h3 className="font-semibold text-2xl uppercase text-center lg:text-left">
          Crafting Dynamic Web Solutions with Passion and Expertise
        </h3>

        <br />

        <p className="text-base leading-relaxed text-muted-foreground">
          <strong>Frontend Engineer</strong> with{" "}
          <strong>3+ years of experience </strong>
          building scalable, high-performance web applications using
          <strong> React.js, Next.js, TypeScript, </strong> and{" "}
          <strong>Node.js</strong>.
          <br />
          <br />
          Specialized in <strong>component-driven architecture</strong>,
          reusable UI systems, REST API integration, performance optimization,
          and cloud deployments.
          <br />
          <br />
          Delivered production-ready applications with a strong focus on
          <strong> accessibility, SEO, responsive design, </strong> and user
          experience. Built and optimized multiple Next.js applications,
          integrated
          <strong> 30+ REST APIs </strong>, improved page load performance by
          <strong> 30% </strong>, and contributed to{" "}
          <strong>CI/CD workflows </strong> and
          <strong> AWS deployments.</strong>
          <br />
        </p>

        <br />

        <h4 className="text-xl text-[var(--pri-heading)] font-semibold">
          Shanya Sahu
        </h4>

        <p className="text-sm font-bold">Software Engineer</p>

        <div className="hidden lg:flex">
          <a
            download="shanya-resume"
            href={resumeLink}
            rel="noreferrer"
            className="mr-4 mt-6 float-left py-5 px-14 shadow-lg rounded-full bg-[var(--yellow)] text-white"
          >
            Download Resume
          </a>

          <Link to="contact" smooth={true} duration={500}>
            <button className="mr-4 mt-6 float-left py-5 px-14 shadow-lg rounded-full bg-[var(--pink)] text-white">
              Hire Me
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
