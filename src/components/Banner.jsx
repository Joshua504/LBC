import { useLocation } from 'react-router-dom';
import styles from '../styles/banner.module.scss';

const Banner = () => {
	const location = useLocation();
	const isPricingPage = location.pathname === '/pricing';

	return (
		<>
			<div className={styles.banner2}>
				{isPricingPage && (
					<div className={styles.banner2Content}>
						<h2>Need a Custom Package?</h2>
						<section className={styles.banner2Content1}>
							<div className={styles.banner2Item1}>
								<p>We understand that every project is unique.</p>
								<p>
									Contact us to discuss a tailored solution that meets your
									specific needs.
								</p>
							</div>
							<div className={styles.banner2Item2}>
								<select>
									<option value="">Service required</option>
									<option value="">Service required</option>
									<option value="">Service required</option>
									<option value="">Service required</option>
								</select>
								<input type="text" placeholder="Full Name*" />
								<input type="number" placeholder="Phone number*" />
								<input type="email" placeholder="Email address*" />
							</div>
						</section>
					</div>
				)}
			</div>
		</>
	);
};

export default Banner;
