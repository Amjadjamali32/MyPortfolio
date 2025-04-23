import { useState, useEffect } from "react";
import picture from "../assets/picture.png";
import { useSelector } from "react-redux";
import wave from "../assets/wave.gif";
import { motion } from "framer-motion";

const Hero = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const [typedText, setTypedText] = useState("");
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const skills = [
    "Software Engineer",
    "MERN Stack Developer",
    "Tech Enthusiast",
    "React.js Specialist",
    "Node.js Developer",
    "Full Stack Engineer",
    "JavaScript Expert",
  ];

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const currentSkill = skills[currentSkillIndex];

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setTypedText(currentSkill.substring(0, typedText.length - 1));
        if (typedText.length === 0) {
          setIsDeleting(false);
          setCurrentSkillIndex((prev) => (prev + 1) % skills.length);
        }
      } else {
        setTypedText(currentSkill.substring(0, typedText.length + 1));
        if (typedText.length === currentSkill.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [typedText, currentSkillIndex, isDeleting]);

  return (
    <section
      id="home"
      className={`${
        darkMode ? "bg-customColor" : "bg-white"
      } flex flex-col lg:flex-row items-center justify-center min-h-[90vh] w-full mx-auto px-4 py-8 md:px-8 md:py-12 lg:px-12 xl:px-24 2xl:px-32 relative overflow-hidden`}
    >
      {/* Grid Pattern Background */}
      <div
        className={`absolute inset-0 ${darkMode ? "opacity-80" : "opacity-90"}`}
      >
        <div
          className="absolute inset-0 bg-[size:40px_40px] [mask-image:linear-gradient(0deg,transparent,rgba(0,0,0,0.1))]"
          style={{
            backgroundImage: `
              linear-gradient(to right, ${
                darkMode ? "#7c3aed" : "#8b5cf6"
              } 2px, transparent 2px),
              linear-gradient(to bottom, ${
                darkMode ? "#7c3aed" : "#8b5cf6"
              } 2px, transparent 2px)
            `,
          }}
        />
      </div>

      {/* Text Content */}
      <div className="flex-1 order-2 lg:order-1 w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left mb-8 lg:mb-0 z-10">
        <h1
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-6xl 2xl:text-7xl font-bold mb-2 ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          Hi, I'm{" "}
          <span className="text-violet-600 dark:text-violet-400">Amjad</span>
          <img
            src={wave}
            alt="wave"
            className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 inline-block ml-2"
          />
        </h1>

        <div className="h-16 sm:h-20 lg:h-24 xl:h-28 mb-4 flex items-center">
          <h2
            className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-3xl 2xl:text-4xl font-semibold ${
              darkMode ? "text-violet-700" : "text-blueColor"
            }`}
          >
            <span className={`me-2 ${darkMode ? "text-white" : "text-black"}`}>
              I'm a
            </span>
            {typedText}
            <span className="animate-pulse text-violet-700">|</span>
          </h2>
        </div>

        <p
          className={`text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl mb-8 max-w-lg lg:max-w-xl xl:max-w-2xl ${
            darkMode ? "text-gray-200" : "text-gray-700"
          }`}
        >
          Full Stack Developer specializing in MERN stack with 2+ years of
          experience building web applications.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a href="mailto:amjadalijamali41@gmail.com" className="inline-block">
            <motion.button
              whileHover={{ scale: 1.1, y: -4 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="px-8 py-3 lg:px-10 lg:py-4 xl:px-12 xl:py-3 text-lg lg:text-xl xl:text-md font-semibold bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-[0_4px_20px_rgba(124,58,237,0.6)] transition-all duration-300"
            >
              Contact Me
            </motion.button>
          </a>
        </div>
      </div>

      {/* Image */}
      <div className="flex-1 order-1 lg:order-2 w-full lg:w-1/2 flex justify-center z-10">
        <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-80 xl:h-80">
          <img
            src={picture}
            alt="Amjad Ali"
            className={`w-full h-full rounded-full object-cover border-4 ${
              darkMode ? "border-violet-500" : "border-violet-300"
            } shadow-[0_0_20px_#7c3aed]`}
            loading="lazy"
          />
          <div
            className={`absolute inset-0 rounded-full border-4 ${
              darkMode ? "border-violet-300" : "border-violet-700"
            } animate-ping opacity-20`}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;