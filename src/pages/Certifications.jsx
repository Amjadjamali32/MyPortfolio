import { motion } from "framer-motion";
import { FaGraduationCap, FaCertificate } from "react-icons/fa";
import { useSelector } from "react-redux";

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
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      year: "2022",
      credentialId: "AWS-123456",
    },
    {
      id: 2,
      title: "Google Professional Data Engineer",
      issuer: "Google Cloud",
      year: "2021",
      credentialId: "GCP-789012",
    },
    {
      id: 3,
      title: "Certified Kubernetes Administrator",
      issuer: "Cloud Native Computing Foundation",
      year: "2021",
      credentialId: "CKA-345678",
    },
    {
      id: 4,
      title: "Microsoft Certified: Azure Developer Associate",
      issuer: "Microsoft",
      year: "2020",
      credentialId: "MS-901234",
    },
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
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <p className="text-blueColor text-center uppercase text-xl my-4">
              Continous Learning
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificationsData.map((cert) => (
              <motion.div
                key={cert.id}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className={`${
                  darkMode ? "bg-containerColor" : "bg-white"
                } rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg`}
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-full bg-green-100 dark:bg-green-900 mr-4">
                      <FaCertificate className="text-green-600 dark:text-green-400 text-xl" />
                    </div>
                    <h3
                      className={`text-lg font-bold ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {cert.title}
                    </h3>
                  </div>
                  <div className="space-y-2">
                    <p
                      className={`${
                        darkMode ? "text-blueColor" : "text-blueColor"
                      }`}
                    >
                      <span className="font-medium">Issuer:</span> {cert.issuer}
                    </p>
                    <p
                      className={`${darkMode ? "text-white" : "text-gray-900"}`}
                    >
                      <span className="font-medium">Year:</span> {cert.year}
                    </p>
                    <p
                      className={`${darkMode ? "text-white" : "text-gray-900"}`}
                    >
                      <span className="font-medium">ID:</span>{" "}
                      {cert.credentialId}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default EducationCertifications;
