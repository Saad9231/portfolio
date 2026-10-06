"use client";

import { motion } from "framer-motion";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.15 }}
      className="site-nav"
      role="navigation"
      aria-label="Main navigation"
    >
      {navLinks.map((link) => (
        <motion.a
          key={link.href}
          href={link.href}
          whileHover={{ y: -2, color: "#a5f3e8", scale: 1.03 }}
          whileTap={{ scale: 0.96 }}
          className="site-nav-link"
        >
          <span>{link.label}</span>
        </motion.a>
      ))}
    </motion.nav>
  );
}