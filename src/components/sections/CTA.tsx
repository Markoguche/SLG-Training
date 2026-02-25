import { Download, Phone } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-900 text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-slg-green to-slate-900 opacity-90"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-slg-gold blur-[120px] opacity-20"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">Build the Leaders Your Organization Needs.</h2>
        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Join the elite cohort of organizations transforming their governance and leadership capabilities with SLG Training.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="bg-slg-gold text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-yellow-500 transition-all flex items-center justify-center gap-2">
                <Download className="w-5 h-5" /> Download Brochure
            </a>
            <a href="#" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-slate-900 transition-all flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" /> Book Strategy Call
            </a>
        </div>
      </div>
    </section>
  );
}