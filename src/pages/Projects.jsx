import styles from './Projects.module.css';


function Projects() {
  return (
    <section id="projects" className={styles.projectsSection}>
      <h2 style={{textAlign: 'center', fontSize: '2.5rem', marginBottom: '40px'}}>Projects</h2>
      <div className={styles.projectsGrid}>
        <div className={styles.projectCard}>
          <h3 className={styles.projectTitle}>Project One</h3>
          <p>A brief description of your first project. Highlight the tech used and key features.</p>
          <a href="#" className={styles.projectLink} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>

        <div className={styles.projectCard}>
          <h3 className={styles.projectTitle}>Project Two</h3>
          <p>A brief description of your second project.</p>
          <a href="#" className={styles.projectLink} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>

        <div className={styles.projectCard}>
          <h3 className={styles.projectTitle}>Project Three</h3>
          <p>Description of your third project and technologies used.</p>
          <a href="#" className={styles.projectLink} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
