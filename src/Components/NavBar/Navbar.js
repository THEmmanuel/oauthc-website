import React from 'react';
import styles from './Navbar.module.css';
import logo from './logo.png'; // Import the logo image, replace './logo.png' with the path to your image file

const NavBar = () => {
	return (
		<nav className={styles.navBar}>
			<img src={logo} alt="Hospital Logo" className={styles.logo} />
			<div className={styles.navItems}>
				<a href="#who-we-are" className={styles.navLink}>Who We Are</a>
				<a href="#health-library" className={styles.navLink}>Health Library</a>
				<a href="#services" className={styles.navLink}>Services</a>
				<a href="#blog" className={styles.navLink}>Blog</a>
				<a href="#research-and-education" className={styles.navLink}>Research & Education</a>
			</div>
			<button className={styles.appointmentButton}>Book Appointment</button>
		</nav>
	);
};

export default NavBar;
