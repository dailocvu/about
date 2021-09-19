import { useEffect } from "react";
import TechIcons from "./TechIcons";
import Aos from "aos";
import "aos/dist/aos.css";
import Earth from "../images/earth.png";
import Astronaut from "../images/astronaut.png";

const Skill = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div className="h-screen bg-black relative overflow-hidden">
      <div className="h-full w-full flex flex-col justify-center items-center text-center text-gray-100 lg:px-52 px-6">
        {/* <img
          data-aos="zoom-in-left"
          className="absolute hidden sm:block md:w-40 w-28 lg:right-10 lg:top-10 right-10 top-5"
          src={Earth}
          alt=""
        />
        <img
          data-aos="zoom-in-right"
          className="absolute hidden sm:block md:w-40 w-28 lg:left-10 bottom-5 left-10  "
          src={Astronaut}
          alt=""
        /> */}
        <h1 data-aos="zoom-in-up" className="text-5xl sm:text-6xl font-bold">
          Tech stack/skills
        </h1>
        <h2
          data-aos="zoom-in-up"
          className="text-gray-300 mt-2 sm:text-xl text-base"
        >
          As a front-end developer , UI/UX discover, I Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Officia saepe maxime ex quia ab.
        </h2>
        <TechIcons />
      </div>
    </div>
  );
};

export default Skill;
