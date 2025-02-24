import Navbar from "../components/Navbar";
import bg2 from "../assets/Images/bg2.jpg";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";
const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black">
      
      <Navbar/>
      
      <div className="flex flex-col items-center text-center mt-12">
        <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-gray-300">
          <img src={bg2} alt="Oguche Mark" className="w-full h-full object-cover" />
        </div>
        <p className="text-gray-500 mt-4">Hello, I'm</p>
        <h1 className="text-4xl font-bold mt-1">Oguche Mark</h1>
        <h2 className="text-2xl text-gray-600 mt-2">Frontend Developer</h2>

        
        <div className="mt-6 flex gap-4">
        <button
          className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-blue-900 hover:text-white transition"
          onClick={() => window.open('/Oguche_Mark_CV.pdf', '_blank')}
        >
          Download CV
        </button>

          
        </div>  
      </div>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default Home;
