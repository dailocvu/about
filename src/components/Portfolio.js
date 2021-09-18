const Portfolio = () => {
  return (
    <div className="sm:h-screen h-full">
      <div className="bg-black h-full flex flex-col lg:flex-row">
        <div className="lg:w-1/6 lg:h-full sm:h-1/5 h-20 bg-black text-gray-100 flex justify-center items-center">
          <h2 className="text-5xl sm:text-6xl uppercase font-bold lg:transform lg:-rotate-90 tracking-wide">
            Portfolio
          </h2>
        </div>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-flow-row  gap-1 w-full h-full lg:px-16 lg:py-20 sm:px-28 sm:py-6 px-10 py-6">
          <div className="bg-white h-60 sm:h-auto"></div>
          <div className="bg-white h-60 sm:h-auto"></div>
          <div className="bg-white h-60 sm:h-auto"></div>
          <div className="bg-white h-60 sm:h-auto"></div>
          <div className="bg-white h-60 sm:h-auto"></div>
          <div className="bg-white h-60 sm:h-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
