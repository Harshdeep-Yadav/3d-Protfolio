import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const toRotate = ["Web Developer", "UI/UX Designer", "App Developer"];

const Hero = () => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [delay, setDelay] = useState(150);

  const tick = useCallback(() => {
    let i = count % toRotate.length;
    let currentText = toRotate[i];
    let updatedText = isDeleting
      ? currentText.substring(0, text.length - 1)
      : currentText.substring(0, text.length + 1);

    setText(updatedText);

    if (updatedText === currentText) {
      setDelay(1000);
    }

    if (!isDeleting && text === currentText) {
      setIsDeleting(true);
      setDelay(30);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setDelay(150);
      setCount((prev) => prev + 1);
    }
  }, [text, count, isDeleting]);

  useEffect(() => {
    const tickInterval = setInterval(() => {
      tick();
    }, delay);
    return () => clearInterval(tickInterval);
  }, [text, tick, delay]);

  return (
    <section className="relative w-full h-screen mx-auto ">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row itemsnpm urn-start gap-5`}
      >
        <div className="flex flex-col items-center justify-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />

          <div className="w-1 h-40 sm:h-80 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}text-white`}>
            <span className="block sm:inline">
              👋Hi, I'm <span className="text-[#915eff]">Harshdeep</span>
            </span>
            <a
              onClick={() => window.open("resume.pdf")}
              className="ml-3 text-[14px] sm:text-[10px] bg-opacity-90 px-2 py-1 rounded-3xl font-semibold -mt-10 md:mt-8 bg-[#f17c3c] hover:bg-[#02959f] hover:scale-90 cursor-pointer "
              title="View Resume"
            >
              📄Resume
            </a>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            🚀 I am &nbsp;
            <span className="text-[#915eff] font-bold">
              {text}
              <span className="text-3xl pl-[2px] animate-pulse font-normal">
                |
              </span>
            </span>
          </p>
        </div>
      </div>
      <ComputersCanvas />

      <div className="absolute flex items-center justify-center w-full xs:bottom-10 bottom-32">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 mb-1 rounded-full bg-secondary"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
