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
          <div className="px-8 absolute ">
            <h1
              className="text-4xl font-extrabold sm:text-6xl glitch"
              data-text="Hey, I'm Loc ✌🏻"
            >
              Hey, I'm Loc ✌🏻
            </h1>
            <div className="mt-2 mb-8 sm:mt-4 sm:mb-10">
              <h2 className="sub uppercase text-sm sm:text-lg  sm:tracking-widest whitespace-nowrap border-r border-primaryblue text-primaryblue tracking-wider overflow-hidden">
                Want to take a look ?
              </h2>
            </div>
            <a
              className="border py-4 px-14 rounded-md tracking-wide  hover:bg-primaryblue hover:text-gray-800 transition-all duration-300 ease-linear hover:border-transparent "
              href="https://drive.google.com/file/d/15xOowIS474UEcZg7wfFnKFgzGSkldydS/view?usp=sharing"
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
            <div className="text-gray-100 h-full sm:px-12 px-6 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
              <div className="sm:w-20 sm:h-1 w-14 h-0.5 bg-primaryblue hidden lg:block"></div>
              <h2 className="relative lg:left-24 -top-4 w-max sm:text-2xl text-xl font-medium border-b-2 sm:border-b-4 border-primaryblue lg:border-none">
                About Me
              </h2>
              <h1 className="sm:text-6xl text-4xl font-extrabold">
                I'm a Front-End Web Developer & Creative Lover
              </h1>
              <div className="sm:w-20 sm:h-1 w-14 h-0.5 bg-primaryblue my-6"></div>
              <p className="text-gray-300 font-extralight sm:text-xl">
                <span className="italic">
                  “Creativity is just connecting things.”&nbsp;
                </span>
                - Steve Jobs
              </p>
              <div className="my-6">
                <p className="sm:text-2xl text-xl font-medium">
                  How to reach me
                </p>
                <p className="text-gray-300">
                  You can email me at&nbsp;
                  <a
                    className="text-primaryblue hover:text-gray-100"
                    href="mailto:vdloc.hcmus@gmail.com"
                  >
                    vdloc.hcmus@gmail.com&nbsp;
                  </a>
                  or visit 👇🏻
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
