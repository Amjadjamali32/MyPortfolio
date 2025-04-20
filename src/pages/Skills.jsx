import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiRedux,
  SiExpress,
  SiMongodb,
  SiFirebase,
} from "react-icons/si";

// Animation variants
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const Skills = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);

  const skills = [
    {
      title: "React",
      icon: <FaReact className="w-full h-full" />,
      color: "text-blue-500",
    },
    // { title: "Next.js", icon: <SiNextdotjs className="w-full h-full" />, color: "text-black dark:text-white" },
    // { title: "TypeScript", icon: <SiTypescript className="w-full h-full" />, color: "text-blue-600" },
    {
      title: "Node.js",
      icon: <FaNodeJs className="w-full h-full" />,
      color: "text-green-500",
    },
    {
      title: "Express",
      icon: <SiExpress className="w-full h-full" />,
      color: "text-gray-500",
    },
    {
      title: "MongoDB",
      icon: <SiMongodb className="w-full h-full" />,
      color: "text-green-600",
    },
    {
      title: "Firebase",
      icon: <SiFirebase className="w-full h-full" />,
      color: "text-yellow-500",
    },
    {
      title: "HTML5",
      icon: <FaHtml5 className="w-full h-full" />,
      color: "text-orange-500",
    },
    {
      title: "CSS3",
      icon: <FaCss3Alt className="w-full h-full" />,
      color: "text-blue-400",
    },
    {
      title: "JavaScript",
      icon: <FaJs className="w-full h-full" />,
      color: "text-yellow-400",
    },
    {
      title: "Tailwind",
      icon: <SiTailwindcss className="w-full h-full" />,
      color: "text-blue-400",
    },
    {
      title: "Redux",
      icon: <SiRedux className="w-full h-full" />,
      color: "text-purple-500",
    },
    {
      title: "Git",
      icon: <FaGitAlt className="w-full h-full" />,
      color: "text-orange-600",
    },
    {
      title: "GitHub",
      icon: <FaGithub className="w-full h-full" />,
      color: "text-black dark:text-white",
    },
  ];

  return (
    <section
      id="skills"
      className={`py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ${
        darkMode ? "bg-customColor" : "bg-bg-light"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="text-lg text-blueColor mb-2 uppercase">
          Technical Proficiencies
        </p>
        <h2
          className={`text-4xl sm:text-5xl font-extrabold my-4 ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
        >
          Skills.
        </h2>
        <p
          className={`text-lg ${
            darkMode ? "text-gray-300" : "text-gray-600"
          } max-w-2xl mx-auto`}
        >
          Technologies I've been working with recently
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center"
          >
            <div
              className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-3 ${
                darkMode ? "bg-gray-800" : "bg-gray-100"
              } shadow-lg hover:shadow-xl transition-shadow`}
            >
              <div className={`w-12 h-12 ${skill.color}`}>{skill.icon}</div>
            </div>
            <p
              className={`text-lg font-medium ${
                darkMode ? "text-white" : "text-gray-800"
              }`}
            >
              {skill.title}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
