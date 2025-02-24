import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/Images/logo.png"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full flex justify-between items-center px-6 py-6 text-lg font-medium bg-white shadow-md">
      <img src={logo} alt="logo" className=" w-20 h-20" />

      <div className="hidden md:flex gap-8">
        {["About", "Experience", "Projects", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="hover:text-navy-800 transition-colors"
          >
            {item}
          </a>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col items-center mt-8 py-4 md:hidden">
          {["About", "Experience", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="py-2 text-lg w-full text-center hover:bg-gray-100 transition"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
