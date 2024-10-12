import React from 'react';
import { useSelector } from 'react-redux'; 
import frontendImage from '../assets/images.png'; 
import backendImage from '../assets/server.png'; 
import wordpressImage from '../assets/wordpress.png'; 
import image from "../assets/about.gif";

const About = () => {
    const darkMode = useSelector((state) => state.theme.darkMode);

    return (
        <section id="about" className={`max-w-screen-lg mx-auto md:m-auto p-4 my-2 sm:mx-2 sm:rounded-md ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
            <div className='sm:grid sm:grid-cols-2 gap-3'> 
                <div>
                    <h2 className="font-bold text-3xl mb-6 text-center">ABOUT</h2>
                    <div className="mb-6 text-center">
                        <img src={image} alt="About" className="w-full sm:w-full h-auto object-contain md:h-full lg:w-6/12 md:mx-auto" />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gradient-to-r from-purple-600 to-blue-500' : 'bg-gradient-to-r from-purple-300 to-blue-300'} gradient-bg cursor-default flex flex-row items-center sm:w-full sm:flex-row`}>
                        <img src={frontendImage} alt="Frontend Developer" className="w-1/6 object-contain mb-2 rounded sm:w-1/6 sm:mx-2 mx-4 lg:w-1/12 lg:mx-4" />
                        <div className='flex flex-col sm:flex sm:flex-col sm:text-center'>
                            <h3 className="text-left text-xl font-semibold sm:text-md sm:text-left">Frontend Developer</h3>
                            <p className="text-left sm:text-left sm:text-sm">I'm a front-end developer with experience in building responsive and optimized sites.</p>
                        </div>
                    </div>
                    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gradient-to-r from-purple-600 to-blue-500' : 'bg-gradient-to-r from-purple-300 to-blue-300'} gradient-bg cursor-default flex flex-row items-center sm:w-full sm:flex-row`}>
                        <img src={backendImage} alt="Backend Developer" className="w-1/6 object-contain mb-2 rounded sm:w-1/6 sm:mx-2 mx-4 lg:w-1/12 lg:mx-4" />
                        <div className='sm:flex sm:flex-col sm:text-center'>
                            <h3 className="text-left text-xl font-semibold sm:text-md sm:text-left">Backend Developer</h3>
                            <p className="text-left sm:text-left sm:text-sm">I have experience developing fast and optimized back-end systems and APIs.</p>
                        </div>
                    </div>
                    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gradient-to-r from-purple-600 to-blue-500' : 'bg-gradient-to-r from-purple-300 to-blue-300'} gradient-bg cursor-default flex flex-row items-center sm:w-full sm:flex-row`}>
                        <img src={wordpressImage} alt="WordPress Developer" className="w-1/6 object-contain mb-2 rounded sm:w-1/6 sm:mx-2 mx-4 lg:w-1/12 lg:mx-4" />
                        <div className='sm:flex sm:flex-col sm:text-center'>
                            <h3 className="text-xl font-semibold text-left sm:text-md sm:text-left">WordPress Developer</h3>
                            <p className="text-left sm:text-left sm:text-sm">I have designed multiple landing pages and portfolio websites using WordPress.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
