import React from "react";
import { useInView } from "react-intersection-observer";

import location from "../assets/google-maps.png";
import contact from "../assets/phone.png";
import email from "../assets/email.png";

const contactData = [
  {
    title: "Location",
    value: "Chhattisgarh, India",
    icon: location,
    animation: "-translate-x-16",
  },
  {
    title: "Contact Me",
    value: "+91 6266-060-475",
    icon: contact,
    animation: "scale-75",
  },
  {
    title: "Email Me",
    value: "shanyasahu.dev@gmail.com",
    icon: email,
    animation: "translate-x-16",
  },
];

const ContactCard = ({ item, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${index * 150}ms`,
      }}
      className={`
        flex justify-center items-center flex-col
        bg-gray-50 rounded-md shadow-md
        p-10 md:p-5 lg:p-10
        w-full md:w-[30%] m-5 md:m-0

        transition-all duration-700 ease-out
        hover:-translate-y-2 hover:scale-105 hover:shadow-xl

        ${
          inView
            ? "opacity-100 translate-x-0 scale-100"
            : `opacity-0 ${item.animation}`
        }
      `}
    >
      <img
        src={item.icon}
        alt={item.title}
        className="h-10 transition-transform duration-300 group-hover:scale-110"
      />

      <h3 className="text-lg lg:text-xl font-bold my-1">{item.title}</h3>

      <p className="text-sm lg:text-base text-center">{item.value}</p>
    </div>
  );
};

const Contact = () => {
  return (
    <div id="contact">
      <section className="px-10 lg:pl-[6%] xl:pl-[15%] lg:pr-[6%] pt-20 overflow-x-hidden">
        <h4 className="text-sm text-[var(--pri-heading)] font-medium text-center">
          Contact Me
        </h4>

        <h3 className="font-semibold text-2xl uppercase text-center">
          Get in touch
        </h3>

        <div className="p-0 lg:pl-[5%] lg:pr-[6%] mt-10 mb-20 flex justify-evenly items-center flex-col md:flex-row">
          {contactData.map((item, index) => (
            <ContactCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Contact;
