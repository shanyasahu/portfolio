import React from "react";
import { useInView } from "react-intersection-observer";

const AnimatedCard = ({ children, direction = "left", delay = 0 }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  const hiddenClass =
    direction === "left"
      ? "-translate-x-24 opacity-0"
      : "translate-x-24 opacity-0";

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`
        transition-all duration-700 ease-out
        ${inView ? "translate-x-0 opacity-100" : hiddenClass}
      `}
    >
      {children}
    </div>
  );
};

function Experiences() {
  return (
    <div id="experience" className="pl-[6%] xl:pl-[15%] pr-[6%] py-20">
      <h4 className="text-sm text-[var(--pri-heading)] font-medium text-center">
        Experiences
      </h4>

      <h3 className="font-semibold text-2xl text-center uppercase">
        I had worked on multiple companies!
      </h3>

      <section className="grid w-full">
        {/* CreatUs Media */}
        <AnimatedCard direction="left" delay={100}>
          <div className="w-full md:w-[80%] lg:w-[50%] flex justify-center items-center m-0 mt-16 md:m-5 justify-self-end flex-col md:flex-row">
            <div className="bg-[--pink] text-white py-9 px-14 m-[1px] shadow-lg">
              <h3 className="text-4xl my-1">2023</h3>
              <p className="text-white">Oct to Pre</p>
              <h3 className="text-4xl my-1">2025</h3>
            </div>

            <div
              className="triangle"
              style={{ borderBottom: "20px solid var(--pink)" }}
            ></div>

            <div className="shadow-lg bg-white p-10">
              <h3 className="text-2xl my-1 font-semibold">
                Frontend <span className="text-[--pink]">Developer</span>
              </h3>

              <p className="text-[--pink] my-1 text-sm font-semibold">
                CreatUs Media | Belgium | Full Time
              </p>

              <hr className="my-2" />

              <p className="my-1 text-sm">
                Built scalable Next.js applications, integrated APIs, optimized
                performance, and streamlined AWS deployments using CI/CD.
              </p>
            </div>
          </div>
        </AnimatedCard>

        {/* Big Brand Bucket */}
        <AnimatedCard direction="right" delay={200}>
          <div className="w-full md:w-[80%] lg:w-[50%] flex justify-center items-center m-0 mt-16 md:m-5 justify-self-start flex-col md:flex-row">
            <div className="bg-[--orange] text-white py-9 px-14 m-[1px] shadow-lg">
              <h3 className="text-4xl my-1">2023</h3>
              <p className="text-white">Feb to Sep</p>
              <h3 className="text-4xl my-1">2023</h3>
            </div>

            <div
              className="triangle"
              style={{ borderBottom: "20px solid var(--orange)" }}
            ></div>

            <div className="shadow-lg bg-white p-10">
              <h3 className="text-2xl my-1 font-semibold">
                Frontend <span className="text-[--orange]">Developer</span>
              </h3>

              <p className="text-[--orange] my-1 text-sm font-semibold">
                Big Brand Bucket | Gurgaon | Full Time
              </p>

              <hr className="my-2" />

              <p className="my-1 text-sm">
                Developed WordPress sites and improved Lighthouse score from 65
                to 90+, enhancing SEO and reducing load time.
              </p>
            </div>
          </div>
        </AnimatedCard>

        {/* Interpret Media */}
        <AnimatedCard direction="left" delay={300}>
          <div className="w-full md:w-[80%] lg:w-[50%] flex justify-center items-center m-0 mt-16 md:m-5 justify-self-end flex-col md:flex-row">
            <div className="bg-[--yellow] text-white py-9 px-14 m-[1px] shadow-lg">
              <h3 className="text-4xl my-1">2022</h3>
              <p className="text-white">Sep to Feb</p>
              <h3 className="text-4xl my-1">2023</h3>
            </div>

            <div
              className="triangle"
              style={{ borderBottom: "20px solid var(--yellow)" }}
            ></div>

            <div className="shadow-lg bg-white p-10">
              <h3 className="text-2xl my-1 font-semibold">
                Frontend <span className="text-[--yellow]">Developer</span>
              </h3>

              <p className="text-[--yellow] my-1 text-sm font-semibold">
                Interpret Media | Mumbai | Internship
              </p>

              <hr className="my-2" />

              <p className="my-1 text-sm">
                Built responsive e-commerce sites using WordPress and improved
                UI, performance, and overall user experience.
              </p>
            </div>
          </div>
        </AnimatedCard>

        {/* WebnU */}
        <AnimatedCard direction="right" delay={400}>
          <div className="w-full md:w-[80%] lg:w-[50%] flex justify-center items-center m-0 mt-16 md:m-5 justify-self-start flex-col md:flex-row">
            <div className="bg-[--link] text-white py-9 px-14 m-[1px] shadow-lg">
              <h3 className="text-4xl my-1">2022</h3>
              <p className="text-white">Jun to Sep</p>
              <h3 className="text-4xl my-1">2022</h3>
            </div>

            <div
              className="triangle"
              style={{ borderBottom: "20px solid var(--link)" }}
            ></div>

            <div className="shadow-lg bg-white p-10">
              <h3 className="text-2xl my-1 font-semibold">
                Frontend <span className="text-[--link]">Developer</span>
              </h3>

              <p className="text-[--link] my-1 text-sm font-semibold">
                WebnU | Delhi | Internship
              </p>

              <hr className="my-2" />

              <p className="my-1 text-sm">
                Built business and e-commerce websites using HTML, CSS, JS,
                Shopify, and WordPress with responsive design focus.
              </p>
            </div>
          </div>
        </AnimatedCard>
      </section>
    </div>
  );
}

export default Experiences;
