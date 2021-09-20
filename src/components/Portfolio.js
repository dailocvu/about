import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Cloudy from "../images/cloudy.png";
import HomepagePortfolio from "../images/homepageportfolio.png";
import Commerce from "../images/e-commerce.png";
import Cinema from "../images/cinema.png";
import Others from "../images/others.png";
import About from "../images/about.png";

const portfolios = [
  {
    id: "1",
    name: "Cloudy - Cloud Hosting",
    img: Cloudy,
    urlLive: "https://kryonics.me/cloudy",
    urlGithub: "https://github.com/iamkryonics/cloudy",
    description: "A landing page for cloud hosting service website",
  },
  {
    id: "2",
    name: "Homepage - My Portfolio",
    img: HomepagePortfolio,
    urlLive: "https://kryonics.me",
    urlGithub: "https://github.com/iamkryonics/iamkryonics.github.io",
    description: "3D interactive homepage for my portfolio website",
  },
  {
    id: "3",
    name: "About Me - My Portfolio",
    img: About,
    urlLive: "https://kryonics.me/about",
    urlGithub: "https://github.com/iamkryonics/about",
    description: "Something about me, skills and projects (Current website)",
  },
  {
    id: "4",
    name: "Store - eCommerce Website",
    img: Commerce,
    urlLive: null,
    urlGithub: "https://github.com/adga32/DoAnLTW",
    description: "A project with my team on Web Development 1 subject",
  },
  {
    id: "5",
    name: "Cinema+ - Movie Tickets Booking Website",
    img: Cinema,
    urlLive: null,
    urlGithub: "https://github.com/dragonjjr/Web-Programming-2",
    description: "A project with my team on Web Development 2 subject",
  },
  {
    id: "6",
    name: "And More...",
    img: Others,
    urlLive: null,
    urlGithub: "https://github.com/iamkryonics",
    description: "Visit my Github profile 👇🏻 to discovery ",
  },
];

const Portfolio = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div className="bg-black relative overflow-hidden mt-16">
      <div className="flex flex-col lg:flex-row">
        <div
          data-aos="fade-right"
          className=" lg:w-1/6 lg:h-screen sm:h-1/5 h-20 bg-black text-gray-100 flex justify-center items-center"
        >
          <h2 className="text-4xl sm:text-6xl uppercase font-bold lg:transform lg:-rotate-90 tracking-wide">
            Portfolio
          </h2>
        </div>

        <div
          data-aos="fade-left"
          className="grid  md:grid-cols-2 grid-flow-row  gap-2 w-full h-full lg:px-16 lg:py-20 sm:px-28 py-6 px-6 "
        >
          {portfolios.map((portfolio) => (
            <div
              key={portfolio.id}
              className="h-72 rounded-md overflow-hidden relative"
            >
              <div className="px-4 opacity-0 hover:opacity-90 bg-gray-800 absolute w-full h-full transition-all ease-linear duration-300 flex flex-col justify-center items-center text-center">
                <h2 className="text-white text-2xl">{portfolio.name}</h2>
                <p className="mb-4 text-gray-300">{portfolio.description}</p>
                {portfolio.urlLive ? (
                  <a
                    className="font-medium px-16 py-3 bg-black text-white rounded-md mb-1 tracking-wide  hover:bg-primaryblue hover:text-gray-900 transition-all duration-300 ease-linear hover:border-transparent"
                    href={portfolio.urlLive}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                ) : null}

                <a
                  className="font-medium px-10 py-3 border text-white rounded-md  tracking-wide  hover:bg-primaryblue hover:text-gray-900 transition-all duration-300 ease-linear hover:border-transparent"
                  href={portfolio.urlGithub}
                  target="_blank"
                  rel="noreferrer"
                >
                  View on Github
                </a>
              </div>
              <img
                className="h-full w-full object-cover"
                src={portfolio.img}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
