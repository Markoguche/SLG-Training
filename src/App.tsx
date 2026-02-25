import { Helmet, HelmetProvider } from "react-helmet-async"; // <--- 1. Add HelmetProvider to import
import Navbar from "./components/ui/Navbar";
import Footer from "./components/ui/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Metrics from "./components/sections/Metrics";
import Programs from "./components/sections/Programs";
import Testimonials from "./components/sections/Testimonials";
import FAQ from "./components/sections/FAQ";
import CTA from "./components/sections/CTA";
import { ThemeProvider } from "./components/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      {/* 2. Wrap the app content with HelmetProvider */}
      <HelmetProvider>
        
        <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
          <Helmet>
            <title>SLG Training | Leadership & Professional Development</title>
            <meta name="description" content="SLG Training delivers high-impact leadership, governance, and professional development programs designed to build capacity and drive measurable results." />
            <meta name="keywords" content="SLG Training, Leadership Training, Professional Development, Governance Training" />
            
            {/* Open Graph */}
            <meta property="og:title" content="SLG Training" />
            <meta property="og:description" content="Empowering leaders and organizations through structured, results-driven training programs." />
            <meta property="og:type" content="website" />

            {/* Schema Markup */}
            <script type="application/ld+json">
              {`
                {
                  "@context": "https://schema.org",
                  "@type": "EducationalOrganization",
                  "name": "SLG Training",
                  "url": "https://www.slgtraining.com",
                  "description": "SLG Training delivers high-impact leadership, governance, and professional development programs."
                }
              `}
            </script>
          </Helmet>

          <Navbar />
          <main className="flex-grow">
            <Hero />
            <About />
            <Metrics />
            <Programs />
            
            {/* Why Choose Section */}
            <section className="py-20 bg-white dark:bg-slate-950 border-y border-slate-100 dark:border-slate-900">
              <div className="container mx-auto px-6 text-center">
                  <h2 className="text-3xl font-bold mb-12 text-slate-900 dark:text-white">Why Partner With SLG?</h2>
                  <div className="grid md:grid-cols-3 gap-8">
                      {[
                          { title: "Measurable ROI", desc: "Focus on outcomes, not just attendance." },
                          { title: "Global Standards", desc: "Content resonating locally, competing globally." },
                          { title: "Expert Practitioners", desc: "Learn from active industry leaders." }
                      ].map((item, i) => (
                          <div key={i} className="p-6 bg-slate-50 dark:bg-slate-900 rounded-lg">
                              <h3 className="text-xl font-bold text-slg-green dark:text-slg-gold mb-2">{item.title}</h3>
                              <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
                          </div>
                      ))}
                  </div>
              </div>
            </section>

            <Testimonials />
            <FAQ />
            <CTA />
          </main>
          <Footer />
        </div>
      </HelmetProvider>
    </ThemeProvider>
  );
}

export default App;