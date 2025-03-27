"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { ProfExperience, Project } from "../types/types";
import ExperienceCard from "./ExperienceCard";

interface ExperienceCardListProps {
  experiences: ProfExperience[];
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.5,
    },
  },
};


const itemVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const ExperienceCardList = ({ experiences }: ExperienceCardListProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.ul
      ref={ref}
      className="space-y-6"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {experiences.map((experience, index) => (
        <motion.li key={index} variants={itemVariants}>
          <ExperienceCard experience={experience} />
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default ExperienceCardList;
