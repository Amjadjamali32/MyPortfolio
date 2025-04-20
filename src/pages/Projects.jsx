import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { projectsData } from '../projects.js';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const darkMode = useSelector((state) => state.theme.darkMode);

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const hoverEffect = {
    scale: 1.02,
    skewX: -2,
    skewY: -2,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 10
    }
  };

  return (
    <section id='projects' className={`py-12 ${darkMode ? "bg-customColor" : "bg-white"}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className='text-lg md:text-xl text-blue-500 uppercase tracking-wider mb-2'>
            Innovative Creations
          </p>
          <h2 className={`text-3xl md:text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            My Projects
          </h2>
          <div className={`w-20 h-1 mx-auto mt-4 ${darkMode ? 'bg-blue-600' : 'bg-blue-500'}`}></div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={hoverEffect}
              className={`rounded-xl overflow-hidden shadow-xl transition-all duration-300 ${darkMode ? 'bg-gradient-to-br from-gray-800 to-gray-900' : 'bg-white'}`}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.imageSrc} 
                  alt={project.title} 
                  className="w-full h-48 sm:h-56 object-cover transition-transform duration-500 hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-white'}`}>
                    {project.title}
                  </h3>
                </div>
              </div>

              <div className={`p-6 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.skills.map((skill, index) => (
                    <span 
                      key={index} 
                      className={`text-xs rounded-full px-3 py-1 font-medium ${darkMode ? 'bg-blue-900/80 text-blue-100' : 'bg-blue-100 text-blue-800'}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between space-x-3">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 text-center text-sm font-semibold py-2 rounded-lg ${darkMode ? 'bg-blue-700 hover:bg-blue-600 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
                  >
                    Live Demo
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 text-center text-sm font-semibold py-2 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-800'}`}
                  >
                    View Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;