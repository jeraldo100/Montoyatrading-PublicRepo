'use client'
import React from 'react'
import styles from '../styles/Footer.module.scss';
import { useRouter } from 'next/navigation'
import Image from 'next/image';
import { BsFacebook } from "react-icons/bs";
import { roboto300 } from '@/app/fonts';

function Footer() {
	const router = useRouter();

	return (
		<div className={styles.footer}>
			<div className={styles.footerContainer}>
				<div className={styles.top}>
					<div className={styles.logoAndCopyright}>
						<div className={styles.logoContainer}>
							<Image src='/images/logo-png-white.png' fill={true} alt='Montoya Trading logo white' />
						</div>
						<p className={`${styles.copyright} ${roboto300.className}`}>© Montoya Trading. All rights reserved.</p>
					</div>
				</div>
				<div className={styles.support}>
					<p 
						className={`${styles.links} ${roboto300.className}`}
						onClick={() => router.push('/AboutUs')}
					>
						About Us
					</p>
					<p 
						className={`${styles.links} ${roboto300.className}`}
						onClick={() => router.push('/ContactUs')}
					>
						Contact Us
					</p>
					<p 
						className={`${styles.links} ${roboto300.className}`}
						onClick={() => router.push('/Products')}
					>
						Products
					</p>
					<p 
						className={`${styles.links} ${roboto300.className}`}
						onClick={() => router.push('/Packages')}
					>
						Packages
					</p>
				</div>

				<div className={styles.products}>
					<p 
						className={`${styles.links} ${roboto300.className}`}
						onClick={() => router.push('/Products?category=printer')}
					>
						Printers
					</p>
					<p 
						className={`${styles.links} ${roboto300.className}`}
						onClick={() => router.push('/Products?category=monitorScreen')}
					>
						Monitors/Screens
					</p>
					<p 
						className={`${styles.links} ${roboto300.className}`}
						onClick={() => router.push('/Products?category=scanner')}
					>
						Scanners
					</p>
					<p 
						className={`${styles.links} ${roboto300.className}`}
						onClick={() => router.push('/Products?category=cashDrawer')}
					>
						Cash Drawers
					</p>
					<p 
						className={`${styles.links} ${roboto300.className}`}
						onClick={() => router.push('/Products?category=biometricSystem')}
					>
						Biometric Systems
					</p>
					<p 
						className={`${styles.links} ${roboto300.className}`}
						onClick={() => router.push('/Products?category=consumables')}
					>
						Consumables
					</p>
				</div>

				<div className={styles.socials}>
					<a href = "https://www.facebook.com/montoyatrading/" target="_blank" style={{textDecoration: 'none'}}>
						
						<p 
							className={`${styles.links} ${roboto300.className}`}
						>
							<BsFacebook className={styles.icons} /> Facebook
						</p>
					</a>
				</div>
				<div className={styles.top}>
					<div className={`${styles.contacts} ${roboto300.className}`}>
						<p>Valenzuela City, Philippines</p>
						<p>montoya_trading@yahoo.com</p>
						<p>+639195956096</p>
					</div>
				</div>
			</div>
			<hr className={styles.line} />
			<div className={styles.bottom}>
				<div className={styles.logoAndCopyright}>
					<div className={styles.logoContainer}>
						<Image src='/images/logo-png-white.png' fill={true} alt='Montoya Trading logo white' />
					</div>
					<p className={`${styles.copyright} ${roboto300.className}`}>© Montoya Trading. All rights reserved.</p>
				</div>
				<div className={`${styles.contacts} ${roboto300.className}`}>
					<p>Valenzuela City, Philippines</p>
					<p>montoya_trading@yahoo.com</p>
					<p>+639195956096</p>
				</div>
			</div>
		</div>
	);
}

export default Footer;