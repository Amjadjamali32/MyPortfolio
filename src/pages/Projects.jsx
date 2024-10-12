import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'; 
import { projectsData } from '../projects.js'; 

const Projects = () => {
  const [projects, setProjects] = useState([]);

  const darkMode = useSelector((state) => state.theme.darkMode);

  useEffect(() => {
    setProjects(projectsData); 
  }, []);

  return (
    <section id='projects'>
      <div className="px-4 my-2">
        <h2 className={`text-3xl font-bold mb-6 text-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>PROJECTS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`rounded-lg overflow-hidden shadow-lg transition-colors duration-300 ${darkMode ? 'bg-gradient-to-r from-gray-800 to-gray-900' : 'bg-white border border-gray-200'}`}
            >
              <img src={project.imageSrc} alt={project.title} className="w-full p-2 rounded-sm my-2 object-cover mx-auto" />
              <div className={`p-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="mb-4">{project.description}</p>
                <div className="flex flex-wrap mb-4">
                  {project.skills.map((skill, index) => (
                    <span 
                      key={index} 
                      className={`text-xs rounded-full px-2 py-1 mr-2 mb-2 font-semibold ${darkMode ? 'bg-blue-900 text-white' : 'bg-blue-200 text-gray-800'}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-sm hover:underline px-4 rounded-full font-semibold py-1 ${darkMode ? 'bg-blue-800 text-white' : 'bg-blue-500 text-white'}`}
                  >
                    Demo
                  </a>
                  <a
                    href={project.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-sm hover:underline px-4 rounded-full font-semibold py-1 ${darkMode ? 'bg-blue-800 text-white' : 'bg-blue-500 text-white'}`}
                  >
                    Source
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
