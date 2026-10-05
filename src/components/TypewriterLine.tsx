"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

const phrases = [
  "Android Development",
  "Software Quality Assurance",
  "AI Automation · n8n",
  "Web Development",
];

export default function TypewriterLine() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [visibleCharacters, setVisibleCharacters] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const phrase = phrases[phraseIndex];

  useEffect(() => {
    if (prefersReducedMotion) {
      setVisibleCharacters(phrase.length);
      return;
    }

    const isTyping = !isDeleting && visibleCharacters < phrase.length;
    const delay = isTyping ? 54 : isDeleting ? 28 : 1000;
    const timeout = window.setTimeout(() => {
      if (isTyping) {
        setVisibleCharacters((current) => current + 1);
      } else if (!isDeleting) {
        setIsDeleting(true);
      } else if (visibleCharacters > 0) {
        setVisibleCharacters((current) => current - 1);
      } else {
        setIsDeleting(false);
        setPhraseIndex((current) => (current + 1) % phrases.length);
      }
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [isDeleting, phrase.length, prefersReducedMotion, visibleCharacters]);

  return (
    <p className="typewriter-line" aria-label={phrase}>
      <span className="typewriter-prefix" aria-hidden="true">FOCUS /</span>
      <span aria-hidden="true">{phrase.slice(0, visibleCharacters)}</span>
      <span className="typewriter-caret" aria-hidden="true" />
      <span className="sr-only">{phrase}</span>
    </p>
  );
}