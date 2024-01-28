import React from 'react'
import client from '@/components/sanity.client';
import { Product } from '@/app/interfaces';
import { groq } from "next-sanity";
import ProductInfo from '@/components/ProductInfo';

export const revalidate = 10800

async function ProductPage({ params }: { params: { slug: string } }) {
	const product: Product = await GetProductInfo( params )

	return (
		<>
			<ProductInfo 
				product = {product}
			/>
		</>
	)
}

// Generate Metadata for products
export async function generateMetadata({ params } : { params: { slug: string } }){
	const product: Product = await client.fetch(
		groq`*[_type == "products" && slug.current == '${ params.slug }']{
			name,
			description,
			"thumbPic": thumbPic.asset->url,
		}[0]`, { next: { revalidate: 10800 } }
	);
	const productName = `${product.name} | Montoya Trading`;
	const productDescription = product.description.slice(0, 150);
	return {
		title: productName,
		description: productDescription,
		openGraph: {
			title: productName,
			description: productDescription,
			url: `https://www.montoyatrading.com/Products/${ params.slug }`,
			images: [
				{
					url: 'https://www.montoyatrading.com/images/logo-white-background.png',
					width: 600,
					height: 600,
				},
			],
		}
	}
}

// Statically generate routes at build time instead of on-demand at request time
export async function generateStaticParams() {
	const query = groq`*[_type == "products"]{
		slug {
			current
		}
	}`;
	const productLists = await client.fetch(query, { next: { revalidate: 10800 } });

	return productLists.map((productList) => ({
		slug: productList.slug.current,
	}))
}
 
// Fetching Data of product from Sanity 
async function GetProductInfo( params: { slug: string }  ){
    const product: Product = await client.fetch(
		groq`*[_type == "products" && slug.current == '${ params.slug }']{
			_id,
			name,
			"thumbPic": thumbPic.asset->url,
			brand,
			description,
			"specs": specs[]{specType, specVal},
			"packagedIn": *[_type=='packages' && references(^._id)] | order(_createdAt desc){
				_id,
				name,
				"slug": slug.current,
				"thumbPic": thumbPic.asset->url,
				description,
				"inclusionsCount": count(inclusions),
			}[0...5]
		}[0]`, { next: { revalidate: 10800 } }
	);
  
    return product
}

export default ProductPage