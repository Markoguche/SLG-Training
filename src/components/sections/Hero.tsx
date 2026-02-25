import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-anim", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.2,
      });
      gsap.to(".float-shape", {
        y: "random(-20, 20)",
        x: "random(-20, 20)",
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: { amount: 2, from: "random" },
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
        <section 
      ref={containerRef} 
      
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-50 dark:bg-slate-900" 
    >  
      {/* 1. BACKGROUND IMAGE LAYER */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')" 
        }}
      ></div>

      {/* 2. OVERLAY LAYER (Darkens the image so text pops) */}
      <div className="absolute inset-0 bg-slate-900/85 dark:bg-slate-900/90"></div>

      {/* 3. FLOATING SHAPES (Kept for effect) */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-slg-green/30 rounded-full blur-3xl float-shape mix-blend-overlay"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-slg-gold/30 rounded-full blur-3xl float-shape mix-blend-overlay"></div>

      {/* 4. CONTENT (Must have relative z-index to sit above image) */}
      <div className="container mx-auto px-6 text-center z-10 relative">
        <div className="hero-anim inline-block px-4 py-1 mb-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
          <span className="text-slg-gold font-bold text-sm tracking-widest uppercase drop-shadow-md">
            ServeLead Global Training
          </span>
        </div>

        {/* Changed text color to white for contrast against dark image */}
        <h1 className="hero-anim text-5xl md:text-7xl font-bold leading-tight mb-6 text-white">
          Develop Leaders. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-slg-gold to-yellow-200">
            Strengthen Governance.
          </span>{" "}
          <br />
          Drive Results.
        </h1>

        {/* Changed text color to slate-200 */}
        <p className="hero-anim text-xl md:text-2xl text-slate-200 mb-10 max-w-3xl mx-auto font-light drop-shadow-sm">
          High-impact leadership and governance programs designed to build capacity and drive measurable results.
        </p>

        <div className="hero-anim flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#programs" className="group bg-slg-green text-white px-8 py-4 rounded-full font-semibold hover:bg-slg-darkGreen transition-all shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2 border border-slg-green">
            Enroll Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#contact" className="px-8 py-4 rounded-full font-semibold border-2 border-white text-white hover:bg-white hover:text-slate-900 transition-all hover:scale-105">
            Request Corporate Training
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white drop-shadow-md">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}