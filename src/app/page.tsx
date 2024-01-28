import styles from '@/styles/PagesCSS/Home.module.scss'
import client from '@/components/sanity.client';
import { Products, HomeCarouselPics, Packs, Stats } from './interfaces';
import Link from 'next/link'
import HomeCarousel from '@/components/HomeCarousel'
import Headline from '@/components/Headline';
import HorizontalProductsContainer from '@/components/HorizontalProductsContainer';
import PackageCardsContainer from '@/components/PackageCardsContainer';
import CategorySelection from '@/components/CategorySelection';
import Brands from '@/components/Brands';
import Statistics from '@/components/Statistics';
import { roboto300, roboto500 } from './fonts';
import { BiSolidChevronsRight } from "react-icons/bi";

export const revalidate = 10800

async function Home() {
	const homeQuery = await getHomeQuery()
	const products: Array<Products> = homeQuery.products;
	const homeCarouselPics: Array<HomeCarouselPics> = homeQuery.homeCarouselPics;
	const packageLists: Array<Packs> = homeQuery.packageLists;
	const statistics: Stats = homeQuery.statistics;

	return (
		<main>
			<HomeCarousel 
				homeCarouselPics={ homeCarouselPics }
			/>
			
			{/* Headline Conatainer */}
			<div className={styles.headlineContainer}>
				<Headline />
			</div>

			{/* New Arrivals of products Container only displays 10 newest items  */}
			<div className={styles.section}>
				<div className={styles.selectionHeader}>
					<h2 className={`${styles.selectionHeaderText} ${roboto500.className}`}>New Arrivals</h2>
					<Link 
						href="/Products" 
						className={`${styles.viewMore} ${roboto300.className}`}>
							View More <BiSolidChevronsRight className={styles.icons} />
					</Link>
				</div>
				
				<HorizontalProductsContainer 
					products={ products }
				/>
			</div>

			{/* Category Selection Container */}
			<div className={styles.subsection}>
				<CategorySelection />
			</div>

			{/* Preview of packages Container only displays 6 newest items  */}
			<div className={styles.packagesContainer}>
				<div className={styles.selectionHeader}>
					<h2 className={`${styles.selectionHeaderText} ${roboto500.className}`}>Check out our Packages</h2>
					<Link 
						href="/Packages" 
						className={`${styles.viewMore} ${roboto300.className}`}>
							View More <BiSolidChevronsRight className={styles.icons} />
					</Link>
				</div>
				
				<PackageCardsContainer 
					packageLists={ packageLists }
				/>
			</div>

			{/* Featured Brands Container */}
			<div className={styles.subsection}>
				<Brands />
			</div>
			<div className={styles.section}>
				<Statistics
					stats={statistics}
				/>
			</div>
		</main>
	)
}

//All Queries from Sanity
async function getHomeQuery(){
	const homeQuery = await client.fetch(
		`{
			"products": *[_type == "products"] | order(_createdAt desc){
				_id,
				name,
				"slug": slug.current,
				"thumbPic": thumbPic.asset->url,
			}[0...10],
			"homeCarouselPics": *[_type == "homeCarouselPics"]{
				_id,
				name,
				"pics": pic.asset->url,
			},
			"packageLists": *[_type == "packages"] | order(_createdAt desc){
				_id,
				name,
				"slug": slug.current,
				"thumbPic": thumbPic.asset->url,
				description,
				"inclusionsCount": count(inclusions),
			}[0...6],
			"statistics": *[_type == "statistics"]{
				repairs,
				clients,
				soldProducts,
			}[0]
		}`, { next: { revalidate: 10800 } }
	);
	return homeQuery
}

export default Home
