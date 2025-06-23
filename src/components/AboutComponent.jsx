import styles from '../styles/aboutComp.module.scss';
import SVG4 from '../assets/images/Shape1.png';
import SVG5 from '../assets/icons/Blob.svg';

const About = () => {
	return (
		<>
			{' '}
			<section className={styles.aboutUs}>
				<img className={`${styles.blob1}`} src={SVG5} alt="" />
				<section className={styles.aboutUsContent}>
					<div className={styles.aboutUsContent1}>
						<img
							className={`${styles.blob1} ${styles.blob2}`}
							src={SVG5}
							alt=""
						/>
						<h3>ABOUT US</h3>
						<h2>Who Are We</h2>
						<p>
							Link Bridge Consulting (LBC) is a startup consulting and advisory
							studio, We specialise in supporting traditional and Web3 startups
							to prepare for success.
						</p>
						<p>
							Our team of seasoned professionals combines unparalleled local
							knowledge with a global perspective. We offer a comprehensive
							suite of services designed to propel your business forward,
							wherever you operate.
						</p>
						<button>Start Project</button>
					</div>
					<div className={styles.aboutUsContent2}>
						<img src={SVG4} alt="" />
					</div>
				</section>
				<img className={`${styles.blob1} ${styles.blob3}`} src={SVG5} alt="" />
			</section>
		</>
	);
};

export default About;
