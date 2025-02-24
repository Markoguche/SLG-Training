import { FaX, FaGithub } from "react-icons/fa6";


export default function Contact() {
    return (
      <section href="contact" className="text-center py-16 bg-white">
        <h3 className="text-gray-500 text-sm">Get In Touch</h3>
        <h2 className="text-2xl font-bold">Contact Me</h2>
  
        <div className="mt-6 flex justify-center items-center gap-4">
          <a href="mailto:example@email.com" className="flex items-center gap-2 px-6 py-3 border rounded-full shadow-sm hover:shadow transition">
            <span>📧</span> Oguchemark9@gmail.com
          </a>
          <a href="https://x.com/_otmark?s=21" className="flex items-center gap-2 px-6 py-3 border rounded-full shadow-sm hover:shadow transition">
            <span><FaX/></span> Twitter
          </a>
          <a href="https://github.com/oguchemark" target="_blank" rel="noopener noreferrer" className="text-black hover:text-navy-800 transition-colors text-2xl">
            <FaGithub />
          </a>
        </div>
  
        <nav className="mt-16 text-sm text-gray-600">
          <ul className="flex justify-center gap-6">
            <li><a href="#contact" className="hover:underline">Contact</a></li>
            <li><a href="#experience" className="hover:underline">Experience</a></li>
            <li><a href="#projects" className="hover:underline">Projects</a></li>
            <li><a href="#about" className="hover:underline">About</a></li>
          </ul>
        </nav>
  
        <p className="mt-4 text-xs text-gray-500">Copyright © 2025 Oguche Mark. All Rights Reserved </p>
      </section>
    );
  }
  