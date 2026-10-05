"use client";
import { motion } from "framer-motion";
import ScrollType from "@/components/ScrollType";

export default function Contact() {
  return (
    <section id="contact" className="contact-band section-shell">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="section-inner"
      >
        <p className="mb-6 font-mono text-[11px] uppercase text-[#596e18]">04 / Start a conversation</p>
        <h2 className="max-w-4xl font-display text-5xl font-semibold leading-[1.02] sm:text-7xl">
          <ScrollType text="Let's make something " />
          <em className="text-[#e56b55] not-italic">
            <ScrollType text="matter." />
          </em>
        </h2>
        <p className="mb-9 mt-6 max-w-xl text-base leading-7 text-[#30332b]">
          Currently available for Android Development, SQA, and Web Projects. Let&apos;s connect and discuss how I can add value to your team.
        </p>

        <div className="flex flex-wrap gap-x-8 gap-y-4 border-t border-[#10120f]/20 pt-6">
          <a
            href="mailto:saadiqbal7007@gmail.com"
            className="font-mono text-sm underline decoration-[#10120f]/30 underline-offset-4 hover:decoration-[#ff795f] focus-visible:ring-[#10120f]"
          >
            saadiqbal7007@gmail.com <span aria-hidden="true">↗</span>
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-saad-iqbal-b33222312/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm underline decoration-[#10120f]/30 underline-offset-4 hover:decoration-[#ff795f] focus-visible:ring-[#10120f]"
          >
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
          <a
            href="https://github.com/Saad9231"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm underline decoration-[#10120f]/30 underline-offset-4 hover:decoration-[#ff795f] focus-visible:ring-[#10120f]"
          >
            GitHub <span aria-hidden="true">↗</span>
          </a>
          <a
            href="tel:+923221793231"
            className="font-mono text-sm underline decoration-[#10120f]/30 underline-offset-4 hover:decoration-[#ff795f] focus-visible:ring-[#10120f]"
          >
            +92 322 1793231 <span aria-hidden="true">↗</span>
          </a>
        </div>
      </motion.div>

      <footer className="section-inner mt-20 flex flex-col justify-between gap-3 border-t border-[#10120f]/20 pt-5 font-mono text-xs text-[#30332b] sm:flex-row sm:text-sm">
        <span>© {new Date().getFullYear()} Muhammad Saad Iqbal</span>
        <span>All rights reserved.</span>
        <span>Rawalpindi, Punjab, Pakistan</span>
      </footer>
    </section>
  );
}