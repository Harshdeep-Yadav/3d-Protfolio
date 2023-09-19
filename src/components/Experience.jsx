import React from "react";
import { motion } from "framer-motion";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ exp }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={exp.date}
    iconStyle={{ background: exp.iconBg }}
    icon={
      <div className="flex items-center justify-center w-full h-full">
        <img
          src={exp.icon}
          alt={exp.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div className="">
      <h3 className="text-white text-[24px] font-bold">{exp.title}</h3>
      <p
        className="text-secondary text-[16px] font-semibold "
        style={{ margin: 0 }}
      >
        {exp.company_name}
      </p>
      <ul className="mt-5 ml-5 space-y-2 list-disc">
        {exp.points.map((p, ind) => (
          <li
            key={`exp-point-${ind}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {p}
          </li>
        ))}
      </ul>
    </div>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>

      <div className="flex mt-20-col">
        <VerticalTimeline>
          {experiences.map((exp, ind) => (
            <ExperienceCard key={ind} exp={exp} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
