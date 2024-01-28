'use client'
import React from 'react'
import styles from '@/styles/CategorySelection.module.scss'
import { useInView, animated } from '@react-spring/web'
import { useRouter } from 'next/navigation'
import { roboto300, roboto700 } from '@/app/fonts'
import { AiFillPrinter } from 'react-icons/ai';
import { FiMonitor } from 'react-icons/fi';
import { BsUpcScan, BsFingerprint } from 'react-icons/bs';
import { ImDrawer } from 'react-icons/im';
import { FaToiletPaper } from 'react-icons/fa';

function CategorySelection() {
	const router = useRouter();

	const [ref, springs] = useInView(
		() => ({
			from: {
				opacity: 0,
				x: 100,
			},
			to: {
				opacity: 1,
				x: 0,
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
			<div className={styles.categorySelection}>
				<h3 className={`${styles.header} ${roboto700.className}`}>Browse by Category</h3>
				<animated.div ref={ref} style={springs}>
					<div className={styles.btns}>
						<div 
							className={`${styles.btn} ${roboto300.className}`}
							onClick={() => router.push('/Products?category=printer')}
						>
							<AiFillPrinter className={styles.icon} /> Printers
						</div>
						<div 
							className={`${styles.btn} ${roboto300.className}`}
							onClick={() => router.push('/Products?category=monitorScreen')}
						>
							<FiMonitor className={styles.icon} /> Monitors/Screens
						</div>
						<div 
							className={`${styles.btn} ${roboto300.className}`}
							onClick={() => router.push('/Products?category=scanner')}
						>
							<BsUpcScan className={styles.icon} /> Scanners
						</div>
						<div 
							className={`${styles.btn} ${roboto300.className}`}
							onClick={() => router.push('/Products?category=cashDrawer')}
						>
							<ImDrawer className={styles.icon} /> Cash Drawers
						</div>
						<div 
							className={`${styles.btn} ${roboto300.className}`}
							onClick={() => router.push('/Products?category=biometricSystem')}
						>
							<BsFingerprint className={styles.icon} /> Biometric Systems
						</div>
						<div 
							className={`${styles.btn} ${roboto300.className}`}
							onClick={() => router.push('/Products?category=consumables')}
						>
							<FaToiletPaper className={styles.icon} /> Consumables
						</div>
					</div>
				</animated.div>
			</div>
		</>
	)
}

export default CategorySelection