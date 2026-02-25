import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const metrics = [
  { label: "Professionals Impacted", value: 103500, suffix: "+" },
  { label: "Trained Beneficiaries", value: 6000, suffix: "+" },
  { label: "Tech Talents Developed", value: 500, suffix: "+" },
  { label: "Training Sessions", value: 75, suffix: "+" },
  { label: "Funds Managed ($)", value: 350000, suffix: "+" },
  { label: "RescueTap Users", value: 3000, suffix: "+" },
];

export default function Metrics() {
  const containerRef = useRef<HTMLDivElement>(null);
  const countersRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      countersRef.current.forEach((counter) => {
        if (!counter) return;
        const target = parseInt(counter.getAttribute("data-target") || "0");
        
        gsap.to(counter, {
          innerText: target,
          duration: 2.5,
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
          onUpdate: function() {
            counter.innerHTML = Math.ceil(this.targets()[0].innerText).toLocaleString();
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="metrics" ref={containerRef} className="py-20 bg-slg-green text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">Our Track Record Speaks</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
          {metrics.map((m, i) => (
            <div key={i} className="p-4">
              <div className="text-4xl md:text-5xl font-bold text-slg-gold mb-2">
                <span ref={(el) => (countersRef.current[i] = el)} data-target={m.value}>
                  0
                </span>
                {m.suffix}
              </div>
              <div className="text-sm md:text-base opacity-90 font-light">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}