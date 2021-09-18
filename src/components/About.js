import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Particle from "./Particle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div className="relative">
      <Particle />
      <div className="lg:h-screen flex lg:flex-row flex-col">
        <div className="lg:w-1/2 lg:h-full h-screen text-gray-100 font-bold flex flex-col justify-center items-center text-center">
          <div className="px-8 absolute">
            <h1
              className="text-4xl font-extrabold sm:text-6xl l glitch"
              data-text="Hey, I'm Loc ✌🏻"
            >
              Hey, I'm Loc ✌🏻
            </h1>
            <div className="mt-2 mb-8 sm:mt-4 sm:mb-10">
              <h2 className="sub uppercase text-md sm:text-lg  sm:tracking-widest whitespace-nowrap border-r border-primaryblue text-primaryblue tracking-wider overflow-hidden">
                Want to take a look ?
              </h2>
            </div>
            <a
              className="border py-4 px-14 tracking-wide rounded-md bg-gradient-to-r hover:from-primaryblue hover:to-primarypink transition-colors duration-300 ease-linear hover:border-transparent "
              href="/"
              target="_blank"
              rel="noreferrer"
            >
              DOWNLOAD CV
            </a>
          </div>
        </div>

        <div
          data-aos="fade-up"
          className="relative lg:w-1/2 lg:h-full h-screen"
        >
          <div className="absolute h-full">
            <div className="text-gray-100 h-full sm:px-12 px-6 flex flex-col justify-center">
              <div className="sm:w-20 sm:h-1 w-14 h-0.5 bg-primaryblue"></div>
              <h2 className="relative sm:left-24 left-16 -top-4 w-max sm:text-2xl text-xl">
                About Me
              </h2>
              <h1 className="sm:text-6xl text-5xl font-extrabold">
                I'm a new entry-level Front-end Web Developer
              </h1>
              <div className="sm:w-20 sm:h-1 w-14 h-0.5 bg-primaryblue my-6"></div>
              <p className="text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quaerat culpa accusantium labore distinctio velit, laboriosam
                pariatur quis
              </p>
              <div className="my-6">
                <p className="sm:text-2xl text-xl">How to reach me</p>
                <p className="text-gray-300">
                  You can email me at
                  <a
                    className="text-primaryblue hover:text-gray-100"
                    href="mailto:vdloc.hcmus@gmail.com"
                  >
                    {" "}
                    vdloc.hcmus@gmail.com
                  </a>{" "}
                  or visit my profile on platforms below
                </p>
                <div className="text-4xl mt-2">
                  <a
                    className="mr-2 hover:text-primaryblue"
                    href="https://github.com/iamkryonics"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a
                    className="mr-2 hover:text-primaryblue"
                    href="https://www.linkedin.com/in/vdloc/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
