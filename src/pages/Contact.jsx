import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Footer from '../components/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [recaptchaValue, setRecaptchaValue] = useState('');

  const onSubmit = async (data) => {
    if (!recaptchaValue) {
      toast.error('Please complete the reCAPTCHA!', {
        position: 'top-right',
        autoClose: 5000,
        theme: 'dark',
      });
      return;
    }

    try {
      const response = await axios.post('/api/contact', {
        ...data,
        'g-recaptcha-response': recaptchaValue,
      });
      if (response.status === 200) {
        toast.success('Successfully Submitted!', {
          position: 'top-right',
          autoClose: 5000,
          theme: 'dark',
        });
        reset();
      } else {
        toast.error('Failed to Submit!', {
          position: 'top-right',
          autoClose: 5000,
          theme: 'dark',
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to Submit!', {
        position: 'top-right',
        autoClose: 5000,
        theme: 'dark',
      });
    }
  };

  const darkMode = useSelector((state) => state.theme.darkMode);

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };

  return (
    <>
      <section id="contact" className={`py-8 ${darkMode ? 'bg-dark' : 'bg-light'} mb-4`}>
        <h2 className="text-center font-bold text-3xl sm:mb-7 md:mb-7">CONTACT</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 sm:mb-10 md:mb-12">
          <div
            className={`p-6 rounded-lg ${
              darkMode ? 'bg-dark md:shadow-md' : 'bg-white md:shadow-lg'
            } flex flex-col justify-center col-span-1 md:col-span-2`}
          >
            <h2
              className={`text-3xl text-center font-extrabold my-6 ${
                darkMode ? 'text-white' : 'text-gray-800'
              }`}
            >
              Get in touch &darr;
            </h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
              method="POST"
              name="contact-form"
              data-netlify="true"
              netlify-honeypot="bot-field"
              data-netlify-recaptcha="true"
            >
              <input type="hidden" name="bot-field" />
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className={`block text-sm font-medium ${
                    darkMode ? 'text-gray-200' : 'text-gray-800'
                  }`}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  id="username"
                  className={`bg-gray-900 border ${
                    errors.user_name ? 'border-red-500' : 'border-gray-600'
                  } text-gray-100 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-3 mt-1 ${
                    darkMode ? 'bg-gray-900' : 'bg-white text-gray-800'
                  }`}
                  placeholder="Amjad Ali"
                  {...register('user_name', {
                    required: 'Name is required!',
                  })}
                />
                {errors.user_name && (
                  <p className="text-red-400 mt-1 text-sm">{errors.user_name.message}</p>
                )}
              </div>
              <div className="my-4">
                <label
                  htmlFor="user_mail"
                  className={`block text-sm font-medium ${
                    darkMode ? 'text-gray-200' : 'text-gray-800'
                  }`}
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="user_mail"
                  name="email"
                  {...register('email', {
                    required: 'Email is required!',
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: 'Invalid email format',
                    },
                  })}
                  className={`bg-gray-900 border ${
                    errors.email ? 'border-red-500' : 'border-gray-600'
                  } text-gray-100 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-3 mt-1 ${
                    darkMode ? 'bg-gray-900' : 'bg-white text-gray-800'
                  }`}
                  placeholder="amjadalijamali41@gmail.com"
                />
                {errors.email && (
                  <p className="text-red-400 mt-1 text-sm">{errors.email.message}</p>
                )}
              </div>
              <div className="my-4">
                <label
                  htmlFor="msg"
                  className={`block text-sm font-medium ${
                    darkMode ? 'text-gray-200' : 'text-gray-800'
                  }`}
                >
                  Your Message
                </label>
                <textarea
                  name="user_message"
                  id="msg"
                  {...register('user_message', {
                    required: 'Message is required!',
                  })}
                  className={`bg-gray-900 border ${
                    errors.user_message ? 'border-red-500' : 'border-gray-600'
                  } text-gray-100 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-3 mt-1 ${
                    darkMode ? 'bg-gray-900' : 'bg-white text-gray-800'
                  }`}
                  placeholder="Write your message..."
                />
                {errors.user_message && (
                  <p className="text-red-400 mt-1 text-sm">{errors.user_message.message}</p>
                )}
              </div>
              {/* reCAPTCHA */}
              <div
                className="g-recaptcha"
                data-sitekey="your-site-key"
                data-callback={handleRecaptchaChange}
              ></div>
              <button
                type="submit"
                className={`text-white bg-blue-800 hover:opacity-80 focus:ring-4 focus:ring-blue-500 font-semibold rounded-md w-full py-3 mt-4 transition-colors ${
                  darkMode ? 'bg-blue-800' : 'bg-blue-600'
                }`}
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Map */}
          <div className="mx-2 h-full col-span-1 md:col-span-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114514.27623939038!2d68.32046526759844!3d26.243121100326572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394a4cb563f028e5%3A0x93d25e06c0ec002d!2sNawabshah%2C%20Shaheed%20Benazirabad%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1728494921646!5m2!1sen!2s"
              className={`w-full h-full rounded-lg md:rounded-sm ${
                darkMode ? 'shadow-lg' : 'shadow-lg'
              }`}
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default Contact;
