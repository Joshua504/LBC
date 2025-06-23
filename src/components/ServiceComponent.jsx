import styles from '../styles/serviceComp.module.scss';
import SVG5 from '../assets/icons/Blob.svg';
import SVG6 from '../assets/images/Shape2.svg';
import SVG7 from '../assets/images/Shape3.svg';
import SVG8 from '../assets/images/Shape4.svg';
import SVG9 from '../assets/images/Shape5.svg';
import SVG10 from '../assets/images/Shape6.svg';
import SVG11 from '../assets/images/Shape7.svg';
import SVG12 from '../assets/images/Shape8.svg';

const ServiceComponent = () => {
	return (
		<>
			<section className={styles.services}>
				<div className={styles.servicesTitle}>
					<h3>SERVICES</h3>
					<h2>
						Tailored solutions to help startups thrive and reach their full
						potential.
					</h2>
					<img
						className={`${styles.blob1} ${styles.blob4}`}
						src={SVG5}
						alt=""
					/>
				</div>
				<section className={styles.servicesContent1}>
					<div className={styles.servicesItem1}>
						<h2>TAILORED FUND OPPORTUNITY RESEARCH</h2>
						<p>
							Finding the right funding can be challenging. We conduct in-depth
							research to identify grants, investors, and funding opportunities
							tailored to your project’s needs. Get a detailed report with
							application guidelines and recommendations.
						</p>
						<button>Get started</button>
					</div>
					<div>
						<img src={SVG6} alt="" />
					</div>
				</section>

				<section className={styles.servicesContent1}>
					<div>
						<img src={SVG7} alt="" />
					</div>
					<div className={`${styles.servicesItem1} ${styles.deck}`}>
						<h2>PROJECT DECK DESIGN</h2>
						<p>
							Make a lasting impression with a professionally designed pitch
							deck. We craft compelling, investor-ready presentations with clear
							storytelling and engaging visuals. Includes up to 12 slides ($60
							per additional slide).
						</p>
						<button>Get started</button>
					</div>
				</section>

				<section className={styles.servicesContent1}>
					<div className={`${styles.servicesItem1} ${styles.deck}`}>
						<h2>PROJECT WEBSITE DEVELOPMENT</h2>
						<p>
							Your website is your digital storefront. We design modern,
							user-friendly, and responsive websites tailored to your brand’s
							identity, ensuring a seamless user experience and strong digital
							presence in both traditional and Web3 ecosystems.
						</p>
						<button>Get started</button>
					</div>
					<div>
						<img src={SVG8} alt="" />
					</div>
				</section>

				<section className={styles.servicesContent1}>
					<div>
						<img src={SVG9} alt="" />
					</div>
					<div className={`${styles.servicesItem1} ${styles.deck1}`}>
						<h2>WHITEPAPER AND PROJECT DOCUMENTATION</h2>
						<p>
							Organize your project with structured and well-documented
							resources in GitBook or Notion. Ideal for teams, investors, and
							stakeholders needing clear workflows and references.
						</p>
						<button>Get started</button>
					</div>
				</section>

				<section className={styles.servicesContent1}>
					<div className={`${styles.servicesItem1} ${styles.deck1}`}>
						<h2>GRANT APPLICATION ASSISSTANCE</h2>
						<p>
							We help you craft compelling grant applications, from structuring
							proposals to refining your pitch. Pricing depends on the level of
							support required.
						</p>
						<button>Get started</button>
					</div>
					<div>
						<img src={SVG10} alt="" />
					</div>
				</section>

				<section className={styles.servicesContent1}>
					<div>
						<img src={SVG11} alt="" />
					</div>
					<div className={`${styles.servicesItem1} ${styles.deck2}`}>
						<h2>FULL-SERVICE STARTUP PACKAGES</h2>
						<p>
							For businesses looking for an all-in-one solution, our
							Full-Service Package includes:
						</p>
						<ul>
							<li> Fund opportunity research</li>
							<li> Project deck design</li>
							<li> Website design + go-live support</li>
							<li> Project documentation</li>
							<li> Grant application support</li>
							<li> Full project management</li>
						</ul>
						.<button>Get started</button>
					</div>
				</section>

				<section className={styles.servicesContent1}>
					<div className={`${styles.servicesItem1} ${styles.deck1}`}>
						<h2>PROJECT MANAGEMENT SERVICES</h2>
						<p>
							Streamline your operations with expert project management. We
							oversee planning, execution, and reporting to keep your project on
							track.
						</p>
						<button>Get started</button>
					</div>
					<div>
						<img src={SVG12} alt="" />
					</div>
				</section>
			</section>
		</>
	);
};

export default ServiceComponent;
