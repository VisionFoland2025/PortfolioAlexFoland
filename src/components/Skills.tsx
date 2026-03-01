import { useRef } from "react";
import { motion } from "framer-motion";
import styles from "./Skills.module.css";
import { FaJs, FaReact } from "react-icons/fa";
import { TbDatabaseSearch } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import { TiHtml5 } from "react-icons/ti";
import { DiJava } from "react-icons/di";

const comonentsFa = [
  <TbDatabaseSearch />,
  <FaJs />,
  <DiJava />,
  <FaReact />,
  <VscVscode />,
  <TiHtml5 />,
];
const skillsData = [
  { title: "Databases", items: ["PostgreSQL", "Oracle PL/SQL", "ClickHouse"] },
  { title: "Languages", items: ["TypeScript", "JavaScript", "Dart"] },
  { title: "Java", items: ["Spring Boot", "Spring MVC"] },
  {
    title: "React",
    items: ["Redux", "Redux ToolKit", "React Hook Form", "Axios", "Zod"],
  },
  {
    title: "Tools",
    items: ["VSCode", "Figma", "Git", "Firebase"],
  },

  { title: "Other", items: ["HTML", "CSS", "SCSS", "Vite"] },
];

export const Skills = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const scrollAmount = 300;
      containerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={styles.skillsSection}>
      <h2 className={styles.title}>#skills</h2>

      <div>
        <div className={styles.controls}>
          <button onClick={() => scroll("left")}>←</button>
          <div className={styles.scrollContainer} ref={containerRef}>
            {skillsData.map((block, index) => (
              <motion.div
                className={styles.card}
                key={index}
                initial={{ opacity: 0, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 3, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.5 }}
              >
                <h3>
                  {comonentsFa[index]}
                  {` ${block.title}`}
                </h3>
                <ul>
                  {block.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          <button onClick={() => scroll("right")}>→</button>
        </div>
      </div>
    </div>
  );
};
