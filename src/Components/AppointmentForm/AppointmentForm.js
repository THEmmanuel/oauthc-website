import React from 'react';
import styles from './AppointmentForm.module.css';

const AppointmentForm = () => {
	return (
		<div className={styles.formCard}>
			<div className={styles.header}>
				<h2>Lorem Ipsum?</h2>
				<h3>Lorem Ipsum Lorem</h3>
			</div>
			<form className={styles.form}>
				<select className={styles.input} defaultValue="">
					<option value="" disabled>Patient type</option>
					<option value="new">New Patient</option>
					<option value="returning">Returning Patient</option>
				</select>
				<input className={styles.input} type="text" placeholder="Your Name" />
				<input className={styles.input} type="text" placeholder="Your Age" />
				<input className={styles.input} type="tel" placeholder="Phone number" />
				<input className={styles.input} type="email" placeholder="Email Address" />
				<input className={styles.input} type="date" placeholder="Appointment Date" />
				<input className={styles.input} type="time" placeholder="Select Time" />
				<textarea className={styles.textarea} placeholder="Type your essential message here..."></textarea>
				
				<button className={styles.button} type="submit">Book Appointment</button>
			</form>
		</div>
	);
};

export default AppointmentForm;
