"use client";

import { motion, type Variants } from "framer-motion";
import { Fragment } from "react";

type ScrollTypeProps = {
  text: string;
  className?: string;
};

const textVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.025,
      delayChildren: 0.04,
    },
  },
};

const characterVariants: Variants = {
  hidden: { opacity: 0, y: 7 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.16, ease: "easeOut" },
  },
};

export default function ScrollType({ text, className }: ScrollTypeProps) {
  const words = text.split(" ");

  return (
    <motion.span
      aria-label={text}
      className={["scroll-type", className].filter(Boolean).join(" ")}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.65 }}
      variants={textVariants}
      style={{ display: "inline" }}
    >
      {words.map((word, wordIndex) => (
        <Fragment key={`${word}-${wordIndex}`}>
          <span className="inline-block whitespace-nowrap">
            {Array.from(word).map((character, characterIndex) => (
              <motion.span
                key={`${character}-${characterIndex}`}
                aria-hidden="true"
                variants={characterVariants}
                style={{ display: "inline-block" }}
              >
                {character}
              </motion.span>
            ))}
          </span>
          {wordIndex < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </motion.span>
  );
}