'use client'
import React from 'react'
import styles from '@/styles/SearchBar.module.scss'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { roboto300 } from '@/app/fonts'
import { BiSearch } from "react-icons/bi";

function SearchBarPackagesPage() {
	const router = useRouter();
	const searchParams = useSearchParams()

	// Get Initial search value from URL
	const search = searchParams.get('search') ? searchParams.get('search') : ""; 
	const [inputSearch, setInputSearch] = useState(search);

	// Search Button Handle
	const submitSearch = (e: React.FormEvent) => {
		e.preventDefault();
		const encodedInputSearch = encodeURI(inputSearch);
		const pushURL = (
			inputSearch !=='' ? 
				`/Packages?search=${encodedInputSearch}` :
					`/Packages`	
		);
		router.push(pushURL);
	}

	return (
		<>
			<form onSubmit={submitSearch} className={styles.searchForm}>
				{/* Search Text Box */}
				<input 
					className={`${styles.textBox} ${roboto300.className}`}
					type='text' 
					name='searchInput'
					placeholder='What are you Looking for?'
					value={inputSearch}
					onChange={(e) => setInputSearch(e.target.value)}
				/>
				{/* Search Button */}
				<div className={`${styles.btn} ${roboto300.className}`} onClick={submitSearch}>
					Search <BiSearch className={styles.btnIcon} />
				</div>
			</form>
		
		</>
	)
}

export default SearchBarPackagesPage