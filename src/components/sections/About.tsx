import { useScrollReveal } from "../useScrollReveal";
import { Globe, Users, Award } from "lucide-react";

export default function About() {
  const ref = useScrollReveal();

  return (
    <section id="about" ref={ref} className="py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 reveal-up relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-slg-gold/20 rounded-tl-3xl" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-slg-green/20 rounded-br-3xl" />
            <div className="relative rounded-xl overflow-hidden shadow-2xl aspect-[4/3]">
              {/* Replaced Next.js Image with standard img tag */}
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                alt="SLG Training Session"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="lg:w-1/2 reveal-up">
            <span className="text-slg-gold font-bold tracking-widest uppercase text-sm mb-2 block">Who We Are</span>
            <h2 className="text-4xl font-bold mb-6 text-slate-900 dark:text-white">Building Capacity for a Global Future</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-6">
              SLG Training delivers high-impact leadership, governance, and professional development programs designed to build capacity and drive measurable results. Rooted in African values but globally aligned.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mt-8">
              {[
                { icon: <Globe />, label: "Global Reach", val: "5+ Continents" },
                { icon: <Users />, label: "Experts", val: "50+ Facilitators" },
                { icon: <Award />, label: "Years Impact", val: "10+ Years" },
              ].map((stat, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="text-slg-green dark:text-slg-gold bg-slate-50 dark:bg-slate-900 p-3 rounded-lg">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-xl font-bold text-slate-900 dark:text-white">{stat.val}</div>
                    <div className="text-sm text-slate-500">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}