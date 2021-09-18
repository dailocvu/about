import { HTML } from "./icons/HTML";
import { CSS } from "./icons/CSS";
import { JavaScript } from "./icons/JavaScript";
import { TailwindCSS } from "./icons/TailwindCSS";
import { React } from "./icons/React";
import { Redux } from "./icons/Redux";
import { AdobeXD } from "./icons/AdobeXD";
import { Figma } from "./icons/Figma";

const techIcon = [
  {
    icon: <HTML />,
    name: "HTML5",
  },
  {
    icon: <CSS />,
    name: "CSS3",
  },
  {
    icon: <TailwindCSS />,
    name: "TailwindCSS",
  },
  {
    icon: <JavaScript />,
    name: "JavaScript",
  },
  {
    icon: <React />,
    name: "React",
  },
  {
    icon: <Redux />,
    name: "Redux",
  },
  {
    icon: <Figma />,
    name: "Figma",
  },
  {
    icon: <AdobeXD />,
    name: "AdobeXD",
  },
];

const Skill = () => {
  return (
    <div className="h-screen bg-black">
      <div className="h-full w-full flex flex-col justify-center items-center text-center text-gray-100 lg:px-52 px-6">
        <h1 className="text-5xl sm:text-6xl font-bold">Tech stacks/skills</h1>
        <h2 className="text-gray-300 mt-2 sm:text-xl text-base">
          As a front-end developer , UI/UX discover, I Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Officia saepe maxime ex quia ab.
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 grid-flow-row gap-8 mt-14">
          {techIcon.map((icon) => (
            <div key={icon.name} className="flex flex-col items-center">
              <div className="w-12 h-12 mb-1">{icon.icon}</div>
              <p>{icon.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
