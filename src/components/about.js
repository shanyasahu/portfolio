import React from "react";
import profile from "../assets/devgirl.jpg";
import { Link } from "react-scroll";
import Resume from "../assets/shanya-sahu-resume.pdf";

function About() {
  return (
    <div
      className="ml-0 xl:ml-[12%] h-full flex justify-center items-center flex-col lg:flex-row px-5 md:px-20 pb-20 lg:p-[100px] mr-0 xl:mr-[5%]"
      id="about"
    >
      <div className="w-full lg:w-[50%] hidden lg:block">
        <div className="flex justify-center items-start flex-col border-4 border-[var(--pink)] py-5 mr-5 m-0 xl:m-10">
          <img
            src={profile}
            alt="profile_image"
            className="-mt-16 ml-5 object-cover w-full "
          />
        </div>
      </div>
      <div className="w-full lg:w-[50%] h-full flex justify-center items-center lg:items-start flex-col pl-5">
        <h4 className="text-sm text-[var(--pri-heading)] font-medium">
          About Me
        </h4>
        <h3 className="font-semibold text-2xl uppercase text-center lg:text-left">
          Crafting Dynamic Web Solutions with Passion and Expertise
        </h3>
        <br />
        <p>
          {/* I’m Shanya Sahu, I bring <b>3 years</b> of development experience,
          including <b>1.5 years of freelance work</b>, specializing in building
          responsive, high-performance web applications using{" "}
          <b>Next.js and Tailwind CSS</b>. Currently employed at Creatus Media,
          I am expanding my expertise toward <b>Full Stack Development</b> with
          a growing command of{" "}
          <b>TypeScript, Express.js, MongoDB, and PostgreSQL</b>. I also have a
          knowledge in the <b>MERN stack</b> and hands-on experience with{" "}
          <b>WordPress and Shopify</b>, which adds versatility to my technical
          skill set. I’m actively seeking a <b>Full Stack Developer Role</b>{" "}
          that will allow me to further deepen my skills, take on new
          challenges, and contribute meaningfully to impactful projects. */}
          I’m Shanya Sahu with 3 years of experience delivering responsive,
          scalable, and high-performance web applications using React, Next.js,
          TypeScript, Redux Toolkit, and modern JavaScript. I focus on building
          reusable UI components, integrating REST APIs, implementing secure
          authentication flows, and boosting Lighthouse performance scores. I
          deliver pixel-perfect, cross-browser-compatible interfaces, convert
          Figma designs into production-ready layouts, and ensure accessibility,
          SEO, and mobile-first best practices.
          <br />
          My work spans e-commerce platforms, dashboards, client-facing
          websites, and CMS-driven products using WordPress and Shopify Liquid.
          I collaborate with backend teams and have hands-on experience with
          Node.js, Express, MongoDB, and PostgreSQL for API development. I enjoy
          solving UI/UX challenges, improving onboarding experiences,
          contributing in Agile teams, and turning complex problems into clean,
          maintainable code.
        </p>

        <br />
        <h4 className="text-xl text-[var(--pri-heading)] font-semibold">
          Shanya Sahu
        </h4>
        <p className="text-sm font-bold">Full Stack Developer</p>

        <div className="hidden lg:flex">
          <a
            download="shanya-resume"
            href={Resume}
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
