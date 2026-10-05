"use client";
import { motion } from "framer-motion";
import ScrollType from "@/components/ScrollType";

export const skillCategories = [
  { title: "Languages", items: ["Java", "C++", "HTML", "CSS", "JavaScript", "XML"] },
  { title: "Mobile Dev", items: ["Android Studio", "Android SDK", "XML Layouts", "SQLite", "RecyclerView"] },
  { title: "Web & Tools", items: ["Next.js", "ASP.NET Core", "EF Core", "Git", "GitHub", "VS Code"] },
  { title: "AI & Automation", items: ["n8n", "AI Tools"] },
  { title: "Concepts", items: ["OOP", "Software Quality Assurance", "REST APIs", "DevOps Fundamentals", "SEO"] },
];

export default function Skills() {
  return (
    <section id="skills" className="section-shell bg-[#141612]">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end"
        >
          <div>
            <p className="section-kicker mb-4">01 / What I work with</p>
            <h2 className="section-title text-white">
              <ScrollType text="Technical" />{" "}
              <ScrollType text="toolkit" className="text-[#a5f3e8]" />
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-white/55">
            A practical mix of tools for building, testing, and shipping useful software.
          </p>
        </motion.div>
        <div className="grid gap-x-7 gap-y-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: i * 0.09 }}
              className="skill-panel pt-5"
            >
              <p className="mb-5 font-mono text-[10px] text-white/40">0{i + 1}</p>
              <h3 className="mb-4 font-display text-xl font-semibold text-white">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((skill) => (
                  <span key={skill} className="skill-chip cursor-default rounded-full px-3 py-1.5 text-xs text-white/70">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}