import styles from "./Projects.module.css";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.header}`}>
        <div>
          <h1 className={styles.title}>#projects</h1>
        </div>
        <div>
          <a className={styles.viewAll} href='#'>
            View all
          </a>
        </div>
      </div>

      <div className={styles.projectsContainer}>
        <ProjectCard
          title='GeekBrains Template'
          description='Template I made as a student'
          stack='TypeScript'
          links={[
            {
              label: "Github",
              url: "https://github.com/VisionFoland2025/GeekBrainsTemplate",
            },
          ]}
          illustration='template'
        />
        <ProjectCard
          title='Todolist'
          description='Write down your activities daily'
          stack='TypeScript AntDesign'
          links={[
            {
              label: "Github",
              url: "https://github.com/VisionFoland2025/TodolistFullstack",
            },
          ]}
          illustration='todo'
        />
        <ProjectCard
          title='Calculator'
          description='Math should be easier now'
          stack='TypeScript'
          links={[
            {
              label: "Github",
              url: "https://github.com/VisionFoland2025/Calculator",
            },
          ]}
          illustration='calculator'
        />
        <ProjectCard
          title='Portfolio'
          description='What can I do'
          stack='TypeScript'
          links={[{ label: "Github", url: "#" }]}
          illustration='portfolio'
        />
        <ProjectCard
          title='Dudu Pizza'
          description='You have not tried this pizza yet'
          stack='TypeScript'
          links={[{ label: "Github", url: "#" }]}
          illustration='pizza'
        />
        <ProjectCard
          title='Social Site'
          description='My mini social site'
          stack='TypeScript'
          links={[{ label: "Github", url: "#" }]}
          illustration='social'
        />
      </div>
    </div>
  );
};
