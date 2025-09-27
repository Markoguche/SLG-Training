"use client"

import { motion } from "framer-motion"
import { 
  FaX, 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaLocationDot 
} from "react-icons/fa6"

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-black text-white">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h3 className="text-blue-500 text-sm uppercase">Get In Touch</h3>
        <h2 className="text-3xl font-bold">Contact Me</h2>
        <p className="text-gray-400 mt-2 max-w-lg mx-auto">
          Have a project in mind or want to discuss opportunities? I’m open to
          freelance projects and actively seeking full-time roles in innovative
          teams!
        </p>
      </motion.div>

      {/* Contact Grid */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 px-6">
        {/* Email */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gray-900 rounded-lg p-6 flex items-center gap-4 shadow"
        >
          <FaEnvelope className="text-blue-500 text-2xl" />
          <div>
            <h4 className="font-semibold">Email</h4>
            <a
              href="mailto:oguchemark9@gmail.com"
              className="text-gray-300 hover:text-blue-500 transition"
            >
              oguchemark9@gmail.com
            </a>
          </div>
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-gray-900 rounded-lg p-6 flex items-center gap-4 shadow"
        >
          <FaLocationDot className="text-blue-700 text-2xl" />
          <div>
            <h4 className="font-semibold">Location</h4>
            <p className="text-gray-300">Lagos, Nigeria</p>
          </div>
        </motion.div>
      </div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <h4 className="mb-4 text-gray-400 uppercase text-sm">Connect With Me</h4>
        <div className="flex justify-center gap-6">
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="http://linkedin.com/in/mark-oguche9"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 p-4 rounded-full hover:bg-blue-500 hover:text-black transition"
          >
            <FaLinkedin className="text-2xl" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://x.com/_otmark?s=21"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 p-4 rounded-full hover:bg-blue-500 hover:text-black transition"
          >
            <FaX className="text-2xl" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://github.com/oguchemark"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 p-4 rounded-full hover:bg-blue-500 hover:text-black transition"
          >
            <FaGithub className="text-2xl" />
          </motion.a>
        </div>
      </motion.div>

      {/* Footer Nav */}
      <motion.nav
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
        className="mt-16 text-sm text-gray-400"
      >
        <ul className="flex justify-center gap-6">
          <li>
            <a href="#about" className="hover:text-blue-500 transition">
              About
            </a>
          </li>
          <li>
            <a href="#experience" className="hover:text-blue-500 transition">
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-500 transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-500 transition">
              Contact
            </a>
          </li>
        </ul>
      </motion.nav>

      {/* Copyright */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
        className="mt-6 text-xl text-gray-500 text-center"
      >
        Copyright © 2025 Currently available for full-time roles and select freelance projects
      </motion.p>
    </section>
  )
}
