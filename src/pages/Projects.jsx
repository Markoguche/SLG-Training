"use client"

import { motion } from "framer-motion"
import img1 from "../assets/Images/img1.png"
import img2 from "../assets/Images/img2.png"
import img3 from "../assets/Images/img3.png"
import img4 from "../assets/Images/img4.png"
import img5 from "../assets/Images/img5.png"
import img6 from "../assets/Images/img6.png"

const freelancingProjects = [
  {
    id: 1,
    title: "Ndi Igbo Na Tees Valley",
    image: img4,
    liveDemo: "https://www.ndiigbonateesvalley.com/",
  },
  {
    id: 2,
    title: "Borodigital Dynamics",
    image: img5,
    liveDemo: "https://borodigitaldynamics.com",
  },
]

const personalProjects = [
  {
    id: 1,
    title: "Project One",
    image: img2,
    github: "https://github.com/Markoguche/Gym-Template-1",
    liveDemo: "https://gym-template-1.vercel.app/",
  },
  {
    id: 2,
    title: "Project Two",
    image: img1,
    github: "https://github.com/Markoguche/crypto-green",
    liveDemo: "https://crypto-green-ruddy.vercel.app/",
  },
  {
    id: 3,
    title: "Project Three",
    image: img3,
    github: "https://github.com/Markoguche/Web3-Templates/tree/main",
    liveDemo: "https://web3-template1.vercel.app/",
  },
  {
    id: 4,
    title: "Project Four",
    image: img6,
    github: "https://github.com/Markoguche/transport-shuttle",
    liveDemo: "https://transport-shuttle.vercel.app/",
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2 },
  }),
}

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 text-center">
      {/* Freelancing Projects */}
      <h3 className="text-gray-500 text-sm uppercase">Recent</h3>
      <h2 className="text-3xl font-bold mb-8">Freelancing Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16 place-items-center">
        {freelancingProjects.map(({ id, title, image, liveDemo }, i) => (
          <motion.div
            key={id}
            className="border rounded-lg p-6 shadow-md bg-white max-w-sm"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
          >
            <img src={image} alt={title} className="w-full rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <div className="flex justify-center gap-4 mt-4">
              <a
                href={liveDemo}
                className="border rounded-lg px-4 py-2 text-sm font-medium hover:bg-blue-900 hover:text-white transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Divider */}
      <div className="relative flex items-center justify-center my-12">
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-gray-400 to-transparent animate-pulse"></div>
        <span className="absolute bg-white px-4 text-gray-600 text-sm uppercase font-semibold">
          Next Section
        </span>
      </div>

      {/* Personal Projects */}
      <h3 className="text-gray-500 text-sm uppercase">Browse My Recent</h3>
      <h2 className="text-3xl font-bold mb-8">Personal Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {personalProjects.map(({ id, title, image, github, liveDemo }, i) => (
          <motion.div
            key={id}
            className="border rounded-lg p-6 shadow-md bg-white max-w-sm mx-auto"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
          >
            <img src={image} alt={title} className="w-full rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <div className="flex justify-center gap-4 mt-4">
              {github && (
                <a
                  href={github}
                  className="border rounded-lg px-4 py-2 text-sm font-medium hover:bg-blue-900 hover:text-white transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              )}
              {liveDemo && (
                <a
                  href={liveDemo}
                  className="border rounded-lg px-4 py-2 text-sm font-medium hover:bg-blue-900 hover:text-white transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects
