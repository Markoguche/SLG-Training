import { useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  { name: "Dr. A. J. Okonkwo", role: "CEO, Pan-African Logistics", text: "SLG Training transformed our leadership approach. The governance module was eye-opening and immediately applicable." },
  { name: "Sarah E. Mbeki", role: "HR Director, TechCorp", text: "The ROI was evident within months. Our middle management team is now more aligned and strategically focused." },
  { name: "Hon. B. Aminu", role: "Permanent Secretary", text: "A training program that understands the nuances of the public sector while pushing for global best practices." },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-slg-gold font-bold tracking-widest uppercase text-sm">Success Stories</span>
          <h2 className="text-4xl font-bold mt-2 text-slate-900 dark:text-white">What Leaders Say</h2>
        </div>
        
        <div className="max-w-4xl mx-auto relative bg-slate-50 dark:bg-slate-900 p-8 md:p-12 rounded-2xl shadow-sm">
          <Quote className="w-10 h-10 text-slg-gold opacity-50 mb-6" />
          
          <div className="relative h-32 md:h-24 overflow-hidden">
             {testimonials.map((t, i) => (
                <p 
                    key={i} 
                    className={`absolute inset-0 transition-opacity duration-700 text-xl md:text-2xl italic text-slate-700 dark:text-slate-300 font-light leading-relaxed ${
                        i === active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                >
                    "{t.text}"
                </p>
             ))}
          </div>

          <div className="mt-8 flex items-center justify-between border-t border-slate-200 dark:border-slate-800 pt-6">
            <div>
                <div className="font-bold text-slate-900 dark:text-white">{testimonials[active].name}</div>
                <div className="text-sm text-slg-green uppercase tracking-wide">{testimonials[active].role}</div>
            </div>
            <div className="flex gap-2">
                <button onClick={() => setActive((active - 1 + testimonials.length) % testimonials.length)} className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
                    <ChevronLeft className="w-5 h-5" />
                </button>
                <button onClick={() => setActive((active + 1) % testimonials.length)} className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}