"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Skills, { skillCategories } from "@/components/Skills";
import ExperienceProjects from "@/components/ExperienceProjects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import TypewriterLine from "@/components/TypewriterLine";
import ScrollType from "@/components/ScrollType";

// QUALITY GATE: Lazy load 3D to prevent blocking initial paint.
// The placeholder div ensures Zero Cumulative Layout Shift (CLS).
function HeroLoader() {
  return (
    <div className="hero-loader" role="status" aria-label="Loading 3D scene">
      <span className="loader-orbit" aria-hidden="true">
        <span className="loader-core" />
      </span>
      <span>Preparing the scene</span>
    </div>
  );
}

const Hero3D = dynamic(() => import("@/components/Hero3D"), {
  ssr: false,
  loading: HeroLoader,
});

const disciplines = ["Android Development", "Software Quality", "AI & n8n Automation", "Web Development"];
const tickerItems = skillCategories.flatMap((category) => category.items);

export default function Home() {
  return (
    <main className="relative">
      <Navbar />

      <section id="home" className="hero-section">
        <div className="hero-scene" aria-hidden="true">
          <Hero3D />
        </div>
        <div className="hero-copy relative z-10">
          <motion.p
            className="section-kicker mb-7 flex items-center gap-3"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
          >
            <span className="inline-block h-2 w-2 rounded-full bg-[#ff795f] shadow-[0_0_14px_#ff795f]" />
            Software engineering student · Rawalpindi, PK
          </motion.p>
          <h1 className="hero-title mb-7">
            <span className="hero-title-line"><ScrollType text="Muhammad" /></span>
            <span className="hero-title-line"><ScrollType text="Saad" /></span>
            <span className="hero-title-line hero-title-accent"><ScrollType text="Iqbal." /></span>
          </h1>
          <motion.p
            className="hero-description mb-8"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.68 }}
          >
            Building thoughtful mobile and web experiences, with quality built into every detail.
          </motion.p>
          <TypewriterLine />
          <motion.div
            className="flex flex-wrap items-center gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.82 }}
          >
            <a
              href="#projects"
              className="inline-flex min-h-12 items-center gap-3 rounded-full bg-[#a5f3e8] px-6 font-semibold text-[#10120f] transition-transform hover:-translate-y-1 focus-visible:ring-[#a5f3e8]"
            >
              Explore my work <span aria-hidden="true">↗</span>
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center rounded-full border border-white/20 px-6 font-medium text-white transition-colors hover:border-white/60 focus-visible:ring-[#a5f3e8]"
            >
              Get in touch
            </a>
          </motion.div>
          <motion.div
            className="mt-10 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[10px] uppercase text-white/55"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.05 }}
          >
            {disciplines.map((discipline) => <span key={discipline}>{discipline}</span>)}
          </motion.div>
        </div>
      </section>

      <div className="ticker" aria-label="Continuous list of technical skills and tools">
        <div className="ticker-track" aria-hidden="true">
          {[0, 1].map((copy) => (
            <div className="ticker-group" key={copy}>
              {tickerItems.map((item, index) => (
                <span className="flex items-center gap-7" key={`${copy}-${item}-${index}`}>
                  {item}<span className="ticker-dot">✳</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <Skills />
      <ExperienceProjects />
      <Education />
      <Contact />
    </main>
  );
}
