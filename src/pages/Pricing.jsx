import styles from '../styles/pricing.module.scss';

import SVG14 from '../assets/icons/Mark.svg';

const Pricing = () => {
	return (
		<>
			<header className={styles.header}>
				<div className={styles.projectsTitle}>
					<h3>PRICING</h3>
					<h2>
						Choose the package that best fit your team’s needs, wether you are
						getting started or managing large projects.
					</h2>
				</div>
			</header>
			<main className={styles.main}>
				<section className={styles.priceContainer}>
					<div className={styles.priceCard}>
						<div className={styles.priceText}>
							<h2>$600</h2>
							<h3>Tailored fund opportunity research</h3>
							<p>
								Get customised funding insights to fuel your startup’s growth
							</p>
							<ul>
								<li>
									<span>
										<img src={SVG14} alt="" />
									</span>
									Grants advisory services.
								</li>
								<li>
									<span>
										<img src={SVG14} alt="" />
									</span>
									Regular funding updates.
								</li>
								<li>
									<span>
										<img src={SVG14} alt="" />
									</span>
									Funding research: Grants, VC & more.
								</li>
								<li>
									<span>
										<img src={SVG14} alt="" />
									</span>
									Reports with key criteria and tips.
								</li>
								<li>
									<span>
										<img src={SVG14} alt="" />
									</span>
									Funding matches tailored to your startup.
								</li>
							</ul>
						</div>
						<button className={styles.priceButton}>get started</button>
					</div>

					<div className={styles.priceCard}>
						<div className={styles.priceText}>
							<h2>$1250</h2>
							<h3>Project deck design</h3>
							<p>
								Craft a compelling pitch deck that wins investors and partners.
							</p>
							<ul>
								<li>
									<span>
										<img src={SVG14} alt="" />
									</span>
									Additional slides: $60 per slide.
								</li>
								<li>
									<span>
										<img src={SVG14} alt="" />
									</span>
									Clear and compelling storytelling.
								</li>
								<li>
									<span>
										<img src={SVG14} alt="" />
									</span>
									Professionally designed investor-ready deck (up to 12 slides)
								</li>
								<li>
									<span>
										<img src={SVG14} alt="" />
									</span>
									Data visualisation & structured content flow.
								</li>
							</ul>
						</div>
						<button className={styles.priceButton}>get started</button>
					</div>

					<div className={styles.priceCard}>
						<div className={styles.priceText}>
							<h2>$700</h2>
							<h3>Website design (only)</h3>
							<p>Get a visually stunning and user-friendly website design.</p>
							<ul>
								<li>
									<span>
										<img src={SVG14} alt="" />
									</span>
									Custom, brand-aligned UI/UX design
								</li>
								<li>
									<span>
										<img src={SVG14} alt="" />
									</span>
									Responsive layouts for all devices.
								</li>
								<li>
									<span>
										<img src={SVG14} alt="" />
									</span>
									Modern, conversion-focused aesthetics
								</li>
								<li>
									<span>
										<img src={SVG14} alt="" />
									</span>
									Ready-to-develop design files.
								</li>
								<li>
									<span>
										<img src={SVG14} alt="" />
									</span>
									Seamless user experience with intuitive navigation.
								</li>
							</ul>
						</div>
						<button className={styles.priceButton}>get started</button>
					</div>

					<div className={styles.priceCard}>
						<div className={styles.priceText}>
							<h2>$1500</h2>
							<h3>Website design + Go live support</h3>
							<p>Get a stunning website with expert launch assistance.</p>
							<ul>
								<li>
									<span>
										<img src={SVG14} alt="" />
									</span>
									Custom, brand-aligned UI/UX design
								</li>
								<li>
									<span>
										<img src={SVG14} alt="" />
									</span>
									Responsive and conversion-optimized layouts.
								</li>
								<li>
									<span>
										<img src={SVG14} alt="" />
									</span>
									Development-ready design files.
								</li>
								<li>
									<span>
										<img src={SVG14} alt="" />
									</span>
									Pre-launch testing and performance checks.
								</li>
								<li>
									<span>
										<img src={SVG14} alt="" />
									</span>
									Guidance through deployment and live setup
								</li>
							</ul>
						</div>
						<button className={styles.priceButton}>get started</button>
					</div>

					<div className={styles.priceCard}>
						<div className={styles.priceText}>
							<h2>$1200</h2>
							<h3>Project documentation (Gitbook/Notion)</h3>
							<p>Structure and streamline your project knowledge.</p>
							<ul>
								<li>
									<span>
										<img src={SVG14} alt="" />
									</span>
									Version-controlled updates for accuracy.
								</li>
								<li>
									<span>
										<img src={SVG14} alt="" />
									</span>
									Collaborative setup for team accessibility.
								</li>
								<li>
									<span>
										<img src={SVG14} alt="" />
									</span>
									Hosted on GitBook or Notion for seamless use.
								</li>
								<li>
									<span>
										<img src={SVG14} alt="" />
									</span>
									Clear guides, workflows, and references
								</li>
								<li>
									<span>
										<img src={SVG14} alt="" />
									</span>
									Structured and well-organised documentation
								</li>
							</ul>
						</div>
						<button className={styles.priceButton}>get started</button>
					</div>

					<div className={styles.priceCard}>
						<div className={styles.priceText}>
							<h2>$250 - $1000</h2>
							<h3>Grant application support</h3>
							<p>Maximize your chances of securing funding.</p>
							<ul>
								<li>
									<span>
										<img src={SVG14} alt="" />
									</span>
									Grants advisory services.
								</li>
								<li>
									<span>
										<img src={SVG14} alt="" />
									</span>
									Review and feedback on grant proposals
								</li>
								<li>
									<span>
										<img src={SVG14} alt="" />
									</span>
									Assistance with crafting compelling grant applications
								</li>
								<li>
									<span>
										<img src={SVG14} alt="" />
									</span>
									Pricing depends on the level of support required
								</li>
							</ul>
						</div>
						<button className={styles.priceButton}>get started</button>
					</div>

					<div className={styles.priceCard}>
						<div className={styles.priceText}>
							<h2>$5000</h2>
							<h3>Full service pacakage</h3>
							<p>Build a high-impact website to showcase your startup.</p>
							<ul>
								<li>
									<span>
										<img src={SVG14} alt="" />
									</span>
									Three grant applications.
								</li>
								<li>
									<span>
										<img src={SVG14} alt="" />
									</span>
									Project deck design (up to 12 slides).
								</li>
								<li>
									<span>
										<img src={SVG14} alt="" />
									</span>
									Advisory services.
								</li>
								<li>
									<span>
										<img src={SVG14} alt="" />
									</span>
									Project documentation (GitBook/Notion)
								</li>
								<li>
									<span>
										<img src={SVG14} alt="" />
									</span>
									Full project website with go-live support.
								</li>
							</ul>
						</div>
						<button className={styles.priceButton}>get started</button>
					</div>

					<div className={styles.priceCard}>
						<div className={styles.priceText}>
							<h2>$1200</h2>
							<h3>Project management services</h3>
							<p>Streamline execution and keep your project on track.</p>
							<ul>
								<li>
									<span>
										<img src={SVG14} alt="" />
									</span>
									Advisory services.
								</li>
								<li>
									<span>
										<img src={SVG14} alt="" />
									</span>
									Oversee project milestones.
								</li>
								<li>
									<span>
										<img src={SVG14} alt="" />
									</span>
									Task delegation and workflow optimisation
								</li>
								<li>
									<span>
										<img src={SVG14} alt="" />
									</span>
									Progress tracking and reporting.
								</li>
								<li>
									<span>
										<img src={SVG14} alt="" />
									</span>
									End-to-end project planning and execution
								</li>
							</ul>
						</div>
						<button className={styles.priceButton}>get started</button>
					</div>
				</section>
			</main>
		</>
	);
};
export default Pricing;
