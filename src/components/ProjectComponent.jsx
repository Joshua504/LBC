import styles from '../styles/projectComp.module.scss';
import SVG13 from '../assets/images/Img1.svg';

const ProjectComponent = () => {
	return (
		<>
			<section className={styles.projects}>
				<div className={styles.projectsTitle}>
					<h3>PROJECTS</h3>
					<h2>
						We have provided the best services to various startups based on our
						significant industry experience.
					</h2>
				</div>
				<section className={styles.projectsContent}>
					<div className={styles.projectItem}>
						<div className={styles.projectItem1}>
							<h3>LUDOGATE</h3>
							<h2>START UP SUPPORT</h2>
							<p>
								“Link Bridge did a professional job supporting our initial
								startup. With my busy schedule it was hard to put things
								together at the beginning of starting the project. They came in
								and supported me like an extension of my team”
							</p>
							<h4>- Mo.X</h4>
							<h4>CEO LudoGate</h4>
						</div>

						<div className={styles.projectItem1}>
							<h3>MYKIDSEXCEL</h3>
							<h2>GOAL ACHIEVEMENT</h2>
							<p>
								"Link Bridge has been very helpful to us. At the beginning we
								were short handed and needed support. They gave us support in
								reaching our goal. Very professional and skilled team”.
							</p>
							<h4>- Fanny B</h4>
							<h4>MyKidsExcel</h4>
						</div>

						<div className={styles.projectItem1}>
							<h3>MYKIDSEXCEL</h3>
							<h2>GOAL ACHIEVEMENT</h2>
							<p>
								“Link Bridge helped get our documents ready to speak to
								investors. We were so happy with the designs and we still use
								the style guide they provided till this date”.
							</p>
							<h4>- Esther B.</h4>
							<h4>TONGYM</h4>
						</div>
					</div>
					<div className={styles.projectItem2}>
						<img src={SVG13} alt="" />
					</div>
				</section>
			</section>
		</>
	);
};

export default ProjectComponent;
