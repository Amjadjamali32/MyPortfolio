import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const darkMode = useSelector((state) => state.theme.darkMode);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const hoverEffect = {
    scale: 1.02,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 10,
    },
  };

  const onSubmit = () => {
    // Netlify will handle the submission automatically
    toast.success("Message sent successfully!", {
      position: "top-right",
      autoClose: 5000,
      theme: darkMode ? "dark" : "light",
    });
    reset();
  };

  return (
    <>
      <section
        id="contact"
        className={`py-16 ${darkMode ? "bg-customColor" : "bg-gray-50"}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2
              className={`text-4xl font-bold mb-4 ${
                darkMode ? "text-white" : "text-gray-800"
              }`}
            >
              Contact Me
            </h2>
            <p
              className={`text-lg ${
                darkMode ? "text-gray-300" : "text-gray-600"
              } max-w-2xl mx-auto`}
            >
              Have a project in mind or want to collaborate? Feel free to reach
              out!
            </p>
            <div
              className={`w-20 h-1 mx-auto mt-6 ${
                darkMode ? "bg-blue-600" : "bg-blue-500"
              }`}
            ></div>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            {/* Contact Form */}
            <motion.div
              variants={item}
              whileHover={hoverEffect}
              className={`rounded-xl p-8 ${
                darkMode ? "bg-containerColor" : "bg-white"
              } shadow-lg`}
            >
              <h3
                className={`text-2xl font-bold mb-6 ${
                  darkMode ? "text-white" : "text-gray-800"
                }`}
              >
                Send a Message
              </h3>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6"
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-recaptcha="true"
                netlify-honeypot="bot-field"
                netlify="true"
              >
                <input type="hidden" name="form-name" value="contact" />

                {/* Honeypot field */}
                <div className="hidden" style={{ display: "none" }}>
                  <label>
                    Don't fill this out if you're human:{" "}
                    <input name="bot-field" />
                  </label>
                </div>

                <div>
                  <label
                    htmlFor="username"
                    className={`block text-sm font-medium mb-2 ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="user_name"
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.user_name
                        ? "border-red-500"
                        : darkMode
                        ? "border-gray-700"
                        : "border-gray-300"
                    } ${
                      darkMode
                        ? "bg-gray-700 text-white"
                        : "bg-white text-gray-800"
                    } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                    placeholder="John Doe"
                    {...register("user_name", { required: "Name is required" })}
                  />
                  {errors.user_name && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.user_name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="user_mail"
                    className={`block text-sm font-medium mb-2 ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="user_mail"
                    name="email"
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.email
                        ? "border-red-500"
                        : darkMode
                        ? "border-gray-700"
                        : "border-gray-300"
                    } ${
                      darkMode
                        ? "bg-gray-700 text-white"
                        : "bg-white text-gray-800"
                    } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                    placeholder="john@example.com"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Invalid email format",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="msg"
                    className={`block text-sm font-medium mb-2 ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Your Message
                  </label>
                  <textarea
                    id="msg"
                    name="user_message"
                    rows="5"
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.user_message
                        ? "border-red-500"
                        : darkMode
                        ? "border-gray-700"
                        : "border-gray-300"
                    } ${
                      darkMode
                        ? "bg-gray-700 text-white"
                        : "bg-white text-gray-800"
                    } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                    placeholder="Hello, I'd like to talk about..."
                    {...register("user_message", {
                      required: "Message is required",
                    })}
                  />
                  {errors.user_message && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.user_message.message}
                    </p>
                  )}
                </div>

                {/* Netlify reCAPTCHA */}
                <div data-netlify-recaptcha="true"></div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-colors ${
                    darkMode
                      ? "bg-blue-600 hover:bg-blue-700"
                      : "bg-blue-500 hover:bg-blue-600"
                  } ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </motion.button>
              </form>
            </motion.div>

            {/* Map and Contact Info */}
            <motion.div variants={item} className="space-y-8">
              <div
                className={`rounded-xl overflow-hidden shadow-lg ${
                  darkMode ? "bg-containerColor" : "bg-white"
                } h-96`}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114514.27623939038!2d68.32046526759844!3d26.243121100326572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394a4cb563f028e5%3A0x93d25e06c0ec002d!2sNawabshah%2C%20Shaheed%20Benazirabad%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1728494921646!5m2!1sen!2s"
                  className="w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div
                className={`rounded-xl p-8 ${
                  darkMode ? "bg-containerColor" : "bg-white"
                } shadow-lg`}
              >
                <h3
                  className={`text-2xl font-bold mb-6 ${
                    darkMode ? "text-white" : "text-gray-800"
                  }`}
                >
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div
                      className={`p-2 rounded-full mr-4 ${
                        darkMode ? "bg-blue-900/30" : "bg-blue-100"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-blue-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4
                        className={`text-sm font-medium ${
                          darkMode ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        Email
                      </h4>
                      <a
                        href="mailto:amjadalijamali41@gmail.com"
                        className={`text-xs ${
                          darkMode
                            ? "text-blue-400 hover:text-blue-300"
                            : "text-blue-600 hover:text-blue-500"
                        }`}
                      >
                        amjadalijamali41@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div
                      className={`p-2 rounded-full mr-4 ${
                        darkMode ? "bg-blue-900/30" : "bg-blue-100"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-blue-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4
                        className={`text-sm font-medium ${
                          darkMode ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        Phone
                      </h4>
                      <a
                        href="tel:+923262600358"
                        className={`text-xs ${
                          darkMode
                            ? "text-blue-400 hover:text-blue-300"
                            : "text-blue-600 hover:text-blue-500"
                        }`}
                      >
                        +92 3262600358
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div
                      className={`p-2 rounded-full mr-4 ${
                        darkMode ? "bg-blue-900/30" : "bg-blue-100"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-blue-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4
                        className={`text-sm font-medium ${
                          darkMode ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        Location
                      </h4>
                      <p
                        className={`text-xs ${
                          darkMode ? "text-gray-200" : "text-gray-700"
                        }`}
                      >
                        Nawabshah, Shaheed Benazirabad, Sindh, Pakistan
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <Footer />
      <ToastContainer
        position="top-right"
        theme={darkMode ? "dark" : "light"}
      />
    </>
  );
};

export default Contact;
