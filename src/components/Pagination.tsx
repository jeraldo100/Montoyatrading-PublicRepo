'use client'
import React from 'react'
import styles from '@/styles/Pagination.module.scss'
import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import { roboto300 } from '@/app/fonts'
import { BiSolidChevronsLeft, BiSolidChevronsRight } from "react-icons/bi";

function Pagination({ queryNums, defaultSlice } : { queryNums : number, defaultSlice : number }) {

	const router = useRouter();
	const searchParams = useSearchParams();
	const pathname = usePathname()

	const page = searchParams.get('page') ? Number(searchParams.get('page')) : 1; 
	
	const lastPage = Math.ceil(queryNums / defaultSlice);

	const pageParams = new URLSearchParams(Array.from(searchParams.entries()));

	const handleFirstBtn = () => {
		pageParams.delete('page');
		router.push(`${pathname}?${pageParams.toString()}`)
	}
	const handlePageBtn = (pageNum) => {
		pageParams.set('page', pageNum);
		router.push(`${pathname}?${pageParams.toString()}`)
	}
	const handleLastBtn = () => {
		pageParams.set('page', String(lastPage));
		router.push(`${pathname}?${pageParams.toString()}`)
	}

	const pageNums: Array<number> = [];
	if(lastPage <= 3){
		for(let i = 1; i <= lastPage; i++) {
			pageNums.push(i);
		}
	}else if (page <= 1){
		for(let i = page; i <= (page + 2); i++) {
			pageNums.push(i);
		}
	}else if(page >= lastPage){
		for(let i = (page - 2); i <= page; i++) {
			pageNums.push(i);
		}
	}else{
		for (let i = (page - 1); i <= (page + 1); i++) {
			pageNums.push(i);
		}
	}
	
	return (
	<>
		<div className={`${styles.paginationContainer} ${roboto300.className}`}>

			{page !=1 ?
				<div 
					className={styles.first}
					onClick={handleFirstBtn}
				> 
					<BiSolidChevronsLeft className={styles.btnIcon} /> First
				</div> :
					<div 
						className={styles.first}
						style={{opacity: '0.5'}}
					>
						<BiSolidChevronsLeft className={styles.btnIcon} /> First
					</div>
			}	
			<div className={styles.pageNums}>
				{pageNums.map((pageNum) => {
					return(
						pageNum == page ? 
						<div 
							className={styles.page}
							style={{backgroundColor: '#62A388', color: 'white'}}
						>
							{pageNum}
						</div> :
							<div 
								className={styles.page}
								onClick={() => handlePageBtn(pageNum)}
							>
								{pageNum}
							</div>
					);
				})}
			</div>
			{page >= lastPage ?
				<div 
					className={styles.last}
					style={{opacity: '0.5'}}
				>
					Last <BiSolidChevronsRight className={styles.btnIcon} />
				</div> :
					<div 
						className={styles.last}
						onClick={handleLastBtn}
					>
						Last <BiSolidChevronsRight className={styles.btnIcon} />
					</div>
			}
		</div>
	</>
	)
}

export default Pagination