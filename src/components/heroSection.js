import React, { useState, useEffect } from "react";
import bg from "../assets/banner_bg.png";
import profile from "../assets/profile-new.jpg";
import { Link } from "react-scroll";
import Resume from "../assets/shanya-sahu-resume.pdf";

function HeroSection() {
  function ChangingTypingEffect({ phrases, typingSpeed, switchDelay }) {
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const currentPhrase = phrases[currentPhraseIndex];
    useEffect(() => {
      let timer;

      if (displayedText !== currentPhrase) {
        timer = setTimeout(() => {
          setDisplayedText(
            currentPhrase.substring(0, displayedText.length + 1)
          );
        }, typingSpeed);
      } else {
        timer = setTimeout(() => {
          setDisplayedText("");
          setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
        }, switchDelay);
      }

      return () => clearTimeout(timer);
    }, [
      currentPhrase,
      currentPhraseIndex,
      displayedText,
      phrases.length,
      switchDelay,
      typingSpeed,
    ]);

    return <h2 className="text-xl xl:text-2xl">{displayedText}</h2>;
  }

  const phrases = [
    "Frontend Developer",
    "Full Stack Developer",
    "MERN Stack Developer",
    "WordPress Developer",
  ];

  return (
    <div className="ml-0 xl:ml-[10%]" id="heroSec">
      <section className="relative hero">
        {/* <video
          src={bg}
          className="w-full h-[100vh] object-cover"
          autoPlay
          loop
          muted
        /> */}
        <img
          src={bg}
          alt=""
          className="w-full h-[800px] object-cover animate-move-up"
        />
        <div className="absolute top-0 pl-0 md:pl-10 xl:pl-20 w-full h-full flex justify-center items-center flex-col-reverse lg:flex-row">
          <div className="w-full lg:w-[60%] xl:w-[40%] flex justify-center items-center lg:items-start flex-col">
            <h3 className="text-xl xl:text-2xl leading-10 bg-highlight font-semibold">
              Hello!
            </h3>
            <h1 className="text-4xl xl:text-6xl font-bold leading-tight">
              I'm Shanya Sahu
            </h1>
            <div className="border-l-4 border-[var(--yellow)] pl-3 ">
              {/* <h2 className="text-2xl">Web | WordPress | Shopify Developer</h2> */}
              <ChangingTypingEffect
                phrases={phrases}
                typingSpeed={100} // Adjust typing speed in milliseconds
                switchDelay={1000} // Adjust delay between switches in milliseconds
              />
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start">
              <a
                download="shanya-resume"
                href={Resume}
                rel="noreferrer"
                className="mr-0 md:mr-4 mt-6 float-left py-5 px-14 shadow-lg rounded-full bg-[var(--yellow)] text-white"
              >
                Download Resume
              </a>
              <Link to="contact" smooth={true} duration={500}>
                <button
                  className="mr-0 md:mr-4 mt-6 float-left py-5 px-14 shadow-lg
                rounded-full bg-[var(--pink)] text-white"
                >
                  {" "}
                  Send Message
                </button>
              </Link>
            </div>

            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="hidden lg:block"
            >
              <button className="mr-4 mt-8 absolute bottom-[100px] right-10 py-5 px-14 shadow-lg rounded-full bg-[var(--orange)] text-white">
                Hire Me
              </button>
            </Link>
          </div>

          <div className="my-10 lg:my-0 w-full lg:w-[40%] xl:w-[60%] flex justify-center items-end animate-move-up mr-0 md:mr-5">
            <img
              src={profile}
              alt="profile_image"
              className="object-cover w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] xl:w-[500px] xl:h-[500px] rounded-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
