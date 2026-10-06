"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import ScrollType from "@/components/ScrollType";

type ProjectCategory = "Android" | "AI & Automation" | "Web";

type Project = {
  number: string;
  title: string;
  category: ProjectCategory;
  eyebrow: string;
  description: string;
  highlights: string[];
  stack: string[];
};

const projects: Project[] = [
  {
    number: "01",
    title: "Perkss Business App",
    category: "Android",
    eyebrow: "Live product · Samarsol",
    description: "Contributing to a live Perkss business product across modules, production fixes, and new feature requirements.",
    highlights: ["Currency configuration", "External sales tracking", "ANR investigation", "Bug fixes", "New feature requirements"],
    stack: ["Java", "XML", "SQLite", "PostgreSQL", "Firebase"],
  },
  {
    number: "02",
    title: "Perkss Kiosk",
    category: "Android",
    eyebrow: "Perkss product · Samarsol",
    description: "Kiosk product work within the Samarsol Perkss suite, including layouts adapted across different variations.",
    highlights: ["Kiosk product development", "Layouts for different variations"],
    stack: ["Java", "XML"],
  },
  {
    number: "03",
    title: "Perkss Customer App Flavors",
    category: "Android",
    eyebrow: "Live Play Store app · Samarsol",
    description: "Customer app flavors for the Perkss suite, including a live Play Store app and its release assets.",
    highlights: ["Customer app flavors", "Live Play Store app", "Complete listing assets created for Play Store requirements"],
    stack: [],
  },
  {
    number: "04",
    title: "AgriSmart Mobile App",
    category: "Android",
    eyebrow: "Agriculture · AI-assisted",
    description: "A field-focused app for locating farmland and exploring crop disease guidance, treatment, and prevention.",
    highlights: ["Field locations", "Crop disease guidance", "Cure and prevention"],
    stack: ["Java", "XML", "SQLite", "PostgreSQL", "Firebase"],
  },
  {
    number: "05",
    title: "Attendance Management System",
    category: "Android",
    eyebrow: "Attendance · Reporting",
    description: "Attendance workflows for classes, staff, and administrators with record management and downloadable reports.",
    highlights: ["QR management", "Facial recognition", "Attendance view and CRUD", "PDF generation and download"],
    stack: ["Java", "XML"],
  },
  {
    number: "06",
    title: "Mini Banking App",
    category: "Android",
    eyebrow: "Mobile banking · UI/UX",
    description: "A mini banking app shaped around a clear mobile experience, considered UI/UX, and a consistent Android stack.",
    highlights: ["Mobile banking flows", "UI/UX design", "Consistent implementation"],
    stack: ["Java", "XML", "SQLite"],
  },
  {
    number: "07",
    title: "Single AI Agent App",
    category: "AI & Automation",
    eyebrow: "Standalone AI project",
    description: "A separate single-agent AI application project.",
    highlights: ["Single AI agent app"],
    stack: ["AI agent"],
  },
  {
    number: "08",
    title: "NovaMind AI",
    category: "AI & Automation",
    eyebrow: "AI assistant",
    description: "Your intelligent assistant for ideas, answers, creativity, and productivity.",
    highlights: ["Idea generation", "Answers and assistance", "Creative productivity"],
    stack: ["AI agent", "Conversational assistant"],
  },
  {
    number: "09",
    title: "n8n Chatbot Workflows",
    category: "AI & Automation",
    eyebrow: "Workflow automation · OpenAI",
    description: "Automated chatbot workflows for outreach and social channels, plus retrieval-augmented chatbots for different purposes.",
    highlights: ["Client outreach", "Social media chatbots", "Purpose-specific RAG chatbots"],
    stack: ["n8n", "OpenAI", "RAG", "Chatbots"],
  },
  {
    number: "10",
    title: "Edu AI",
    category: "Web",
    eyebrow: "Edu AI Hackathon · Education",
    description: "An AI-powered educational platform designed to personalize learning, automate tasks, and make quality education accessible to everyone.",
    highlights: ["Personalized learning", "Task automation", "Accessible education"],
    stack: ["AI education platform", "Hackathon project"],
  },
  {
    number: "11",
    title: "AgriSmart Web Portal",
    category: "Web",
    eyebrow: "Agriculture · Admin portal",
    description: "A web portal for managing the administrative side of the AgriSmart experience.",
    highlights: ["Admin-side management", "AgriSmart web portal"],
    stack: ["Web portal", "Administration"],
  },
  {
    number: "12",
    title: "POS System Dashboard",
    category: "Web",
    eyebrow: "Point of sale · Dashboard",
    description: "A web dashboard for a point-of-sale system.",
    highlights: ["POS system", "Management dashboard"],
    stack: ["Web dashboard", "Point of sale"],
  },
];

const filters = ["All", "Android", "AI & Automation", "Web"] as const;

const highlightListVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.055, delayChildren: 0.08 } },
};

const highlightVariants = {
  hidden: { opacity: 0, x: -7 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.24 } },
};

export default function ExperienceProjects() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("All");
  const visibleProjects = activeFilter === "All"
    ? projects
    : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="section-shell bg-[#10120f]">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end"
        >
          <div>
            <p className="section-kicker mb-4">03 / Selected projects</p>
            <h2 className="section-title text-white">
              <ScrollType text="Experience & " />
              <ScrollType text="projects" className="text-[#ff795f]" />
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-white/55">
            Product work across Android, AI automation, and web platforms.
          </p>
        </motion.div>

        <div className="project-filters mb-7" role="group" aria-label="Filter projects">
          {filters.map((filter) => (
            <motion.button
              key={filter}
              type="button"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              aria-pressed={activeFilter === filter}
              className={`project-filter${activeFilter === filter ? " is-active" : ""}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </motion.button>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout" initial={false}>
            {visibleProjects.map((project, index) => (
              <motion.article
                key={project.number}
                layout
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.08 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, delay: index * 0.045 }}
                className="project-card rounded-xl p-6 sm:p-7"
              >
                <div className="mb-7 flex items-start justify-between gap-4">
                  <p className="font-mono text-xs text-[#a5f3e8]">{project.number}</p>
                  <span className="project-category">{project.category}</span>
                </div>
                <p className="mb-2 font-mono text-[10px] uppercase text-[#eddc9a]">{project.eyebrow}</p>
                <h3 className="mb-3 font-display text-xl font-semibold leading-snug text-white sm:text-2xl">
                  <ScrollType text={project.title} />
                </h3>
                <p className="mb-5 text-sm leading-6 text-white/60">{project.description}</p>
                <motion.ul
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={highlightListVariants}
                  className="mb-6 space-y-2"
                >
                  {project.highlights.map((highlight) => (
                    <motion.li
                      key={highlight}
                      variants={highlightVariants}
                      whileHover={{ x: 2, color: "#f3f0e7" }}
                      className="flex gap-2 text-xs leading-5 text-white/75"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#ff795f]" aria-hidden="true" />
                      {highlight}
                    </motion.li>
                  ))}
                </motion.ul>
                {project.stack.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 border-t border-white/10 pt-4">
                    {project.stack.map((item) => (
                      <motion.span
                        key={item}
                        className="project-tag"
                        whileHover={{ y: -2, scale: 1.035 }}
                        transition={{ duration: 0.16 }}
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                )}
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
