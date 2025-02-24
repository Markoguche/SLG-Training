import { FaCheckCircle } from "react-icons/fa";

const Experience = () => {
  return (
    <section id="experience" className="py-16 px-6 text-center">
      <h3 className="text-gray-500 text-sm uppercase">Explore My</h3>
      <h2 className="text-3xl font-bold mb-8">Experience</h2>

      <div className="max-w-2xl mx-auto border rounded-lg p-6 shadow-md">
        <h3 className="text-xl font-semibold mb-4">Frontend Development</h3>
        <div className="grid grid-cols-2 gap-4 text-left">
          {[
            { skill: "HTML", level: "Experienced" },
            { skill: "CSS", level: "Experienced" },
            { skill: "JavaScript", level: "Experienced" },
            { skill: "Tailwind", level: "Experienced" },
            { skill: "React JS", level: "Experienced" },
            { skill: "TypeScript", level: "Intermediate" },
            { skill: "Material UI", level: "Intermediate" }
          ].map(({ skill, level }) => (
            <div key={skill} className="flex items-center gap-2">
              <FaCheckCircle className="text-black" />
              <div>
                <p className="font-medium">{skill}</p>
                <p className="text-gray-500 text-sm">{level}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
