'use client'
import React from 'react'
import styles from '@/styles/Statistics.module.scss'
import { Stats } from '@/app/interfaces'
import { useInView, animated } from '@react-spring/web'
import CountUp from 'react-countup';
import { roboto700 } from '@/app/fonts';
import { MdGroups2 } from 'react-icons/md';
import { BsTools } from 'react-icons/bs';
import { FaBoxes } from 'react-icons/fa';


function Statistics({ stats } : { stats : Stats }) {
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
			rootMargin: '-30% 0px 0px 0px',
			once: true,
		}
	)
	
	return (
		<>
			<animated.div ref={ref} style={springs}>
				<div className={styles.statisticsContainer}>
					<div className={styles.statistic}>
						<MdGroups2 className={styles.icon} />
						<p className={`${styles.text} ${roboto700.className}`}>Over</p>
						<p className={`${styles.stat} ${roboto700.className}`}>
							<CountUp
								start={Math.ceil(stats.clients * 0.8)}
								end={stats.clients}
								duration={5}
								enableScrollSpy
								scrollSpyOnce
							/>
						</p>
						<p className={`${styles.text} ${roboto700.className}`}>Clients Served</p>
					</div>
					<div className={styles.statistic}>
						<BsTools className={styles.icon} />
						<p className={`${styles.text} ${roboto700.className}`}>Estimated</p>
						<p className={`${styles.stat} ${roboto700.className}`}>
							<CountUp
								start={Math.ceil(stats.repairs * 0.8)}
								end={stats.repairs}
								duration={5}
								enableScrollSpy
								scrollSpyOnce
							/>
						</p>
						<p className={`${styles.text} ${roboto700.className}`}>Printer Units Repaired</p>
					</div>
					<div className={styles.statistic}>
						<FaBoxes className={styles.icon} />
						<p className={`${styles.text} ${roboto700.className}`}>Over</p>
						<p className={`${styles.stat} ${roboto700.className}`}>
							<CountUp
								start={Math.ceil(stats.soldProducts * 0.8)}
								end={stats.soldProducts}
								duration={5}
								enableScrollSpy
								scrollSpyOnce
							/>
						</p>
						<p className={`${styles.text} ${roboto700.className}`}>Product Units Sold</p>
					</div>
				</div>
			</animated.div>
		</>
	)
}

export default Statistics