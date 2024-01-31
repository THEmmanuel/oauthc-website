import React from 'react';
import styles from './Home.module.css';
import backgroundVideo from './background-video.mp4'; // Replace with the path to your video file
import ServiceCard from '../../Components/ServiceCard/ServiceCard';
import AppointmentForm from '../../Components/AppointmentForm/AppointmentForm';
import Calendar from 'react-calendar';
import renalImage from '../../assets/GERIATRIC.png'
import laparascopyImage from '../../assets/GERIATRIC2.png'
import surgeryImage from '../../assets/GERIATRIC3.png'
import doc from '../../assets/doc.png'

const Home = () => {
	return (
		<div>
			<div className={styles.heroSection}>
				<video autoPlay muted loop className={styles.videoBackground}>
					<source src={backgroundVideo} type="video/mp4" />
					Your browser does not support the video tag.
				</video>
				<div className={styles.HeroContent}>
					<h1 className={styles.HeroTitle}>Your Health, Our Priority</h1>
					<div className={styles.HeroButtons}>
						<button className={styles.ButtonPrimary}>Book an Appointment</button>
						<span>|</span>
						<button className={styles.ButtonSecondary}>Find a Doctor</button>
					</div>
				</div>
			</div>

			<div className={styles.ServicesSection}>
				<div className={styles.SectionTitle}>
					<span className={styles.SectionTitleText}>
						Our services
					</span>
					<span>What we provide</span>
				</div>

				<div className={styles.ServiceCardsWrapper}>
					<ServiceCard
						image={renalImage}
						title='Renal transplant'
						description='tetstdd tydtdttd dtdtd td'
					/>

					<ServiceCard
						image={laparascopyImage}
						title='Renal transplant'
						description='tetstdd tydtdttd dtdtd td'
					/>

					<ServiceCard
						image={surgeryImage}
						title='Renal transplant'
						description='tetstdd tydtdttd dtdtd td'
					/>
				</div>

				<button className={styles.ButtonPrimaryBlack}>
					View more
				</button>
			</div>

			<div className={styles.AppointmentSection}>
				<span className={styles.SectionTitle}>
					<p className={styles.SectionTitleText}>Your Health, Your Time</p>
					<p className={styles.SectionText}>Book your appointmenty with ease</p>
					<p className={styles.confirmationNote}>
						Your booking is confirmed after PAYMENT; please be patient, as
						CONFIRMATION PROCESS takes 24-48 HOURS
					</p>
				</span>


				<div>
					<AppointmentForm />
				</div>
			</div>

			<section className={styles.testimonialsSection}>
				<div className={styles.TestimonialContentWrapper}>
					<div className={styles.testimonialContent}>
						<h2>Testimonials</h2>
						<p className={styles.testimonialText}>
							"Lorem ipsum dolor sit amet consectetur. Maecenas mattis aliquam velit dui varius.
							Elit orci massa dui turpis sollicitudin. Duis turpis sapien rutrum aliquam pellentesque.
							Cursus sagittis at nunc enim eget mus nascetur. In nisl."
						</p>
						<div className={styles.rating}>
							★★★★★
						</div>
						<div className={styles.testimonialAuthor}>
							John Okpara
						</div>
						<div className={styles.feedbackButtons}>
							<button className={styles.feedbackButton}>Give a Feedback</button>
							<button className={styles.feedbackButton}>Find a Doctor</button>
						</div>
					</div>
					<div className={styles.testimonialImage}>
						<img src={doc} alt="Doctor" className={styles.image} />
					</div>
				</div>
			</section>

			<Calendar />

			<section className={styles.healthDaysSection}>
				<div className={styles.eventCard}>
					<div className={styles.eventContent}>
						<h3 className={styles.eventTitle}>World Antimicrobial Awareness Week</h3>
						<p className={styles.eventDate}>Saturday, November 1-19 - Friday, November 24, 2023</p>
						<p className={styles.eventDescription}>
							"Preventing Antimicrobial Resistance Together"
						</p>
					</div>
					<button className={styles.viewMoreButton}>Join the Celebration For today!</button>
				</div>
				<div className={styles.calendarCard}>
					<div className={styles.calendarContent}>
						<h3 className={styles.calendarTitle}>Save the Date Health Days</h3>
						{/* Include a calendar component or a static calendar layout here */}
						<div className={styles.calendarDate}>
							<span>World Cancer Day</span>
							<span>November 23</span>
						</div>
						<p className={styles.calendarDescription}>
							Lorem ipsum dolor sit amet consectetur...
						</p>
					</div>
					<button className={styles.viewMoreButton}>Read more</button>
				</div>
			</section>


			<>
				<div className={styles.locationsHeader}>
					<h2 className={styles.locationsTitle}>Locations</h2>
					<p className={styles.locationsDescription}>
						Lorem ipsum dolor sit amet consectetur. Lectus amet suspendisse donec a vel
						euismod a lectus.
					</p>
				</div>

				<section className={styles.locationsSection}>
					{/* Repeat this structure for each location */}
					<div className={styles.locationCard}>
						<div className={styles.locationImage}>
							<div className={styles.locationTitle}>Wesley Guild Hospital Unit Ilesha</div>
						</div>
					</div>

					<div className={styles.locationCard}>
						<div className={styles.locationImage}></div>
						<div className={styles.locationTitle}>Wesley Guild Hospital Unit Ilesha</div>
					</div>

					<div className={styles.locationCard}>
						<div className={styles.locationImage}></div>
						<div className={styles.locationTitle}>Wesley Guild Hospital Unit Ilesha</div>
					</div>

					<div className={styles.locationCard}>
						<div className={styles.locationImage}></div>
						<div className={styles.locationTitle}>Wesley Guild Hospital Unit Ilesha</div>
					</div>
				</section>
			</>

			<footer className={styles.footer}>
				{/* Repeat for each column */}
				<div className={styles.footerColumn}>
					<h3 className={styles.footerTitle}>Contact</h3>
					{/* List of links */}
					<a href="#link" className={styles.footerLink}>Lorem ipsum</a>
					{/* Repeat for other links */}
				</div>

				{/* Newsletter Signup */}
				<div className={styles.newsletterSignup}>
					<h3 className={styles.newsletterTitle}>Subscribe to our newsletter</h3>
					<p>The latest news, articles, and resources, sent to your inbox monthly.</p>
					<input type="email" placeholder="Enter your email" className={styles.emailInput} />
					<button className={styles.subscribeButton}>Subscribe</button>
				</div>

				{/* Copyright Text */}
				<div className={styles.copyRight}>
					© 2023 OAUTHC. All rights reserved.
				</div>
			</footer>
		</div>
	)
}

export default Home;