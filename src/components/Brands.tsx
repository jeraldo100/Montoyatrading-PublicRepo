'use client'
import React from 'react'
import styles from '@/styles/Brands.module.scss'
import { useInView, animated } from '@react-spring/web'
import Image from 'next/image'

function Brands() {
	const [ref, springs] = useInView(
		() => ({
			from: {
				opacity: 0,
				y: 100,
			},
			to: {
				opacity: 1,
				y: 0,
			},
			config: {
				tension: 120,
				friction: 14,
				precision: 0.001
			},
		}),
		{
			once: true,
		}
	)

	return (
		<>
			<div className={styles.brandsContainer}>
				<h3 className={styles.header}>
					Features Trusted Brands
				</h3>
				<animated.div ref={ref} style={springs}>
					<div className={styles.brands}>
						<a href='https://www.epson.com.ph/' target="_blank">
							<div className={styles.logoContainer}>
								<Image
									src='/brands/epson-png.png'
									alt='epson logo'
									fill={true}
									style={{objectFit: "contain"}}
									quality={40}
								/>
							</div>
						</a>
						<a href='https://www.hidglobal.com/' target="_blank">
							<div className={styles.logoContainer}>
								<Image
									src='/brands/hid-png.png'
									alt='HID logo'
									fill={true}
									style={{objectFit: "contain"}}
									quality={40}
								/>
							</div>
						</a>
						<a href='https://www.anviz.com/' target="_blank">
							<div className={styles.logoContainer}>
								<Image
									src='/brands/anviz-png.png'
									alt='anviz logo'
									fill={true}
									style={{objectFit: "contain"}}
									quality={40}
								/>
							</div>
						</a>
						<a href='https://www.xprintertech.com/' target="_blank">
							<div className={styles.logoContainer}>
								<Image
									src='/brands/xprinter-png.png'
									alt='xprinter logo'
									fill={true}
									style={{objectFit: "contain"}}
									quality={40}
								/>
							</div>
						</a>
						<a href='https://www.honeywell.com/us/en' target="_blank">
							<div className={styles.logoContainer}>
								<Image
									src='/brands/Honeywell-Logo.png'
									alt='Honeywell logo'
									fill={true}
									style={{objectFit: "contain"}}
									quality={40}
								/>
							</div>
						</a>
						<a href='https://www.facebook.com/UniUbiGlobal/' target="_blank">
							<div className={styles.logoContainer}>
								<Image
									src='/brands/uni-ubi.png'
									alt='uni-ubi logo'
									fill={true}
									style={{objectFit: "contain"}}
									quality={40}
								/>
							</div>
						</a>
						<a href='https://www.hidglobal.com/products/digitalpersona' target="_blank">
							<div className={styles.logoContainer}>
								<Image
									src='/brands/digital-persona.png'
									alt='digital persona logo'
									fill={true}
									style={{objectFit: "contain"}}
									quality={40}
								/>
							</div>
						</a>
					</div>
				</animated.div>
			</div>
		</>
	)
}

export default Brands