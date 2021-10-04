import { useEffect } from "react";
import { HTML } from "./icons/HTML";
import { CSS } from "./icons/CSS";
import { JavaScript } from "./icons/JavaScript";
import { TailwindCSS } from "./icons/TailwindCSS";
import { React } from "./icons/React";
import { MaterialUI } from "./icons/MaterialUI";
import { AdobeXD } from "./icons/AdobeXD";
import { Figma } from "./icons/Figma";
import Aos from "aos";
import "aos/dist/aos.css";

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
    icon: <JavaScript />,
    name: "JavaScript",
  },
  {
    icon: <React />,
    name: "React",
  },
  {
    icon: <TailwindCSS />,
    name: "TailwindCSS",
  },
  {
    icon: <MaterialUI />,
    name: "MaterialUI",
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

const TechIcons = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div
      data-aos="zoom-in-up"
      className="grid grid-cols-3 sm:grid-cols-4 grid-flow-row sm:gap-8 sm:mt-14 gap-6 mt-10"
    >
      {techIcon.map((icon) => (
        <div key={icon.name} className="flex flex-col items-center">
          <div className="sm:w-12 sm:h-12 w-10 h-10 mb-1">{icon.icon}</div>
          <p className="text-gray-300">{icon.name}</p>
        </div>
      ))}
    </div>
  );
};

export default TechIcons;
