import React from "react";
import { BallCanvas } from "./canvas";
import { technologies } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-12">
      {technologies.map((tech) => (
        <div className="w-28 h-28 key={tech.name} cursor-pointer">
          <BallCanvas icon={tech.icon}/>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
