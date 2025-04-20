import { useSelector } from "react-redux";
import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { MdSchool, MdWork, MdBuild, MdLightbulb } from "react-icons/md";
import profileImage from "../assets/myimage.png";
import resumePDF from "../assets/Amjad Ali Resume.pdf";

const About = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <section
      id="about"
      className={`max-w-screen-xl mx-auto p-6 py-6 ${
        darkMode ? "bg-customColor text-white" : "bg-white text-black"
      }`}
    >
      {/* Centered Headings */}
      <div className="text-center mb-12">
        <h2 className="font-normal text-2xl sm:text-xl text-blueColor mb-2 uppercase">Introduction</h2>
        <h2 className="text-4xl sm:text-6xl font-extrabold">Overview.</h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Left Side - Profile Image and Buttons */}
        <div className="w-full lg:w-1/3 flex flex-col items-center">
          {/* Profile Image with Enhanced Shadow */}
          <div
            className={`w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 ${
              darkMode ? "border-purple-500" : "border-blue-500"
            } shadow-xl ${
              darkMode ? "shadow-purple-600/50" : "shadow-blue-500/40"
            } mb-8 hover:scale-105 transition-transform duration-300`}
          >
            <img
              src={profileImage}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col items-center gap-4 w-full">
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <a
                href={resumePDF}
                download="Amjad_Ali_Resume.pdf"
                className={`flex-1 text-center px-6 py-3 rounded-lg font-medium transition-all ${
                  darkMode
                    ? "bg-purple-600 hover:bg-purple-700 text-white"
                    : "bg-blue-500 hover:bg-blue-600 text-white"
                } shadow-md hover:shadow-lg`}
              >
                Resume
              </a>
              <a
                href="https://linkedin.com/in/amjad-ali-271430253"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 text-center px-6 py-3 rounded-lg font-medium transition-all ${
                  darkMode
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "bg-blue-400 hover:bg-blue-500 text-white"
                } shadow-md hover:shadow-lg`}
              >
                <FaLinkedin className="inline mr-2" /> LinkedIn
              </a>
            </div>
            <a
              href="https://github.com/Amjadjamali32"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full text-center px-6 py-3 rounded-lg font-medium transition-all ${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-700 text-white"
                  : "bg-gray-700 hover:bg-gray-600 text-white"
              } shadow-md hover:shadow-lg`}
            >
              <FaGithub className="inline mr-2" /> GitHub
            </a>
          </div>
        </div>

        {/* Right Side - Introduction and Highlights */}
        <div className="w-full lg:w-2/3">
          {/* Introduction */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 text-violet-700">Full-Stack Developer</h3>
            <p className="text-lg leading-relaxed mb-6 text-blueColor">
              I'm a Full-Stack Developer with over 2 years of experience in Web
              Development. Currently pursuing my Bachelor of Science in Computer
              Science at Quaid-e-Awam University of Engineering, Science and
              Technology Nawabshah, I specialize in building reliable, scalable
              websites that make a difference.
            </p>
          </div>

          {/* Highlights with Icons */}
          <div
            className={`rounded-xl p-6 mb-8 ${
              darkMode ? "bg-gray-800/50" : "bg-gray-100"
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Education */}
              <div className="flex items-start gap-4">
                <div
                  className={`p-3 rounded-full ${
                    darkMode
                      ? "bg-purple-600/20 text-purple-400"
                      : "bg-purple-100 text-purple-600"
                  }`}
                >
                  <MdSchool className="text-2xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Education</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    BSc Computer Science at QUEST Nawabshah
                  </p>
                </div>
              </div>

              {/* Experience */}
              <div className="flex items-start gap-4">
                <div
                  className={`p-3 rounded-full ${
                    darkMode
                      ? "bg-blue-600/20 text-blue-400"
                      : "bg-blue-100 text-blue-600"
                  }`}
                >
                  <MdWork className="text-2xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Experience</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    2+ years in full-stack web development
                  </p>
                </div>
              </div>

              {/* Expertise */}
              <div className="flex items-start gap-4">
                <div
                  className={`p-3 rounded-full ${
                    darkMode
                      ? "bg-green-600/20 text-green-400"
                      : "bg-green-100 text-green-600"
                  }`}
                >
                  <MdBuild className="text-2xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Expertise</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Full-stack development & cloud solutions
                  </p>
                </div>
              </div>

              {/* Approach */}
              <div className="flex items-start gap-4">
                <div
                  className={`p-3 rounded-full ${
                    darkMode
                      ? "bg-yellow-600/20 text-yellow-400"
                      : "bg-yellow-100 text-yellow-600"
                  }`}
                >
                  <MdLightbulb className="text-2xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Approach</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Automating workflows & optimizing systems
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;