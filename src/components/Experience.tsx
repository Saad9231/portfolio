"use client";

import { motion } from "framer-motion";
import ScrollType from "@/components/ScrollType";

const productAreas = [
  {
    number: "01",
    title: "Perkss Business App",
    details: "Currency configuration, external sales tracking, ANR investigation, bug fixes, and new feature requirements.",
  },
  {
    number: "02",
    title: "Perkss Kiosk",
    details: "Product development across the Perkss kiosk experience, including layouts adapted for different variations.",
  },
  {
    number: "03",
    title: "Customer App Flavors",
    details: "Customer app flavors, a live Play Store app, and complete listing assets prepared for Play Store requirements.",
  },
];

const technologyStack = ["Java", "XML", "SQLite", "PostgreSQL", "Firebase"];

export default function Experience() {
  return (
    <section id="experience" className="section-shell bg-[#171a16]">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end"
        >
          <div>
            <p className="section-kicker mb-4">02 / Professional experience</p>
            <h2 className="section-title text-white">
              <ScrollType text="Samarsol" />{" "}
              <ScrollType text="· Perkss" className="text-[#a5f3e8]" />
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-white/55">
            Working across live products in the Perkss suite, from business workflows to customer-facing apps.
          </p>
        </motion.div>

        <div className="experience-panel">
          <div className="grid md:grid-cols-3">
            {productAreas.map((area, index) => (
              <motion.article
                key={area.number}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="experience-area"
              >
                <p className="mb-6 font-mono text-xs text-[#ff795f]">{area.number} <span className="text-white/30">/ PRODUCT</span></p>
                <h3 className="mb-3 font-display text-xl font-semibold text-white">{area.title}</h3>
                <p className="text-sm leading-6 text-white/60">{area.details}</p>
              </motion.article>
            ))}
          </div>

          <div className="experience-stack">
            <p className="font-mono text-[10px] uppercase text-white/45">Technology stack</p>
            <div className="flex flex-wrap gap-2">
              {technologyStack.map((technology) => (
                <span className="project-tag" key={technology}>{technology}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}