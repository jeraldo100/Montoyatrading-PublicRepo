'use client'
import React from 'react'
import styles from '@/styles/ParagraphPartRight.module.scss'
import { useInView, animated } from '@react-spring/web'
import Image from 'next/image'
import { roboto300, roboto700 } from '@/app/fonts'

function ParagraphPartRight(
		{ 
			imgSrc,
			imgAlt,
			header,
			text 
		} : 
		{
			imgSrc : string,
			imgAlt : string,
			header : string,
			text : string
		}
	)
{
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [ref, springs] = useInView(
		() => ({
			from: {
				opacity: 0,
				x: 100,
			},
			to: {
				opacity: 1,
				x: 0,
			}
		}),
		{
			rootMargin: '-30% 0px -30% 0px',
			once: true,
		}
	)

	return (
		<animated.div ref={ref} style={springs}>
			<div className={styles.paragraphPart}>
				<div className={styles.imageContainer}>
					<Image
						src={imgSrc}
						height={200}
						width={400}
						layout='responsive'
						style={{objectFit: "contain", borderRadius: '0.4rem'}}
						quality={50}
						alt={imgAlt}
					/>
				</div>
				<div className={styles.paragraphOverlay}>
					<h3 className={`${styles.overlayHeader} ${roboto700.className}`}>{header}</h3>
					<p className={`${styles.overlayText} ${roboto300.className}`}>
						{text}
					</p>
				</div>
			</div>
		</animated.div>
	)
}

export default ParagraphPartRight