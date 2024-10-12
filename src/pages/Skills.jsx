import React from 'react';
import { useSelector } from 'react-redux';

const Skills = ({ skills = [] }) => {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <section id='skills'>
      <div className="p-5 text-center">
        <h2 className={`text-3xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center sm:grid-cols-3">
          {skills.map((skill) => (
            <div key={skill.id || skill.title} className="flex flex-col items-center">
              <div className={`rounded-full ${darkMode ? 'bg-blue-900' : 'bg-blue-200'} px-4 py-3 shadow-md`}>
                <img 
                  src={skill.imageSrc || 'fallback-image-path.png'} 
                  alt={skill.title} 
                  className="w-12 h-12 mb-2" 
                />
              </div>
              <p className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{skill.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
