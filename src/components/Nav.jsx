import { Link } from 'react-router-dom';
import { useState } from 'react';
import styles from '../styles/nav.module.scss';
import Logo from '../assets/images/Logo.svg';

const Nav = () => {
	const [activeNav, setActiveNav] = useState(0);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const links = [
		{ label: 'home', path: '/' },
		{ label: 'about us', path: '/aboutus' },
		{ label: 'services', path: '/services' },
		{ label: 'pricing', path: '/pricing' },
		{ label: 'projects', path: '/projects' },
	];

	const handleNavClick = (index) => {
		setActiveNav(index);
		setIsMobileMenuOpen(false);
	};

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen((prev) => !prev);
	};
	return (
		<>
			<nav>
				<div className={styles.logo}>
					<img src={Logo} alt="" />
					<div
						className={`${styles.hamburger} ${
							isMobileMenuOpen ? styles.active : ''
						}`}
						onClick={toggleMobileMenu}>
						<span className={styles.bar}></span>
						<span className={styles.bar}></span>
						<span className={styles.bar}></span>
					</div>
				</div>
				<div
					className={`${styles.navContainer} ${
						isMobileMenuOpen ? styles.mobileMenuOpen : ''
					}`}>
					<ul className={styles.navLinks}>
						{links.map((link, index) => (
							<Link
								className={`${styles.link} ${
									activeNav === index ? styles.activeLink : ''
								}`}
								onClick={() => handleNavClick(index)}
								key={index}
								to={link.path}>
								{link.label}
							</Link>
						))}
					</ul>
					<Link className={`${styles.link} ${styles.navBtn}`} to="projects">
						contact us
					</Link>
				</div>
			</nav>
		</>
	);
};

export default Nav;
