import TechIcons from "./TechIcons";

const Skill = () => {
  return (
    <div className="h-screen bg-black">
      <div className="h-full w-full flex flex-col justify-center items-center text-center text-gray-100 lg:px-52 px-6">
        <h1 className="text-5xl sm:text-6xl font-bold">Tech stack/skills</h1>
        <h2 className="text-gray-300 mt-2 sm:text-xl text-base">
          As a front-end developer , UI/UX discover, I Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Officia saepe maxime ex quia ab.
        </h2>
        <TechIcons />
      </div>
    </div>
  );
};

export default Skill;
