import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../app/features/themeSlice.js";
import IconButton from "@mui/material/IconButton";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import logo from "../Public/code.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  const linkTextColor = darkMode ? "text-blueColor" : "text-black";
  const navBackground = isScrolled
    ? darkMode
      ? "bg-customColor"
      : "bg-white"
    : "bg-customColor";

  // For mobile menu background when open
  const mobileMenuBg = isScrolled
    ? darkMode
      ? "bg-gray-900"
      : "bg-white"
    : darkMode
    ? "bg-gray-900 bg-opacity-80"
    : "bg-white bg-opacity-80";

  return (
    <nav
      className={`md:flex fixed top-0 w-full z-50 ${navBackground} transition-colors duration-300`}
    >
      <div className="max-w-screen-xl flex items-center justify-between md:justify-start mx-auto p-2">
        <Link
          to="/"
          className={`text-2xl md:text-4xl lg:text-4xl font-bold ${linkTextColor} md:my-2 md:mr-auto md:me-36 lg:-ms-44`}
        >
          <div className="flex flex-row items-center">
            <img src={logo} alt="logo" className="mx-2 w-[50px]" />
            <p
              className="text-3xl italic font-bold font-[cursive] text-violet-500"
              style={{
                fontFamily: "'Great Vibes', cursive",
                textShadow: "2px 2px 8px rgba(139, 92, 246, 0.8)",
              }}
            >
              Amjad Ali
            </p>
          </div>
        </Link>
        <button
          type="button"
          className="md:hidden p-2 rounded focus:outline-none"
          onClick={toggleMenu}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      <ul
        className={`flex-col md:flex md:flex-row  md:items-center p-2 font-semibold text-start ${
          isOpen ? "flex" : "hidden"
        } ${isOpen ? mobileMenuBg : "md:bg-transparent"} md:me-4`}
      >
        <li>
          <ScrollLink
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className={`block py-1 px-3 rounded md:px-6 hover:bg-purple-400 md:hover:bg-transparent cursor-pointer hover:opacity-85 font-normal ${linkTextColor} ${
              darkMode ? "dark-active-class" : "light-active-class"
            }`}
          >
            About
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="education"
            spy={true}
            smooth={true}
            duration={500}
            className={`block py-1 px-3 rounded md:px-6 hover:bg-purple-400 md:hover:bg-transparent cursor-pointer hover:opacity-85 font-normal ${linkTextColor} ${
              darkMode ? "dark-active-class" : "light-active-class"
            }`}
          >
            Education
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="certifications"
            spy={true}
            smooth={true}
            duration={500}
            className={`block py-1 px-3 rounded md:px-6 hover:bg-purple-400 md:hover:bg-transparent cursor-pointer hover:opacity-85 font-normal ${linkTextColor} ${
              darkMode ? "dark-active-class" : "light-active-class"
            }`}
          >
            Certifications
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="skills"
            spy={true}
            smooth={true}
            duration={500}
            className={`block py-1 px-3 rounded md:px-6 hover:bg-purple-400 md:hover:bg-transparent cursor-pointer hover:opacity-85 font-normal ${linkTextColor} ${
              darkMode ? "dark-active-class" : "light-active-class"
            }`}
          >
            Skills
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            className={`block py-1 px-3 rounded md:px-6 hover:bg-purple-400 md:hover:bg-transparent cursor-pointer hover:opacity-85 font-normal ${linkTextColor} ${
              darkMode ? "dark-active-class" : "light-active-class"
            }`}
          >
            Projects
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className={`block py-1 px-3 rounded md:px-6 hover:bg-purple-400 md:hover:bg-transparent cursor-pointer hover:opacity-85 font-normal ${linkTextColor} ${
              darkMode ? "dark-active-class" : "light-active-class"
            }`}
          >
            Contact
          </ScrollLink>
        </li>
        <li className="text-yellow-500">
          <IconButton onClick={handleThemeToggle} color="inherit">
            {darkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
