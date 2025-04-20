import { motion } from "framer-motion";
import { FaGraduationCap, FaCertificate } from "react-icons/fa";
import { useSelector } from "react-redux";
import GoogleLogo from "../assets/google.png";
import MetaLogo from "../assets/meta.png";

const EducationCertifications = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);

  // Education data
  const educationData = [
    {
      id: 1,
      degree: "B.E in Software Engineering",
      institution: "QUEST Nawabshah",
      year: "2021 - 2025",
      description:
        "Aspiring Software Engineer with a strong academic background, leadership experience, and a passion for technology and innovation.",
    },
    {
      id: 2,
      degree: "Intermediate",
      institution: "G.H.S.S Mehar Ali Jamali",
      year: "2019 - 2021",
      description:
        "Completed higher secondary education with a strong interest in computer science and analytical thinking.",
    },
    {
      id: 3,
      degree: "Matriculation ",
      institution: "G.B.H.S Hassan Jamali",
      year: "2017 - 2019",
      description:
        "Strong academic foundation with a focus on tech and leadership from an early stage.",
    },
  ];

  // Certifications data
  const certificationsData = [
    {
      id: 1,
      title: "Google AI Essentials",
      issuer: "Google",
      year: "2024",
      credentialId: "OS4NRI5094XT",
      icon: <img src={GoogleLogo} alt="Google" className="w-7 h-7" />,
      desc: "This is my AI Essentials certificate from Google, which I earned in 2024. It covers the fundamentals of AI and its applications.",
    },
    {
      id: 2,
      title: "HTML and CSS in depth",
      issuer: "Meta",
      year: "2023",
      credentialId: "FFRYB4UG9R29",
      icon: <img src={MetaLogo} alt="Meta" className="w-7 h-7" />,
      desc: "This is my HTML and CSS in depth certificate from Meta, which I earned in 2023. It covers advanced topics in HTML and CSS.",
    },
    {
      id: 4,
      title: "Google UX Design Professional Certificate",
      issuer: "Google",
      year: "2024",
      credentialId: "BBGP5IMIITE6",
      icon: <img src={GoogleLogo} alt="Google" className="w-7 h-7" />,
      desc: "This is my Google UX Design Professional Certificate, which I earned in 2024. It covers the principles of UX design.",
    },
    {
      id: 3,
      title: "Programming With JavaScript",
      issuer: "Meta",
      year: "2023",
      credentialId: "YY8KRK89RE84",
      icon: <img src={MetaLogo} alt="Meta" className="w-7 h-7" />,
      desc: "This is my Programming With JavaScript certificate from Meta, which I earned in 2023. It covers the fundamentals of JavaScript programming.",
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div
      className={`min-h-screen py-16 px-4 sm:px-6 lg:px-8 ${
        darkMode ? "bg-customColor" : "bg-light"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Education Section */}
        <motion.section
          id="education"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-20"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <p className="text-blueColor uppercase my-4 text-xl sm:text-xl">
              What I have Studied so far
            </p>
            <h2
              className={`text-4xl font-extrabold ${
                darkMode ? "text-white" : "text-gray-900"
              } mb-4`}
            >
              <FaGraduationCap className="inline-block mr-3 text-blue-600 dark:text-blue-400" />
              Education.
            </h2>
            <p
              className={`text-xl ${darkMode ? "text-white" : "text-gray-600"}`}
            >
              My academic journey and qualifications
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {educationData.map((edu) => (
              <motion.div
                key={edu.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className={`rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl 8 ${
                  darkMode ? "bg-containerColor" : "bg-light"
                }`}
              >
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3
                      className={`text-2xl font-bold ${
                        darkMode ? "text-white" : "text-black"
                      }`}
                    >
                      {edu.degree}
                    </h3>
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium px-3 py-1 rounded-full">
                      {edu.year}
                    </span>
                  </div>
                  <h4 className="text-xl text-blue-600 dark:text-blue-400 mb-3">
                    {edu.institution}
                  </h4>
                  <p
                    className={`${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    } text-base`}
                  >
                    {edu.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Certifications Section */}
        <motion.section
          id="certifications"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="py-16 overflow-hidden"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <p className="text-blueColor text-center uppercase text-xl my-4">
              Continuous Learning
            </p>
            <h2
              className={`text-4xl font-extrabold ${
                darkMode ? "text-white" : "text-gray-900"
              } mb-4`}
            >
              <FaCertificate className="inline-block mr-3 text-green-600 dark:text-green-400" />
              Certifications
            </h2>
            <p
              className={` ${
                darkMode ? "text-white" : "text-gray-600"
              } text-xl`}
            >
              Professional certifications I've earned
            </p>
          </motion.div>

          <div className="relative h-[400px] w-full max-w-7xl mx-auto">
            {/* Background gradient */}
            <div className="absolute inset-0 overflow-hidden">
              <div
                className={`absolute inset-y-0 left-0 w-32 z-10 ${
                  darkMode
                    ? "bg-gradient-to-r from-gray-900 via-gray-900/70 to-transparent"
                    : "bg-gradient-to-r from-white via-white/70 to-transparent"
                }`}
              ></div>
              <div
                className={`absolute inset-y-0 right-0 w-32 z-10 ${
                  darkMode
                    ? "bg-gradient-to-l from-gray-900 via-gray-900/70 to-transparent"
                    : "bg-gradient-to-l from-white via-white/70 to-transparent"
                }`}
              ></div>
            </div>

            {/* Carousel track */}
            <motion.div
              className="absolute top-0 left-0 flex h-full gap-8"
              animate={{
                x: ["0%", "-100%"],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...certificationsData, ...certificationsData].map(
                (cert, index) => (
                  <motion.div
                    key={`${cert.id}-${index}`}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className={`flex-shrink-0 w-80 h-full ${
                      darkMode ? "bg-containerColor" : "bg-white"
                    } rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl`}
                  >
                    <div className="h-full flex flex-col p-6">
                      <div className="flex items-center mb-4">
                        <div
                          className={`p-3 rounded-full mr-4 ${
                            cert.issuer === "Google"
                              ? "bg-blue-100 dark:bg-blue-900"
                              : "bg-blue-100 dark:bg-blue-800"
                          }`}
                        >
                          {cert.icon}
                        </div>
                        <h3
                          className={`text-lg font-bold ${
                            darkMode ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {cert.title}
                        </h3>
                      </div>
                      <div className="flex-grow space-y-3">
                        <p
                          className={
                            darkMode ? "text-blueColor" : "text-blueColor"
                          }
                        >
                          <span className="font-medium">Issuer:</span>{" "}
                          {cert.issuer}
                        </p>
                        <p
                          className={darkMode ? "text-white" : "text-gray-900"}
                        >
                          <span className="font-medium">Year:</span> {cert.year}
                        </p>
                        <p
                          className={darkMode ? "text-white" : "text-gray-900"}
                        >
                          <span className="font-medium">ID:</span>{" "}
                          {cert.credentialId}
                        </p>
                        <p
                          className={darkMode ? "text-white" : "text-gray-900"}
                        >
                          <span className="font-medium"></span>{" "}
                          {cert.desc}
                        </p>
                      </div>
                      <div className="mt-4">
                        <button
                          className={`px-4 py-2 rounded-lg ${
                            darkMode
                              ? "bg-green-800 hover:bg-green-700 text-white"
                              : "bg-green-100 hover:bg-green-200 text-green-800"
                          } transition-colors`}
                        >
                          View Credential
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )
              )}
            </motion.div>
          </div>

          {/* Navigation dots (optional) */}
          <div className="flex justify-center mt-8 gap-2">
            {certificationsData.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  darkMode ? "bg-gray-600" : "bg-gray-300"
                }`}
                aria-label={`Go to certification ${index + 1}`}
              />
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default EducationCertifications;
