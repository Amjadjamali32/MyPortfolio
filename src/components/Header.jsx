import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';   
import { Link } from 'react-router-dom';           
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../app/features/themeSlice.js';  
import IconButton from '@mui/material/IconButton';
import { Brightness4, Brightness7 } from '@mui/icons-material'; 

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    const darkMode = useSelector((state) => state.theme.darkMode);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleThemeToggle = () => {
        dispatch(toggleTheme());
    };

    const linkTextColor = darkMode ? "text-white" : "text-black";

    return (
        <nav className={`md:flex fixed top-0 w-full z-50 ${darkMode ? 'bg-gray-900' : 'bg-white'} shadow-md`}>
            <div className="max-w-screen-xl flex items-center justify-between md:justify-start mx-auto p-2">
                <Link to="/" className={`text-2xl md:text-4xl lg:text-4xl font-bold ${linkTextColor} md:my-2 md:mr-auto md:me-36 lg:-ms-44 xl:-ms-64`}>Portfolio</Link>
                <button 
                    type="button" 
                    className="md:hidden p-2 rounded focus:outline-none" 
                    onClick={toggleMenu}
                    aria-expanded={isOpen}
                >
                    {isOpen ? (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    )}
                </button>
            </div>

            <ul className={`flex-col md:flex md:flex-row md:items-center p-2 font-semibold text-start ${isOpen ? 'flex' : 'hidden'} bg-blue-800 bg-opacity-50 md:bg-transparent md:me-24`}>
                <li>
                    <ScrollLink 
                        to="about"           
                        smooth={true}       
                        duration={500}    
                        className={`block py-1 px-3 md:px-6 rounded hover:bg-purple-400 cursor-pointer md:hover:bg-transparent hover:opacity-70 ${linkTextColor}`}
                    >
                        About
                    </ScrollLink>
                </li>
                <li>
                    <ScrollLink 
                        to="projects" 
                        smooth={true} 
                        duration={500} 
                        className={`block py-1 px-3 rounded md:px-6 hover:bg-purple-400 md:hover:bg-transparent cursor-pointer hover:opacity-70 ${linkTextColor}`}
                    >
                        Projects
                    </ScrollLink>
                </li>
                <li>
                    <ScrollLink 
                        to="skills" 
                        smooth={true} 
                        duration={500} 
                        className={`block py-1 px-3 rounded md:px-6 hover:bg-purple-400 cursor-pointer md:hover:bg-transparent hover:opacity-70 ${linkTextColor}`}
                    >
                        Skills
                    </ScrollLink>
                </li>
                <li>
                    <ScrollLink 
                        to="contact" 
                        smooth={true} 
                        duration={500} 
                        className={`block py-1 px-3 md:px-6 rounded hover:bg-purple-400 cursor-pointer md:hover:bg-transparent hover:opacity-70 ${linkTextColor}`}
                    >
                        Contact
                    </ScrollLink>
                </li>
                <li>
                    <IconButton onClick={handleThemeToggle} color="inherit">
                        {darkMode ? <Brightness7 /> : <Brightness4 />}
                    </IconButton>
                </li>
            </ul>
        </nav>
    );
};

export default Header;
