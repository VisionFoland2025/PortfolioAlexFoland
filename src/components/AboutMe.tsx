import styles from "./AboutMe.module.css";
import profileImage from "../assets/AboutMe.png";
import { Link } from "react-router-dom";

export const AboutMe = () => {
  return (
    <section className={styles.container}>
      {/* Декоративная сетка на фоне */}
      <div className={styles.grid} aria-hidden />

      {/* Неоновые угловые рамки */}
      <div className={styles.cornerTL} aria-hidden />
      <div className={styles.cornerBR} aria-hidden />

      {/* Левая часть — текст */}
      <div className={styles.content}>
        <div className={styles.label}>
          <span className={styles.dot} />
          available for work
        </div>

        <h2 className={styles.title}>
          <span className={styles.hash}>#</span>about-me
        </h2>

        <p className={styles.greeting}>Hey there, I'm Alex!</p>

        <p className={styles.paragraph}>
          I'm a 28-year-old self-taught Fullstack developer from Kyrgyzstan. I
          love building clean, responsive, and user-friendly websites that bring
          ideas to life.
        </p>
        <p className={styles.paragraph}>
          Over the past year, I've been creating web apps that help people and
          businesses shine online. Whether it's coding a project from scratch or
          improving the user experience — I'm all in.
        </p>

        {/* Стек-теги */}
        <div className={styles.tags}>
          {[
            "Oracle PL/SQL",
            "PostgreSQL",
            "Java",
            "Spring Boot",
            "TypeScript",
            "React",
            "Redux",
            "CSS",
            "HTML",
          ].map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>

        <Link to='/about' className={styles.button}>
          <span>Read more</span>
          <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>
            <path
              d='M3 8h10M9 4l4 4-4 4'
              stroke='currentColor'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </Link>
      </div>

      {/* Правая часть — фото */}
      <div className={styles.imageWrapper}>
        <div className={styles.imageGlow} aria-hidden />
        <div className={styles.imageBorder} aria-hidden />
        <img
          src={profileImage}
          alt='Alex — React Developer'
          className={styles.image}
        />
        {/* Декоративные линии */}
        <div className={styles.lineH} aria-hidden />
        <div className={styles.lineV} aria-hidden />
      </div>
    </section>
  );
};
