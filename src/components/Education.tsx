"use client";
import { motion } from "framer-motion";
import ScrollType from "@/components/ScrollType";

export default function Education() {
  return (
    <section id="education" className="section-shell bg-[#171a16]">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="section-kicker mb-4">04 / Learning &amp; credentials</p>
          <h2 className="section-title text-white">
            <ScrollType text="Education " />
            <ScrollType text="& more" className="text-[#a5f3e8]" />
          </h2>
        </motion.div>
        <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, x: -22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="mb-7 font-display text-xl font-semibold text-white">Education</h3>
            <div className="education-rule pl-6">
              <p className="mb-2 font-mono text-[10px] uppercase text-[#a5f3e8]">2024 — 2028</p>
              <h4 className="font-display text-2xl font-semibold text-white">BS Software Engineering</h4>
              <p className="mt-2 text-white/75">PMAS – Arid Agriculture University</p>
              <p className="mt-2 text-sm text-white/45">Rawalpindi, Pakistan</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: 0.12 }}
          >
            <h3 className="mb-7 font-display text-xl font-semibold text-white">Certifications</h3>
            <ul className="grid gap-x-8 sm:grid-cols-2">
              {[
                "AI-Powered Design",
                "Android Apps Development",
                "Professional Certificate in DevOps",
                "Machine Learning Online Course",
                "Fundamentals of Programming in Java",
              ].map((cert, i) => (
                <motion.li
                  key={cert}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.06 }}
                  className="flex min-h-14 items-center gap-3 border-t border-white/10 py-3 text-sm text-white/70 transition-colors hover:text-[#a5f3e8]"
                >
                  <span className="font-mono text-[10px] text-[#ff795f]">0{i + 1}</span>{cert}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}