import React from 'react'
import styles from '@/styles/PackageCardsContainer.module.scss'
import { Packs } from '@/app/interfaces'
import PackageCard from './PackageCard'

function PackageCardsContainer({ packageLists } : { packageLists : Array<Packs> }) {
	return (
		<div className={styles.PackageCardsContainer}>
			{packageLists.map((pack) => { 
				return(
					<>
						<PackageCard
							pack={pack}
						/>
					</>
				)
			})}
		</div>
	)
}

export default PackageCardsContainer