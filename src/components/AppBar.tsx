import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import styles from "./AppBar.module.css";

export const AppBar = () => {
  return (
    <header className={styles.container}>
      {/* Логотип ведет на главную через роутер */}
      <RouterLink to='/' className={styles.logo}>
        <span className={styles.logoIcon}>ALEX</span>
        <span className={styles.logoText}>FOLAND</span>
      </RouterLink>

      <div className={styles.rightSection}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <ScrollLink
              to='home'
              smooth={true}
              duration={500}
              className={styles.scrollLink}
            >
              <span className={styles.textColor}>#</span>home
            </ScrollLink>
          </li>
          <li className={styles.navItem}>
            <ScrollLink
              to='works'
              smooth={true}
              duration={500}
              className={styles.scrollLink}
            >
              <span className={styles.textColor}>#</span>works
            </ScrollLink>
          </li>
          <li className={styles.navItem}>
            <ScrollLink
              to='about-me'
              smooth={true}
              duration={500}
              className={styles.scrollLink}
            >
              <span className={styles.textColor}>#</span>about-me
            </ScrollLink>
          </li>
          <li className={styles.navItem}>
            <ScrollLink
              to='contacts'
              smooth={true}
              duration={500}
              className={styles.scrollLink}
            >
              <span className={styles.textColor}>#</span>contacts
            </ScrollLink>
          </li>
        </ul>
        <div className={styles.languageSwitcher}>EN</div>
      </div>
    </header>
  );
};
