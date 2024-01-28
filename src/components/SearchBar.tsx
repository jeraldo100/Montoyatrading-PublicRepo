'use client'
import React from 'react'
import styles from '@/styles/SearchBar.module.scss'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { roboto300 } from '@/app/fonts'
import { BiSearch, BiChevronRight } from "react-icons/bi";

function SearchBar() {
	const router = useRouter();
	const searchParams = useSearchParams()
	
	// Get Initial search and category values from URL
	const search = searchParams.get('search') ? searchParams.get('search') : ""; 
	const category = searchParams.get('category') ? searchParams.get('category') : "any";

	const [inputSearch, setInputSearch] = useState(search);
	const [inputCategory, setInputCategory] = useState(category);

	// Category array of Items for Category Dropdown Button
	const categoryItems = [
		{categoryEncoded: 'printer', categoryDecoded: 'Printer'},
		{categoryEncoded: 'monitorScreen', categoryDecoded: 'Monitor/Screen'},
		{categoryEncoded: 'scanner', categoryDecoded: 'Scanner'},
		{categoryEncoded: 'cashDrawer', categoryDecoded: 'Cash Drawer'},
		{categoryEncoded: 'biometricSystem', categoryDecoded: 'Biometric System'},
		{categoryEncoded: 'consumables', categoryDecoded: 'Consumables'},
	];
	
	// Decode category string to human readable
	const categoryDecode = (inputCategory: string) => {
		switch(inputCategory){
			case 'any':
				return 'Category';
			case 'printer':
				return 'Printer';
			case 'monitorScreen':
				return 'Monitor/Screen';
			case 'scanner':
				return 'Scanner';
			case 'cashDrawer':
				return 'Cash Drawer';
			case 'biometricSystem':
				return 'Biometric System';
			case 'consumables':
				return 'Consumables';
		}
	}
	const [categoryBtn, setCategoryBtn] = useState(categoryDecode(inputCategory));

	// toggle states for category dropdown button
	const [toggle, setToggle] = useState(false);
	const [toggleRotate, setToggleRotate] = useState(false)

	// handler for Category Button
	const handleCategoryBtn = (newInputCategory: string) => {
		setInputCategory(newInputCategory);
		setCategoryBtn(categoryDecode(newInputCategory));
		setToggle(!toggle);
		setToggleRotate(!toggleRotate);
	}

	// Search Button Handle
	const submitSearch = (e) => {
		e.preventDefault();
		const encodedInputSearch = encodeURI(inputSearch);
		const pushURL = (
			// If Search is not empty and Category is set to any
			inputSearch !=='' && inputCategory =='any' ? 
				`/Products?search=${encodedInputSearch}` :
			// If Search is empty and Category is Selected
			inputSearch =='' && inputCategory !=='any' ? 
				`/Products?category=${inputCategory}` :
			// If both is used
			inputSearch !=='' && inputCategory !=='any' ? 
				`/Products?search=${encodedInputSearch}&category=${inputCategory}` : 
			// If both is empty
			`/Products`
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
			{/* Category Dropdown Button */}
			<div className={`${styles.category} ${roboto300.className}`} >
				<div 
					className={styles.categoryBtn}
					onClick={() => {
						handleCategoryBtn('any');
					}}>
					{categoryBtn} <BiChevronRight 
						className={styles.btnIcon} 
						style={{transform: toggleRotate ? 'rotate(90deg)' : 'rotate(0deg)'}}
					/>
				</div>
				<div className={styles.categoryDropdown} style={{ display: toggle ? 'block' : 'none' }}>
					{categoryItems.map((categoryItem) => {
						return(
							<>
								<div 
									className={styles.option} 
									onClick={() => {
										handleCategoryBtn(categoryItem.categoryEncoded);
									}}
								>
									{categoryItem.categoryDecoded}
								</div>
							</>
						);
					})}
				</div>
			</div>
			{/* Search Button */}
			<div className={`${styles.btn} ${roboto300.className}`} onClick={submitSearch}>
				Search <BiSearch className={styles.btnIcon} />
			</div>
		</form>
	</>
	)
}

export default SearchBar