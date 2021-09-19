import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Cloudy from "../images/cloudy.png";
import Commerce from "../images/e-commerce.png";

const portfolios = [
  {
    name: "Cloudy - Cloud Hosting",
    img: Cloudy,
    urlLive: "https://kryonics.me/cloudy",
    urlGithub: "https://kryonics.me/cloudy",
    description: "A landing page for cloud hosting service website",
  },
  {
    name: "Store - eCommerce Website",
    img: Commerce,
    urlLive: "",
    urlGithub: "",
    description: "First project with my team on Web Development 1 subject",
  },
];

const Portfolio = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div className="lg:h-screen h-full bg-black relative overflow-hidden">
      <div className=" h-full flex flex-col lg:flex-row">
        <div
          data-aos="fade-right"
          className="lg:w-1/6 lg:h-full sm:h-1/5 h-20 bg-black text-gray-100 flex justify-center items-center"
        >
          <h2 className="text-5xl sm:text-6xl uppercase font-bold lg:transform lg:-rotate-90 tracking-wide">
            Portfolio
          </h2>
        </div>

        <div
          data-aos="fade-left"
          className="grid lg:grid-cols-3 md:grid-cols-2 grid-flow-row  gap-2 w-full h-full lg:px-16 lg:py-20 sm:px-28 py-6 px-6 "
        >
          {portfolios.map((portfolio) => (
            <div className=" h-72 rounded-md overflow-hidden relative">
              <div className="px-4 opacity-0 hover:opacity-90 bg-gray-700 absolute w-full h-full transition-all ease-linear duration-300 flex flex-col justify-center items-center text-center">
                <h2 className="text-white text-2xl">{portfolio.name}</h2>
                <p className="mb-4 text-gray-400">{portfolio.description}</p>
                <a
                  className="px-16 py-3 bg-black text-white rounded-md mb-1 tracking-wide  hover:bg-primaryblue hover:text-gray-800 transition-all duration-300 ease-linear hover:border-transparent"
                  href={portfolio.urlLive}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
                <a
                  className="px-10 py-3 border text-white rounded-md  tracking-wide  hover:bg-primaryblue hover:text-gray-800 transition-all duration-300 ease-linear hover:border-transparent"
                  href={portfolio.urlGithub}
                  target="_blank"
                  rel="noreferrer"
                >
                  View on Github
                </a>
              </div>
              <img
                className="h-full w-full object-cover hover:opacity-50  transition-all ease-linear duration-300"
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
