import React from 'react'
import styles from '@/styles/NotFound.module.scss'
import { BiConfused } from "react-icons/bi";
import { roboto300 } from '@/app/fonts';

function NotFound() {
  return (
	<>
		<div className={styles.notFound}>
			<BiConfused className={styles.icon} />
			<h1 className={`${styles.text} ${roboto300.className}`}>
				Sorry we can&apos;t find what you are looking for.
			</h1>
		</div>
	</>
  )
}

export default NotFound