import React from 'react'
import client from '@/components/sanity.client'
import { Pack } from '@/app/interfaces'
import { groq } from 'next-sanity'
import PackageInfo from '@/components/PackageInfo'

export const revalidate = 10800

async function PackageInfoPage({ params } : { params: { slug: string } }) {
	const pack: Pack = await GetPackageInfo( params )

	return (
		<>
			<PackageInfo
				pack={pack}
			/>
		</>
	)
}

// Generate Metadata for packages
export async function generateMetadata({ params } : { params: { slug: string } }){
	const pack: Pack = await client.fetch(
		groq`*[_type == "packages" && slug.current == '${ params.slug }']{
			name,
			description,
		}[0]`, { next: { revalidate: 10800 } }
	);
	const name = `${pack.name} | Montoya Trading`;
	const description = pack.description.slice(0, 150);
	return {
		title: name,
		description: description,
		openGraph: {
			title: name,
			description: description,
			url: `https://www.montoyatrading.com/Packages/${ params.slug }`,
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

//Statically generate routes at build time instead of on-demand at request time
export async function generateStaticParams() {
	const query = groq`*[_type == "packages"]{
		slug {
			current
		}
	}`;
	const packageLists = await client.fetch(query, { next: { revalidate: 10800 } });

	return packageLists.map((packageList) => ({
		slug: packageList.slug.current,
	}))
}

// Fetching Data of Package from Sanity 
async function GetPackageInfo( params: { slug: string } ){
    const pack: Pack = await client.fetch(
		groq`*[_type == "packages" && slug.current == '${ params.slug }']{
			_id,
			name,
			"thumbPic": thumbPic.asset->url,
			description,
			"inclusions": inclusions[]->{
				_id,
				name,
				"slug": slug.current,
				"thumbPic": thumbPic.asset->url,
			}
    	}[0]`, { next: { revalidate: 10800 } }
	);
  
    return pack
}

export default PackageInfoPage