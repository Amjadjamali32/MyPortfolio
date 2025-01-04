import picture from "../assets/picture.png";
import { useSelector } from 'react-redux'; 

const Hero = () => {
    const darkMode = useSelector((state) => state.theme.darkMode);

    return (
        <section className={`md:ms-20 lg:ms-20 flex flex-col sm:flex-row items-center justify-between max-w-screen-xl mx-auto p-2 md:p-4 xl:ms-16`}>
            <div className="lg:ms-48 flex-1 order-1 sm:order-2 md:order-2 p-4 md:mx-auto"> 
                <img 
                    src={picture}
                    alt="Amjad Ali" 
                    className="w-full h-auto mx-auto rounded-lg object-cover sm:w-6/12 md:w-7/12 lg:w-7/12 image-move" 
                />
            </div>
            <div className={`flex-1 order-2 md:order-1 sm:order-1 p-4 md:justify-center ${darkMode ? 'text-white' : 'text-black'}`}> 
                <h2 className="text-3xl sm:text-3xl font-bold mb-4 text-center md:text-left lg:mb-8"> 
                    Hi, I'm Amjad Ali
                </h2>
                <p className="mb-4 text-center md:text-left text-base md:text-lg"> 
                    I am a full stack developer with 2 years of experience in web development. I also specialize in MERN Technology. Reach out if you'd like to learn more!
                </p>
                <div className='flex justify-center md:justify-start'> 
                    <a href="mailto:amjadalijamali41@gmail.com" className="inline-block">
                        <button className="px-6 py-2 font-bold bg-gradient-to-r from-indigo-500 text-white rounded-full hover:bg-blue-600 transform hover:scale-110 transition-transform duration-300 ease-in-out lg:mt-8 lg:px-20">
                            Contact Me
                        </button>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
