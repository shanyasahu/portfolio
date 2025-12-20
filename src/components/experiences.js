import React from "react";

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
        {/* <div className="w-full md:w-[80%] lg:w-[50%] flex justify-center items-center m-0 mt-16 md:m-5 justify-self-start flex-col md:flex-row">
          <div className="bg-[--link] text-white py-9 px-14 m-[1px] shadow-lg">
            <h3 className="text-4xl my-1">2023</h3>
            <p className="text-white">Dec to Pre</p>
            <h3 className="text-4xl my-1">2025</h3>
          </div>
          <div
            className="triangle"
            style={{ borderBottom: "20px solid var(--link)" }}
          ></div>
          <div className="shadow-lg bg-white p-10">
            <h3 className="text-2xl my-1 font-semibold">
              Full Stack <span className="text-[--link]">Developer</span>
            </h3>
            <p className="text-[--link] my-1 text-sm font-semibold">
              Activo Digital Solutions | Freelance
            </p>
            <hr className="my-2" />
            <p className="my-1 text-sm">
              Full stack developer with live project experience, strong
              collaboration skills, and solid industry-level coding knowledge in
              web development.
            </p>
          </div>
        </div> */}

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
              Web <span className="text-[--pink]">Developer</span>
            </h3>
            <p className="text-[--pink] my-1 text-sm font-semibold">
              CreatUs Media | Belgium | Full Time
            </p>
            <hr className="my-2" />
            <p className="my-1 text-sm">
              Built scalable Next.js UIs with reusable components, REST API
              integration, auth flows, and responsive ui optimized for
              performance.
            </p>
          </div>
        </div>
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
              Web <span className="text-[--orange]">Developer</span>
            </h3>
            <p className="text-[--orange] my-1 text-sm font-semibold">
              Big Brand Bucket | Gurgaon | Full Time
            </p>
            <hr className="my-2" />
            <p className="my-1 text-sm">
              Developed React-based client interfaces, improved Lighthouse
              scores, and optimized UI layouts for speed, usability, and mobile
              delivery.
            </p>
          </div>
        </div>
        <div className="w-full md:w-[80%] lg:w-[50%] flex justify-center items-center self-end m-0 mt-16 md:m-5 justify-self-end flex-col md:flex-row">
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
              Web <span className="text-[--yellow]">Developer</span>
            </h3>
            <p className="text-[--yellow] my-1 text-sm font-semibold">
              Interpret Media | Mumbai | Internship
            </p>
            <hr className="my-2" />
            <p className="my-1 text-sm">
              Created responsive e-commerce pages, improved performance, helped
              deliver cleaner product browsing experiences across devices.
            </p>
          </div>
        </div>
        <div className="w-full md:w-[80%] lg:w-[50%] flex justify-center items-center self-start m-0 mt-16 md:m-5 justify-self-start flex-col md:flex-row">
          <div className="bg-[--pri-heading] text-white py-9 px-14 m-[1px] shadow-lg">
            <h3 className="text-4xl my-1">2022</h3>
            <p className="text-white">Jun to Sep</p>
            <h3 className="text-4xl my-1">2022</h3>
          </div>
          <div
            className="triangle"
            style={{ borderBottom: "20px solid var(--pri-heading)" }}
          ></div>
          <div className="shadow-lg bg-white p-10">
            <h3 className="text-2xl my-1 font-semibold">
              Web <span className="text-[--pri-heading]">Developer</span>
            </h3>
            <p className="text-[--pri-heading] my-1 text-sm font-semibold">
              WebnU | Delhi | Internship
            </p>
            <hr className="my-2" />
            <p className="my-1 text-sm">
              Built business websites with HTML, CSS, JS, Shopify, and
              WordPress, ensuring responsive layouts, structured UI, and
              CMS-driven delivery.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Experiences;
