import React from 'react'
import styles from '@/styles/PagesCSS/ContactUs.module.scss';
import { roboto300, roboto500, roboto700 } from '@/app/fonts';
import { BiSolidEnvelope, BiLogoFacebookCircle, BiSolidMap } from "react-icons/bi";
import { FaViber } from "react-icons/fa";

function ContactUs() {
	return (
		<>
			<h1 className={`${styles.header} ${roboto300.className}`}>
				Contact Us
			</h1>
			<div className={styles.contactsContainer}>
				<div className={styles.contact}>
					<BiSolidEnvelope className={styles.icon} />
					<div className={`${styles.contactHeader1} ${roboto700.className}`}>By Email:</div>
					<div className={`${styles.contactHeader2} ${roboto500.className}`}>montoya_trading@yahoo.com</div>
					{/* <p className={`${styles.contactText} ${roboto300.className}`}>
						
					</p> */}
				</div>
				<div className={styles.contact}>
					<FaViber className={styles.icon} />
					<div className={`${styles.contactHeader1} ${roboto700.className}`}>Through Viber:</div>
					<div className={`${styles.contactHeader2} ${roboto500.className}`}>+639195956096</div>
					{/* <div className={`${styles.contactText} ${roboto300.className}`}>gdfgdfgdfgdgdf</div> */}
				</div>
				<div className={styles.contact}>
					<BiLogoFacebookCircle className={styles.icon} />
					<div className={`${styles.contactHeader1} ${roboto700.className}`}>Through Facebook:</div>
					<div className={`${styles.contactHeader2} ${roboto500.className}`}>
						<a href='https://www.facebook.com/montoyatrading/'>https://www.facebook.com/montoyatrading/</a>
					</div>
					{/* <div className={`${styles.contactText} ${roboto300.className}`}>gdfgdfgdfgdgdf</div> */}
				</div>
				<div className={styles.contact}>
					<BiSolidMap className={styles.icon} />
					<div className={`${styles.contactHeader1} ${roboto700.className}`}>Visit Us:</div>
					<div className={`${styles.contactHeader2} ${roboto500.className}`}>Valenzuela City, Philippines</div>
					{/* <div className={`${styles.contactText} ${roboto300.className}`}>gdfgdfgdfgdgdf</div> */}
				</div>
			</div>
		</>
	)
}

export default ContactUs