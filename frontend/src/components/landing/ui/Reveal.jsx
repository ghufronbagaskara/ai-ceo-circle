import React from "react";
import { motion } from "framer-motion";

/**
 * Reveal — cinematic scroll-triggered entrance.
 * Magma/Apple slow-settle: cubic-bezier(0.16, 1, 0.3, 1), 1.2s duration.
 * Initial: opacity 0, y 50, scale 0.96.
 */
const Reveal = ({
  children,
  delay = 0,
  y = 50,
  scale = 0.96,
  className = "",
  once = true,
  duration = 1.2,
}) => (
  <motion.div
    initial={{ opacity: 0, y, scale }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once, margin: "-80px" }}
    transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export default Reveal;
