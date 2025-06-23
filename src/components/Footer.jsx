import { Link } from 'react-router-dom';
import styles from '../styles/footer.module.scss';
import Icon1 from '../assets/icons/Phone.svg';
import Icon2 from '../assets/icons/Email.svg';
import Icon3 from '../assets/icons/Linkedin.svg';
import Icon4 from '../assets/icons/Telegram.svg';

const Footer = () => {
  const year = new Date().getFullYear();

	return (
		<>
			<footer>
				<section className={styles.formLinks__container}>
					<section className={styles.footerLinks}>
						<div className={styles.footerText}>
							<h2>How Can We Be of Help?</h2>
							<p>Your partner in start up success </p>
							<p>Let’s build your dream startup together!</p>
						</div>
						<section className={styles.footerLinks__wrapper}>
							<div className={styles.footerLinks__wrapper__links}>
								<h3>Quick Links</h3>
								<ul>
									<Link>About Us</Link>
									<Link>Support</Link>
									<Link>Services</Link>
									<Link>Pricing</Link>
									<Link>Terms of Use</Link>
									<Link>Privacy policy </Link>
								</ul>
							</div>
							<div
								className={`${styles.footerLinks__wrapper__links} ${styles.footerMod1}`}>
								<h3>Contact Us</h3>
								<ul>
									<p className={styles.formLinks__mod}>
										<span>
											<img src={Icon1} alt="" />
										</span>
										+1-972-809-3645
									</p>
									<p className={styles.formLinks__mod}>
										<span>
											<img src={Icon2} alt="" />
										</span>
										Connect@Linkbridgellc.us
									</p>
								</ul>
							</div>
						</section>
					</section>
					<form>
						<section className={styles.formContainer}>
							<div className={styles.inpts}>
								<input type="text" placeholder="First Name" />
								<input type="text" placeholder="Last Name" />
								<input type="number" placeholder="Phone Number" />
								<input type="email" placeholder="Email Adress" />
							</div>
							<textarea placeholder="Your message"></textarea>
							<button className={styles.footerBtn}>Submit</button>
						</section>
					</form>
				</section>
				<section className={styles.footerIcons}>
					<section className={styles.socials}>
						<div>
							<img src={Icon3} alt="" />
						</div>
						<div>
							<img src={Icon4} alt="" />
						</div>
					</section>

					<ul className={styles.footerTerms}>
						<Link className={styles.terms}>Privacy Policy </Link>
						<Link className={styles.terms}>Term of use</Link>
					</ul>
				</section>
        <p className={styles.copyRight}>©{year} LinkBridgeConsulting. All rights reserved</p>
			</footer>
		</>
	);
};

export default Footer;
