import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub'; 
import { useSelector } from 'react-redux'; 
import { Link } from 'react-router-dom';

const Footer = () => {
    const darkMode = useSelector((state) => state.theme.darkMode);
    
    return (
        <footer className={`${darkMode ? 'bg-gradient-to-r from-indigo-500' : 'bg-light'} py-5 shadow-sm`}>
            <div className="max-w-screen-lg justify-center mx-auto px-4 md:flex md:justify-center sm:justify-center">
                <div className="flex flex-col items-center justify-center mb-4 md:flex-row">
                    <h2 className="text-3xl font-bold my-2 text-center md:mx-10">Feel Free to Reach Out!</h2>
                </div>
                <ul className="flex flex-col md:flex-col md:items-start md:space-y-2 my-3">
                    <li className="flex items-center">
                        <EmailIcon className="mr-2" />
                        <span>
                            <Link
                                to="mailto:amjadalijamali41@gmail.com"
                                className="hover:underline"
                            >
                                amjadalijamali41@gmail.com
                            </Link>
                        </span>
                    </li>
                    <li className="flex items-center">
                        <LinkedInIcon className="mr-2" />
                        <span>
                            <Link
                                to="https://www.linkedin.com/in/amjad-ali-271430253"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                                amjad-ali-271430253
                            </Link>
                        </span>
                    </li>
                    <li className="flex items-center">
                        <GitHubIcon className="mr-2" />
                        <span>
                            <Link
                                to="https://github.com/Amjadjamali32"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                                Amjadjamali32
                            </Link>
                        </span>
                    </li>
                </ul>
            </div>
            <div className="text-center md:my-4">
                <p>&copy; 2024 <span className='font-bold'>Amjad Ali</span>. All rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
