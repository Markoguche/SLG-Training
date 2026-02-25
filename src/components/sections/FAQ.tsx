import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "What makes SLG Training different?", a: "We combine academic rigor with practical, real-world application. Our focus is on measurable behavioral change and ROI." },
  { q: "Who should attend leadership training?", a: "C-Suite executives, mid-level managers, public sector officials, and emerging leaders." },
  { q: "Do you offer corporate packages?", a: "Yes, we specialize in bespoke corporate training solutions tailored to your strategic goals." },
  { q: "Are programs customized?", a: "Absolutely. We conduct a needs assessment to ensure content and case studies are industry-relevant." },
  { q: "How long are the training sessions?", a: "Duration varies from 2-day intensive workshops to 6-week modular programs." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <span className="text-slg-green dark:text-slg-gold font-bold tracking-widest uppercase text-sm">FAQ</span>
          <h2 className="text-4xl font-bold mt-2 text-slate-900 dark:text-white">Frequently Asked Questions</h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((item, i) => (
            <div key={i} className="bg-white dark:bg-slate-950 rounded-lg shadow-sm overflow-hidden">
              <button 
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-semibold text-lg text-slate-800 dark:text-slate-200">{item.q}</span>
                <span className={`transform transition-transform duration-300 text-slg-green ${openIndex === i ? 'rotate-180' : ''}`}>
                    <ChevronDown />
                </span>
              </button>
              <div className={`px-6 overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-40 pb-6' : 'max-h-0'}`}>
                <p className="text-slate-600 dark:text-slate-400">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}