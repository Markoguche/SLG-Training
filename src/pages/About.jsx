"use client";

import { FaCheckCircle, FaAward, FaUserGraduate } from "react-icons/fa";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-white text-black">
      {/* Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="text-gray-500 text-sm uppercase tracking-wider">
          Get To Know
        </h3>
        <h2 className="text-4xl sm:text-5xl font-extrabold mt-2 bg-gradient-to-r from-blue-900 via-purple-600 to-blue-900 bg-clip-text text-transparent">
          About Me
        </h2>
      </motion.div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
        {/* Left Section - Experience + Education */}
        <motion.div
          className="flex flex-col gap-6 w-full max-w-md"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <div className="border-2 border-gray-300 px-6 py-6 rounded-lg text-center shadow-md hover:shadow-xl transition-shadow duration-300">
            <FaAward className="text-3xl text-blue-900 mb-2 mx-auto" />
            <h3 className="font-bold text-lg">Experience</h3>
            <p className="text-gray-600">3 Years</p>
            <p className="text-gray-500">Frontend Development</p>
          </div>

          <div className="border-2 border-gray-300 px-6 py-6 rounded-lg text-center shadow-md hover:shadow-xl transition-shadow duration-300">
            <FaUserGraduate className="text-3xl text-purple-700 mb-2 mx-auto" />
            <h3 className="font-bold text-lg">Education</h3>
            <p className="text-gray-600">B.Sc. Statistics</p>
          </div>
        </motion.div>

        {/* Right Section - About Text + Skills */}
        <motion.div
          className="max-w-2xl text-center lg:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 text-lg sm:text-xl leading-relaxed mb-8">
            As a passionate <span className="font-semibold">Frontend Developer</span>, I
            specialize in crafting responsive, user-friendly, and visually
            engaging web applications. With over{" "}
            <span className="font-semibold">3 years of experience</span>, I’ve
            honed my skills in modern frameworks like React & Next.js,
            delivering seamless user interactions and high-performance
            interfaces.
          </p>

          {/* Skills Grid */}
          <motion.div
            className="border rounded-lg p-6 shadow-md"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4">Tech Stack</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-left">
              {[
                { skill: "HTML", level: "Experienced" },
                { skill: "CSS", level: "Experienced" },
                { skill: "JavaScript", level: "Experienced" },
                { skill: "Tailwind", level: "Experienced" },
                { skill: "React JS", level: "Experienced" },
                { skill: "Next JS", level: "Experienced" },
                { skill: "TypeScript", level: "Experienced" },
                { skill: "Material UI", level: "Experienced" },
                { skill: "Wordpress", level: "Experienced" },
              ].map(({ skill, level }) => (
                <div
                  key={skill}
                  className="flex items-center gap-2 hover:translate-x-1 transition-transform duration-300"
                >
                  <FaCheckCircle className="text-blue-900" />
                  <div>
                    <p className="font-medium">{skill}</p>
                    <p className="text-gray-500 text-sm">{level}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
