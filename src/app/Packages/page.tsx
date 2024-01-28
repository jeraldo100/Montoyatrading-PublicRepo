import React from 'react'
import client from '@/components/sanity.client'
import styles from '@/styles/PagesCSS/PackagesPage.module.scss'
import { Packs } from '../interfaces'
import { groq } from 'next-sanity'
import PackageCardsContainer from '@/components/PackageCardsContainer'
import SearchBarPackagesPage from '@/components/SearchBarPackagesPage'
import Pagination from '@/components/Pagination';
import NotFound from '@/components/NotFound';

export const revalidate = 10800

async function PackagesPage({ searchParams }) {
	const search = searchParams.search ? searchParams.search : '';
	const page = searchParams.page ? Number(searchParams.page) : 1;

	const defaultSlice = 8;
	const itemEnd= page * defaultSlice;
	const itemStart = itemEnd - defaultSlice;
	const pageSlice = `[${itemStart}...${itemEnd}]`;

	const query: string = (
		search == '' ?
			`*[_type == "packages"]` :
				`*[_type == "packages" && name match '*${search}*']`
	);

	const packs = await GetPackagelist(query, pageSlice)
	const packageLists : Array<Packs> = packs.packageLists;

	return (
		<>
			<div className={styles.packageListContainer}>
				<SearchBarPackagesPage />
				{packs.packageNums >= 1 ? 
					<div className={styles.packList}>
						<PackageCardsContainer
							packageLists={packageLists}
						/>
						{packs.packageNums >=  defaultSlice?
							<Pagination
								queryNums={packs.packageNums}
								defaultSlice={defaultSlice}
							/> :
								<></>
						}
					</div> :
						<NotFound />
				}
			</div>
		</>
	)
}

async function GetPackagelist(query: string, pageSlice: string){
    const packs = await client.fetch( 
		groq`{
			"packageNums": count(${query}),
			"packageLists": ${query} | order(_createdAt desc){
				_id,
				name,
				"slug": slug.current,
				"thumbPic": thumbPic.asset->url,
				description,
				"inclusionsCount": count(inclusions),
			}${pageSlice}
		}`, { next: { revalidate: 10800 } }
	);
    
    return packs
}

export default PackagesPage