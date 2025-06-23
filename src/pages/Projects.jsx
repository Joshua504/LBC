import Project from '../components/ProjectComponent';
import styles from '../styles/project.module.scss';

const Projects = () => {
	return (
		<>
			<main className={styles.main}>
        <Project />
      </main>
		</>
	);
};

export default Projects;
