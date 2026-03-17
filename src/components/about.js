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
          I’m <strong>Shanya</strong>, a <strong>Frontend Developer</strong>{" "}
          with
          <strong> 3+ years of experience</strong> building
          <strong> scalable</strong> and{" "}
          <strong>responsive web applications</strong>
          using <strong>React.js, Next.js, and WordPress</strong>. I specialize
          in <strong>component-based architecture</strong>,
          <strong> REST API integration</strong>, and
          <strong> performance optimization</strong> to deliver seamless user
          experiences. I have a proven track record of improving
          <strong> Lighthouse scores</strong>, enhancing
          <strong> SEO</strong>, and developing
          <strong> high-quality, user-centric applications</strong>.
        </p>
        <br />
        <p>
          I successfully managed my <strong>freelance work</strong> alongside
          <strong> full-time employment</strong> and
          <strong> M.Sc. studies</strong>, demonstrating strong
          <strong> multitasking</strong>, <strong>ownership</strong>, and{" "}
          <strong> time management</strong> skills.
        </p>
        <br />
        <p>
          I’m currently seeking opportunities as a
          <strong> React/Frontend Developer</strong> in
          <strong> product-based environments</strong>, where I can contribute
          to building
          <strong> impactful and scalable digital solutions</strong>.
        </p>

        <br />
        <h4 className="text-xl text-[var(--pri-heading)] font-semibold">
          Shanya Sahu
        </h4>
        <p className="text-sm font-bold">Web Developer</p>

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
