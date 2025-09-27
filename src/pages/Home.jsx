"use client";

import Navbar from "../components/Navbar";
import bg2 from "../assets/Images/bg2.jpg";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";
import { FaX, FaGithub, FaLinkedin } from "react-icons/fa6";
import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper.jsx"; 

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <div className="flex flex-col items-center text-center mt-20 px-4 sm:px-6 lg:px-8">
        {/* Profile Image */}
        <motion.div
          className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-gray-300 shadow-lg"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src={bg2}
            alt="Oguche Mark"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Intro */}
        <motion.p
          className="text-gray-500 mt-6 text-lg sm:text-2xl"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          className="text-3xl sm:text-5xl md:text-6xl pb-4 font-extrabold mt-2 bg-gradient-to-r from-blue-900 via-purple-600 to-blue-900 bg-clip-text text-transparent"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.9 }}
        >
          Oguche Mark
        </motion.h1>

        <motion.h2
          className="text-xl sm:text-3xl md:text-4xl text-gray-700 mt-3 font-medium leading-snug"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.9 }}
        >
          A Frontend Developer with a passion for{" "}
          <br className="hidden sm:block" />
          learning and creating.
        </motion.h2>

        {/* Buttons */}
        <motion.div
          className="mt-8 flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <a
            href="#projects"
            className="bg-white text-black px-6 py-3 rounded-lg border border-black font-semibold shadow-md hover:bg-blue-900 hover:text-white transition duration-300"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="bg-white text-black px-6 py-3 rounded-lg border border-black font-semibold shadow-md hover:bg-blue-900 hover:text-white transition duration-300"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="mt-6 flex justify-center items-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <a
            href="http://linkedin.com/in/mark-oguche9"
            className="text-3xl text-blue-700 hover:scale-110 transition-transform duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/_otmark?s=21"
            className="text-3xl hover:scale-110 transition-transform duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaX />
          </a>
          <a
            href="https://github.com/oguchemark"
            className="text-3xl text-black hover:scale-110 transition-transform duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </motion.div>
      </div>

      {/* Animated Sections */}
     <SectionWrapper id="about">
  <About />
</SectionWrapper>

<SectionWrapper id="experience">
  <Experience />
</SectionWrapper>

<SectionWrapper id="projects">
  <Projects />
</SectionWrapper>

<SectionWrapper id="contact">
  <Contact />
</SectionWrapper>
    </div>
  );
};

export default Home;
