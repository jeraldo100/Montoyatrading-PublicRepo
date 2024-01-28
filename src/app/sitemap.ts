import client from '@/components/sanity.client';
import { groq } from 'next-sanity';

interface SlugAndDate {
	slug: string
	_updatedAt: Date
}

const URL = "https://www.montoyatrading.com";
 
export default async function sitemap() {

	const products: Array<SlugAndDate> = await GetProducts();
	const packs: Array<SlugAndDate> = await GetPacks();

	const productsSitemap = products.map((product) => ({
		url: `${URL}/Products/${product.slug}`,
		lastModified: product._updatedAt,
		priority: 0.7,
	}))

	const packsSitemap = packs.map((pack) => ({
		url: `${URL}/Packages/${pack.slug}`,
		lastModified: pack._updatedAt,
		priority: 0.6,
	}))

	return [
		{
			url: URL,
			lastModified: new Date(),
			priority: 1,
		},
		{
			url: `${URL}/Products`,
			lastModified: new Date(),
			priority: 0.9,
		},
		{
			url: `${URL}/Packages`,
			lastModified: new Date(),
			priority: 0.8,
		},
		{
			url: `${URL}/AboutUs`,
			lastModified: new Date(),
			priority: 0.4,
		},
		{
			url: `${URL}/ContactUs`,
			lastModified: new Date(),
			priority: 0.5,
		},
		...productsSitemap,
		...packsSitemap
	];
}

//Getting product list
async function GetProducts(){
	const products: Array<SlugAndDate> = await client.fetch(
		groq`*[_type == "products"]{
			"slug": slug.current,
			_updatedAt
		}`, { next: { revalidate: 43200 } }
	);
	return products
}

//Getting product list
async function GetPacks(){
	const products = await client.fetch(
		groq`*[_type == "packages"]{
			"slug": slug.current,
			_updatedAt
		}`, { next: { revalidate: 43200 } }
	);
	return products
}