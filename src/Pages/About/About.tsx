import { useEffect, useRef } from "react";
import { AppBar } from "../../components/AppBar";
import styles from "./About.module.css";

const timeline = [
  {
    year: "2014",
    title: "IRNITU — Automotive Engineer",
    description:
      "Enrolled at Irkutsk National Research Technical University. Between mechanics lectures, I discovered the world of web development and realized — this is what I truly want.",
    icon: "🎓",
  },
  {
    year: "2016",
    title: "First Steps in IT",
    description:
      "While studying, I got passionate about web development — HTML, CSS, JavaScript. Every free hour went into side projects and tutorials.",
    icon: "💻",
  },
  {
    year: "2020",
    title: "Injector Technician",
    description:
      "Worked as a fuel injector specialist — diagnosing and cleaning injection systems. Precise, technical work that demanded attention to detail and patience.",
    icon: "🔩",
  },
  {
    year: "2021",
    title: "Suspension & Chassis Technician",
    description:
      "Tried my hand at suspension work on a service station. Cold garage, heavy parts — confirmed that I needed to find a warmer place to apply my skills.",
    icon: "🔧",
  },
  {
    year: "2021",
    title: "Field Data Collector",
    description:
      "Spent cold days at the market collecting container inventory data — counting, categorizing, recording. Unglamorous but it taught me the value of structured, reliable data.",
    icon: "📋",
  },
  {
    year: "2021",
    title: "Oil & Fluids Technician",
    description:
      "Settled into changing oils and technical fluids at an auto service. Steady work — but the drive to become a developer was louder than ever.",
    icon: "🛢️",
  },
  {
    year: "2021",
    title: "Courses & Full Stack",
    description:
      "Made the leap. Completed intensive courses in React, SQL, Oracle PL/SQL, Java, and Spring Boot. Hundreds of hours of practice turned into a real stack.",
    icon: "🚀",
  },
  {
    year: "2025",
    title: "Demir Bank — SQL Developer",
    description:
      "Received an invitation to join Demir Bank as a SQL Developer. The dream became reality — code is no longer just a hobby, it's my profession.",
    icon: "🏦",
  },
];

export const About = () => {
  const barsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bar = entry.target as HTMLElement;
            const level = bar.getAttribute("data-level");
            bar.style.width = level + "%";
          }
        });
      },
      { threshold: 0.3 },
    );

    barsRef.current.forEach((bar) => {
      if (bar) observer.observe(bar);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <AppBar />
      <main className={styles.page}>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroGrid} aria-hidden />
          <div className={styles.heroCornerTL} aria-hidden />
          <div className={styles.heroCornerBR} aria-hidden />
          <div className={styles.heroContent}>
            <p className={styles.heroSub}>
              <span className={styles.hash}>#</span>my-story
            </p>
            <h1 className={styles.heroTitle}>
              From <span className={styles.accent}>Wrench</span>
              <br />
              to <span className={styles.accent}>Code</span>
            </h1>
            <p className={styles.heroDesc}>
              A journey from automotive engineer to fullstack developer — a
              story about how it's never too late to change direction when you
              know where you're headed.
            </p>
          </div>
          <div className={styles.heroVisual} aria-hidden>
            <div className={styles.orb} />
          </div>
        </section>

        {/* Timeline */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.hash}>#</span>timeline
          </h2>
          <div className={styles.timeline}>
            {timeline
              .slice()
              .reverse()
              .map((item, i) => (
                <div
                  key={i}
                  className={styles.timelineItem}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className={styles.timelineLeft}>
                    <span className={styles.timelineYear}>{item.year}</span>
                    <div className={styles.timelineDot} />
                  </div>
                  <div className={styles.timelineCard}>
                    <h3 className={styles.timelineTitle}>{item.title}</h3>
                    <p className={styles.timelineDesc}>{item.description}</p>
                  </div>
                </div>
              ))}
            <div className={styles.timelineLine} aria-hidden />
          </div>
        </section>
      </main>
    </>
  );
};
