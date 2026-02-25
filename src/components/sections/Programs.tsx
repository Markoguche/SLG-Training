import { useScrollReveal } from "../useScrollReveal";
import { Briefcase, ArrowRight, CheckCircle } from "lucide-react";

const programs = [
  {
    title: "Leadership Excellence Program",
    desc: "Transform mid-level managers into visionary leaders capable of steering teams through ambiguity.",
    outcomes: ["Strategic Decision Making", "Emotional Intelligence", "Change Management"],
    duration: "5 Days",
    format: "In-Person / Virtual"
  },
  {
    title: "Corporate Governance Masterclass",
    desc: "Comprehensive training on board responsibilities, ethics, and regulatory compliance.",
    outcomes: ["Risk Management", "Board Dynamics", "Ethical Leadership"],
    duration: "3 Days",
    format: "Executive Retreat"
  },
  {
    title: "Executive Strategy & Innovation",
    desc: "Equip C-Suite executives with frameworks to disrupt markets and foster innovation.",
    outcomes: ["Blue Ocean Strategy", "Design Thinking", "Digital Transformation"],
    duration: "4 Days",
    format: "Residential"
  },
  {
    title: "Public Sector Leadership",
    desc: "Tailored for government officials to enhance policy implementation.",
    outcomes: ["Policy Analysis", "Public Finance", "Stakeholder Engagement"],
    duration: "Module Based",
    format: "Hybrid"
  },
  {
    title: "Board & Compliance Training",
    desc: "Ensuring directors understand fiduciary duties and regulatory landscapes.",
    outcomes: ["Fiduciary Duties", "Audit Committees", "ESG Integration"],
    duration: "2 Days",
    format: "Workshop"
  },
  {
    title: "Emerging Leaders Program",
    desc: "High-potential talent development to build the next generation of leaders.",
    outcomes: ["Self-Awareness", "Communication", "Project Management"],
    duration: "6 Weeks",
    format: "Weekly Sessions"
  },
];

export default function Programs() {
  const ref = useScrollReveal();

  return (
    <section id="programs" ref={ref} className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-up">
          <span className="text-slg-green dark:text-slg-gold font-bold tracking-widest uppercase text-sm">Our Expertise</span>
          <h2 className="text-4xl font-bold mt-2 text-slate-900 dark:text-white">Core Training Programs</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((prog, idx) => (
            <div key={idx} className="reveal-up bg-white dark:bg-slate-950 rounded-xl p-8 shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-xl hover:border-slg-gold/30 transition-all duration-300 flex flex-col h-full">
              <div className="w-12 h-12 bg-slate-50 dark:bg-slate-900 rounded-lg flex items-center justify-center text-slg-green dark:text-slg-gold mb-6">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{prog.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-grow">{prog.desc}</p>
              
              <ul className="space-y-2 mb-6">
                {prog.outcomes.map((out, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle className="w-4 h-4 text-slg-green dark:text-slg-gold flex-shrink-0" /> {out}
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center text-xs font-bold uppercase tracking-wider text-slate-500">
                <span>{prog.duration}</span>
                <span className="text-slg-green dark:text-slg-gold">{prog.format}</span>
              </div>
              
              <a href="#contact" className="mt-6 inline-flex items-center text-sm font-semibold text-slate-900 dark:text-white hover:text-slg-green dark:hover:text-slg-gold transition-colors">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}