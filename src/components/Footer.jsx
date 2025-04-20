import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub'; 
import { useSelector } from 'react-redux'; 
import { Link } from 'react-router-dom';
import worldGif from '../assets/world.gif'; 
import { motion } from 'framer-motion';

const Footer = () => {
    const darkMode = useSelector((state) => state.theme.darkMode);
    
    return (
        <footer className={`${darkMode ? 'bg-customColor' : 'bg-gray-100'} py-8 shadow-lg`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    {/* World GIF Animation */}
                    <div className="mb-8 lg:mb-0 lg:mr-12 flex-shrink-0">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="relative"
                        >
                            <img 
                                src={worldGif} 
                                alt="Rotating World" 
                                className="w-40 h-40 sm:w-72 sm:h-72 md:w-56 md:h-56 object-contain"
                            />
                            <div className={`absolute inset-0 rounded-full border-4 ${darkMode ? 'border-blue-400' : 'border-blue-600'} opacity-30 animate-pulse`}></div>
                        </motion.div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                        <div className="flex flex-col items-center lg:items-start">
                            <h2 className={`text-3xl md:text-4xl font-bold mb-6 text-center lg:text-left ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                                Let's Connect Worldwide!
                            </h2>
                            
                            <ul className="space-y-4 w-full max-w-md">
                                <li className="flex items-center">
                                    <EmailIcon className={`mr-3 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                                    <Link
                                        to="mailto:amjadalijamali41@gmail.com"
                                        className={`text-lg hover:underline ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'}`}
                                    >
                                        amjadalijamali41@gmail.com
                                    </Link>
                                </li>
                                <li className="flex items-center">
                                    <LinkedInIcon className={`mr-3 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                                    <Link
                                        to="https://www.linkedin.com/in/amjad-ali-271430253"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`text-lg hover:underline ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'}`}
                                    >
                                        LinkedIn Profile
                                    </Link>
                                </li>
                                <li className="flex items-center">
                                    <GitHubIcon className={`mr-3 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                                    <Link
                                        to="https://github.com/Amjadjamali32"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`text-lg hover:underline ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'}`}
                                    >
                                        GitHub Profile
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className={`mt-12 pt-6 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'} text-center`}>
                    <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        &copy; {new Date().getFullYear()} <span className={`font-bold ${darkMode ? 'text-white' : 'text-black'}`}>Amjad Ali</span>. All rights reserved
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;