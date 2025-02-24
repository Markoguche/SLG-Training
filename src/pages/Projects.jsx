import img1 from "../assets/Images/img1.png"
import img2 from "../assets/Images/img2.png"
import img3 from "../assets/Images/img3.png"
const projects = [
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
      github: "https://github.com/Markoguche/Web3-Template-2",
      liveDemo: "https://web3-template-2.vercel.app/",
    },
    {
      id: 3,
      title: "Project Three",
      image: img3,
      github: "https://github.com/Markoguche/Web3-Templates/tree/main",
      liveDemo: "https://web3-template1-git-main-markos-projects-78935461.vercel.app/",
    },
  ];
  
  const Projects = () => {
    return (
      <section id="projects" className="py-16 px-8 text-center">
        <h3 className="text-gray-500 text-sm uppercase">Browse My Recent</h3>
        <h2 className="text-3xl font-bold mb-8">Personal Projects</h2>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(({ id, title, image, github, liveDemo }) => (
            <div key={id} className="border rounded-lg p-6 shadow-md">
              <img src={image} alt={title} className="w-full rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <div className="flex justify-center gap-4 mt-4">
                <a
                  href={github}
                  className="border rounded-lg px-4 py-2 text-sm font-medium hover:bg-blue-900 hover:text-white transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href={liveDemo}
                  className="border rounded-lg px-4 py-2 text-sm font-medium hover:bg-blue-900 hover:text-white transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Projects;
  

