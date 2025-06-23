import styles from '../styles/home.module.scss';
import Banner from '../components/Banner';
import About from '../components/AboutComponent';
import Service from '../components/ServiceComponent';
import Project from '../components/ProjectComponent';

import SVG1 from '../assets/icons/Trophy.svg';
import SVG2 from '../assets/icons/Jet.svg';
import SVG3 from '../assets/icons/Growth.svg';

const Home = () => {
	return (
		<>
			<header className={styles.header}>
				<div className={styles.bannerLText}>
					<h1>
						Empowering startups to succeed in traditional and web3 ecosystems
					</h1>
					<button>Start Project</button>
				</div>
				<div className={styles.bannerSText}>
					<p>Unleashing global potential rooted in local expertise</p>
				</div>
			</header>
			<main className={styles.main}>
				<section className={styles.underHeader}>
					<div className={styles.underHeader1}>
						<h2>
							<img src={SVG1} alt="" />
							<span>22 years of expertise</span>
						</h2>
					</div>
					<div className={styles.underHeader1}>
						<h2>
							<img src={SVG2} alt="" />
							<span>Custom Strategies</span>
						</h2>
					</div>
					<div className={styles.underHeader1}>
						<h2>
							<img src={SVG3} alt="" />
							<span>Growth for the future</span>
						</h2>
					</div>
				</section>
				/*
				--------------------------------------------------------------------------
				*/ /* about us */ /*
				--------------------------------------------------------------------------
				*/
				<About />
				/*
				--------------------------------------------------------------------------
				*/ /* services */ /*
				--------------------------------------------------------------------------
				*/
				<Service />
				/*
				--------------------------------------------------------------------------
				*/ /* projects */ /*
				--------------------------------------------------------------------------
				*/
				<Project />
				/*
				--------------------------------------------------------------------------
				*/ /* banner */ /*
				--------------------------------------------------------------------------
				*/
			</main>
		</>
	);
};

export default Home;
