import { Link } from "react-router-dom";
import styles from "./AppBar.module.css";

export const AppBar = () => {
  return (
    <header className={styles.container}>
      <Link to='/' className={styles.logo}>
        <span className={styles.logoIcon}>ALEX</span>
        <span className={styles.logoText}>FOLAND</span>
      </Link>

      {/* Оборачиваем меню и язык в отдельный блок */}
      <div className={styles.rightSection}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <a className={styles.textColor} href='#home'>
              #<p>home</p>
            </a>
          </li>
          <li className={styles.navItem}>
            <a className={styles.textColor} href='#works'>
              #<p>works</p>
            </a>
          </li>
          <li className={styles.navItem}>
            <a className={styles.textColor} href='#about-me'>
              #<p>about-me</p>
            </a>
          </li>
          <li className={styles.navItem}>
            <a className={styles.textColor} href='#contacts'>
              #<p>contacts</p>
            </a>
          </li>
        </ul>
        <div className={styles.languageSwitcher}>EN</div>
      </div>
    </header>
  );
};
