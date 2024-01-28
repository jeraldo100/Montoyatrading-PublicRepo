import React from 'react'
import Link from 'next/link'
import styles from '@/styles/PackageCard.module.scss'
import { Packs } from '@/app/interfaces'
import { roboto300, roboto700 } from '@/app/fonts'

function PackageCard( { pack } : {pack : Packs} ) {
	return (
		<>
			<div
				key={ pack._id }
				className={styles.packageCard}
			>
				{/* Image Container */}
				<div className={styles.imgContainer}>
					<img className={styles.image} src={`${ pack.thumbPic }?q=40`} alt={ pack.name } />
				</div>
				{/* Name Description Inclusion-Number and Button Container */}
				<div className={styles.infoContainer}>
					<h3 className={`${roboto700.className} ${styles.name}`}>
						{ pack.name }
					</h3>
					<div className={styles.descContainer}>
						<pre className={`${styles.description} ${roboto300.className}`}>{ pack.description }</pre>
					</div>
					{/* Inclusion Number and Button Container */}
					<div className={styles.btns}>
						<div className={`${styles.totalItems} ${roboto300.className}`}>
							INCLUSIONS: { pack.inclusionsCount }
						</div>
						<Link href={`/Packages/${ pack.slug }`} style={{ textDecoration: 'none' }}>
							<div className={`${styles.detailsBtn} ${roboto300.className}`}>
								DETAILS
							</div>
						</Link>
					</div>
				</div>

			</div>
		</>
	)
}

export default PackageCard