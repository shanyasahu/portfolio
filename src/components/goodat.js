import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const stats = [
  { label: "TEAM WORK", value: 90 },
  { label: "COMMUNICATION", value: 90 },
  { label: "PROJECTS", value: 80 },
  { label: "HAPPY CLIENTS", value: 100 },
];

const AnimatedCounter = ({ value }) => {
  const [count, setCount] = useState(0);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 1500;
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <div
      ref={ref}
      className="w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] border-8 rounded-full flex justify-center items-center"
    >
      <h3 className="text-2xl lg:text-4xl font-bold">{count}%</h3>
    </div>
  );
};

function GoodAt() {
  return (
    <section className="pl-[60px] md:pl-[50px] xl:pl-[15%] p-16 lg:p-20 bg-[--yellow] flex justify-evenly items-center flex-col md:flex-row gap-8 text-white">
      {stats.map((item) => (
        <div key={item.label} className="flex flex-col items-center">
          <AnimatedCounter value={item.value} />

          <h4 className="text-base lg:text-lg font-semibold mt-5 text-center">
            {item.label}
          </h4>
        </div>
      ))}
    </section>
  );
}

export default GoodAt;
