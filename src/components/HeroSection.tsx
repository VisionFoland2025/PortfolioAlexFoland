import styles from "./HeroSection.module.css";
import MyPhoto from "../assets/MyPhoto.jpg";

export const HeroSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.localContainer}>
        <div className={styles.left}>
          <h1>
            I`m Alexey
            <br />
            <span className={styles.purple}>web designer</span>
            <br />
            and fullstack developer
          </h1>
          <p className={styles.description}>
            I craft responsive websites where <br /> technologies meet
            creativity
          </p>
        </div>

        <div className={styles.right}>
          <img src={MyPhoto} alt='Alex' className={styles.mainImage} />
        </div>
      </div>
    </div>
  );
};
