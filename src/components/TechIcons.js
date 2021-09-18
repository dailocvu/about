import { useEffect } from "react";
import { HTML } from "./icons/HTML";
import { CSS } from "./icons/CSS";
import { JavaScript } from "./icons/JavaScript";
import { TailwindCSS } from "./icons/TailwindCSS";
import { React } from "./icons/React";
import { Redux } from "./icons/Redux";
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

const TechIcons = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div
      data-aos="zoom-in-up"
      className="grid grid-cols-3 sm:grid-cols-4 grid-flow-row gap-8 mt-14"
    >
      {techIcon.map((icon) => (
        <div key={icon.name} className="flex flex-col items-center">
          <div className="w-12 h-12 mb-1">{icon.icon}</div>
          <p>{icon.name}</p>
        </div>
      ))}
    </div>
  );
};

export default TechIcons;
