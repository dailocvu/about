import { useEffect } from "react";
import TechIcons from "./TechIcons";
import Aos from "aos";
import "aos/dist/aos.css";
// import Earth from "../images/earth.png";
// import Astronaut from "../images/astronaut.png";

const Skills = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div className="h-screen relative overflow-hidden">
      <div
        className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full"
        aria-hidden="true"
      >
        <div className="relative h-full max-w-7xl mx-auto">
          <svg
            className="absolute right-full transform translate-y-1/2 translate-x-1/4 lg:translate-x-1/2"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 405 784"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-600"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={784}
              fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
            />
          </svg>
          <svg
            className="absolute left-full transform -translate-y-1/2 -translate-x-1/4 lg:-translate-x-1/2"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-600"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={784}
              fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
            />
          </svg>
        </div>
      </div>
      <div className="h-full w-full flex flex-col justify-center items-center text-center text-gray-100 lg:px-60 px-6">
        {/* <img
          data-aos="zoom-in-left"
          className="absolute hidden sm:block md:w-40 w-28 lg:right-10 lg:top-10 right-10 top-10"
          src={Earth}
          alt=""
        />
        <img
          data-aos="zoom-in-right"
          className="absolute hidden sm:block md:w-40 w-28 lg:left-10 bottom-10 left-10  "
          src={Astronaut}
          alt=""
        /> */}
        <h1 data-aos="zoom-in-up" className="text-4xl sm:text-6xl font-bold">
          Tech stack/skills 🏆
        </h1>
        <h2
          data-aos="zoom-in-up"
          className="text-gray-300 mt-2 sm:text-xl text-base"
        >
          As a Front-end Developer, I have a keen interest in UI/UX, love to
          build beautiful websites by finding ways to make things easier
        </h2>
        <TechIcons />
      </div>
    </div>
  );
};

export default Skills;
