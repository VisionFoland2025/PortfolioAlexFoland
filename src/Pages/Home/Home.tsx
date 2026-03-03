import { AboutMe } from "../../components/AboutMe";
import { AppBar } from "../../components/AppBar";
import { Contacts } from "../../components/Contacts";
import { FeedBack } from "../../components/FeedBack";
import { HeroSection } from "../../components/HeroSection";
import { Projects } from "../../components/Projects";
import { Quote } from "../../components/Quote";
import { Skills } from "../../components/Skills";

import styles from "./Home.module.css";
export const Home = () => {
  return (
    <>
      <AppBar />
      <section id='home'>
        <HeroSection />
      </section>
      <Quote />
      <div className={styles.container}>
        <section id='works'>
          <Projects />
        </section>
        <section id='about-me'>
          <AboutMe />
        </section>
        <section id='skills'>
          <Skills />
        </section>
        <section id='contacts'>
          <Contacts />
        </section>
        <section id='feedback'>
          <FeedBack />
        </section>
      </div>
    </>
  );
};
