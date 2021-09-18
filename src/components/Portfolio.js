import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Portfolio = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div className="lg:h-screen h-full overflow-hidden bg-black">
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
          className="grid lg:grid-cols-3 md:grid-cols-2 grid-flow-row  gap-1 w-full h-full lg:px-16 lg:py-20 sm:px-28 py-6 px-16 "
        >
          <div className="bg-white h-60 lg:h-auto"></div>
          <div className="bg-white h-60 lg:h-auto"></div>
          <div className="bg-white h-60 lg:h-auto"></div>
          <div className="bg-white h-60 lg:h-auto"></div>
          <div className="bg-white h-60 lg:h-auto"></div>
          <div className="bg-white h-60 lg:h-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
