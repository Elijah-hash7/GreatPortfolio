import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ArrowRight, Code2, PenTool, LayoutTemplate, Smartphone, Mail, ArrowUpRight, Linkedin } from "lucide-react";
import { SiGithub, SiDribbble, SiX } from "react-icons/si";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  
  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  // Apply dark mode and noise class to root on mount
  useEffect(() => {
    document.documentElement.classList.add("dark");
    if (!document.getElementById("noise-overlay")) {
      const noise = document.createElement("div");
      noise.id = "noise-overlay";
      noise.className = "bg-noise";
      document.body.appendChild(noise);
    }
  }, []);

  return (
    <div className="bg-background text-foreground min-h-screen selection:bg-accent selection:text-foreground">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 md:px-12 py-6 mix-blend-difference text-white">
        <div className="font-serif text-2xl tracking-tighter italic">Great Pixel</div>
        <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide uppercase">
          <a href="#about" className="hover:text-accent transition-colors duration-300">About</a>
          <a href="#expertise" className="hover:text-accent transition-colors duration-300">Expertise</a>
          <a href="#work" className="hover:text-accent transition-colors duration-300">Work</a>
          <a href="#contact" className="hover:text-accent transition-colors duration-300">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center px-6 md:px-12 overflow-hidden">
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="z-10 mt-20 md:mt-0"
        >
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-accent uppercase tracking-[0.2em] text-xs md:text-sm font-semibold mb-6"
          >
            Creative Developer & Designer
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.2, 0.65, 0.3, 0.9] }}
            className="text-[12vw] leading-[0.85] font-serif tracking-tighter"
          >
            Engineering <br/>
            <span className="italic text-muted-foreground/60">Digital</span> <br/>
            Elegance.
          </motion.h1>
        </motion.div>
        
        {/* Abstract decorative element in hero */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 0.8, ease: "easeOut" }}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-3/4 bg-accent/5 blur-[120px] rounded-full pointer-events-none"
        />
      </section>

      {/* About Section */}
      <section id="about" className="py-32 md:py-48 px-6 md:px-12 bg-card">
        <div className="max-w-4xl">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-serif italic mb-12">The philosophy.</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-xl md:text-3xl leading-relaxed font-light text-foreground/80">
              I believe the best digital experiences exist at the exact intersection of rigorous engineering and commanding visual design. Too often, great code is hidden behind uninspired interfaces, or beautiful design is compromised by poor performance. I build where those two disciplines meet.
            </p>
          </Reveal>
          <Reveal delay={0.4} className="mt-12 flex items-center gap-4 text-accent font-medium uppercase tracking-widest text-sm">
            <span>Read full bio</span>
            <ArrowRight size={16} />
          </Reveal>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-32 md:py-48 px-6 md:px-12">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 md:mb-32 gap-8">
            <h2 className="text-5xl md:text-7xl font-serif tracking-tighter">Dual <span className="italic text-muted-foreground">Discipline</span></h2>
            <p className="max-w-sm text-muted-foreground">A specialized skill set combining structural engineering with aesthetic intuition.</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
          <Reveal>
            <div className="group border-t border-border pt-8">
              <div className="flex justify-between items-start mb-8">
                <h3 className="text-3xl font-serif">Development</h3>
                <Code2 className="text-accent opacity-50 group-hover:opacity-100 transition-opacity" size={32} />
              </div>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Production-ready, highly performant web applications built with modern frameworks. Focus on architecture, animation physics, and accessible semantic HTML.
              </p>
              <ul className="space-y-4 font-mono text-sm tracking-tight">
                <li className="flex justify-between border-b border-border/50 pb-2"><span>React / Next.js</span> <span>95%</span></li>
                <li className="flex justify-between border-b border-border/50 pb-2"><span>TypeScript</span> <span>90%</span></li>
                <li className="flex justify-between border-b border-border/50 pb-2"><span>WebGL / Three.js</span> <span>75%</span></li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="group border-t border-border pt-8">
              <div className="flex justify-between items-start mb-8">
                <h3 className="text-3xl font-serif">Design</h3>
                <PenTool className="text-accent opacity-50 group-hover:opacity-100 transition-opacity" size={32} />
              </div>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Brand identity, typography systems, and user interface design. Crafting visual languages that communicate value and establish premium positioning.
              </p>
              <ul className="space-y-4 font-mono text-sm tracking-tight">
                <li className="flex justify-between border-b border-border/50 pb-2"><span>UI / UX</span> <span>95%</span></li>
                <li className="flex justify-between border-b border-border/50 pb-2"><span>Typography</span> <span>90%</span></li>
                <li className="flex justify-between border-b border-border/50 pb-2"><span>Brand Identity</span> <span>85%</span></li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Selected Work */}
      <section id="work" className="py-32 md:py-48 px-6 md:px-12 bg-card">
        <Reveal>
          <h2 className="text-5xl md:text-7xl font-serif tracking-tighter mb-20 md:mb-32">Selected <span className="italic text-muted-foreground">Work</span></h2>
        </Reveal>

        <div className="space-y-32 md:space-y-48">
          {[
            {
              title: "Aura Fashion",
              category: "E-Commerce / Development",
              img: "/images/project-1.png",
              desc: "A high-performance headless Shopify storefront for a luxury avant-garde fashion brand, featuring smooth page transitions and a brutalist dark-mode aesthetic."
            },
            {
              title: "Vault Finance",
              category: "Fintech / Product Design",
              img: "/images/project-2.png",
              desc: "Complete overhaul of a cryptocurrency trading dashboard. Focus on complex data visualization and reducing cognitive load through clean typography."
            },
            {
              title: "Origin Roasters",
              category: "Brand Identity",
              img: "/images/project-3.png",
              desc: "Visual identity and packaging system for a boutique coffee roaster. Earthy, sophisticated tones reflecting the organic nature of the product."
            },
            {
              title: "Generative Series 01",
              category: "Creative Coding / WebGL",
              img: "/images/project-4.png",
              desc: "An exploration of mathematical beauty through code. Interactive 3D abstract shapes reacting to user cursor and scroll velocity."
            }
          ].map((project, i) => (
            <Reveal key={i}>
              <div className={`flex flex-col ${i % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-24`}>
                <div className="w-full md:w-3/5">
                  <div className="relative overflow-hidden group">
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="aspect-[4/3] bg-muted w-full overflow-hidden"
                    >
                      <img 
                        src={project.img} 
                        alt={project.title} 
                        className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-background/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none flex items-center justify-center">
                      <div className="bg-background text-foreground px-6 py-3 rounded-full font-medium tracking-wide uppercase text-xs flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        View Project <ArrowUpRight size={14} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-2/5">
                  <p className="font-mono text-accent text-xs uppercase tracking-widest mb-4">{project.category}</p>
                  <h3 className="text-4xl md:text-5xl font-serif mb-6">{project.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">{project.desc}</p>
                  <button className="flex items-center gap-3 text-sm font-medium uppercase tracking-widest hover:text-accent transition-colors">
                    Case Study <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="py-32 md:py-48 px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Reveal>
            <h2 className="text-6xl md:text-9xl font-serif tracking-tighter italic mb-8">Let's Talk.</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-xl md:text-2xl text-muted-foreground mb-16">
              Currently accepting new projects for Q3. If you have an idea in mind or just want to say hi, feel free to reach out.
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <a href="mailto:hello@greatpixel.design" className="inline-block text-3xl md:text-5xl font-light hover:text-accent transition-colors border-b border-border hover:border-accent pb-2">
              hello@greatpixel.design
            </a>
          </Reveal>
          
          <Reveal delay={0.6}>
            <div className="flex justify-center gap-8 mt-24">
              <a href="#" className="p-4 border border-border rounded-full hover:bg-accent hover:border-accent hover:text-background transition-all duration-300">
                <SiGithub size={24} />
              </a>
              <a href="#" className="p-4 border border-border rounded-full hover:bg-accent hover:border-accent hover:text-background transition-all duration-300">
                <SiDribbble size={24} />
              </a>
              <a href="#" className="p-4 border border-border rounded-full hover:bg-accent hover:border-accent hover:text-background transition-all duration-300">
                <Linkedin size={24} />
              </a>
              <a href="#" className="p-4 border border-border rounded-full hover:bg-accent hover:border-accent hover:text-background transition-all duration-300">
                <SiX size={24} />
              </a>
            </div>
          </Reveal>
        </div>
        
        <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center text-xs font-mono text-muted-foreground uppercase tracking-widest border-t border-border pt-6 mt-32">
          <span>© {new Date().getFullYear()} Great Pixel</span>
          <span>Crafted with intention</span>
        </div>
      </footer>
    </div>
  );
}
