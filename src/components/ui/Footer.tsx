import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 text-sm border-t border-slate-900 px-auto">
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <a href="#" className="text-2xl font-bold text-white mb-6 block">SLG Training</a>
          <p className="mb-6 leading-relaxed">
            Empowering leaders and organizations through structured, results-driven training programs.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slg-gold transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="hover:text-slg-gold transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="hover:text-slg-gold transition-colors"><Facebook className="w-5 h-5" /></a>
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider">Programs</h4>
          <ul className="space-y-3">
            <li><a href="#" className="hover:text-white transition-colors">Leadership Excellence</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Corporate Governance</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Public Sector</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Executive Retreats</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider">Company</h4>
          <ul className="space-y-3">
            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Our Faculty</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>

        
      </div>
      <div className="container mx-auto px-6 mt-12 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>&copy; {new Date().getFullYear()} SLG Training. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white text-xs">Privacy Policy</a>
          <a href="#" className="hover:text-white text-xs">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}