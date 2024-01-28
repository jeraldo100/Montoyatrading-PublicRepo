import React from 'react'
import styles from '@/styles/Headline.module.scss'
import Link from 'next/link';
import Image from 'next/image'
import { roboto300, roboto700 } from '@/app/fonts';

function Headline() {
	return (
		<>
			<div className={styles.headline}>
				<h1 className={`${styles.headlineHeader} ${roboto700.className}`}>
					The Best Retailer for POS System goods in the Philippines
				</h1>
				<br />
				<div className={styles.headlineBody}>
					<div className={styles.headlineBodyImgContiainer}>
						<Image 
							className={styles.headlineBodyImg} 
							fill={true}
							src='/close-up-baker-bakery-shop.jpg' 
							style={{objectFit: "contain", borderRadius: '1em'}}
							quality={50}
							alt='POS system setup Image by Freepik' 
						/>
					</div>
					<div className={styles.headlineBodyRight}>
						<h3 className={`${styles.headlineBodyText} ${roboto300.className}`}>
							Welcome to Montoya Trading, your trusted partner in the world of Point of Sale (POS) hardware solutions. Since our establishment in 2015, we&apos;ve been dedicated to providing top-notch services to businesses of all sizes.
							<br /><br />
							We offer a wide range of high-quality POS hardware solutions to streamline your business operations.
						</h3>
						<Link href='/AboutUs' className={`${styles.headlineBodyBtn} ${roboto300.className}`}>
							Read more
						</Link>
					</div>
				</div>
			</div>
		</>
	)
}

export default Headline