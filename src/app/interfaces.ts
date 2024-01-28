// Types for single product info 
export interface Product {
	_id: string
	name: string
	thumbPic: string
	brand: string
	description: string
	specs?: { 
		specType?: string, 
		specVal?: string 
	}[]
	packagedIn:{
		_id: string
		name: string
		slug: string
		thumbPic: string
		description: string
		inclusionsCount: number
	}[]
}

// Types for single package info
export interface Pack{
	_id: string
	name: string
	thumbPic: string
	description: string
	inclusions:{
		_id: string
		name: string
		slug: string
		thumbPic: string
	}[]
}

// Types for lists of products
export interface Products{
	_id: string
	name: string
	slug: string
	thumbPic: string
}

// Types for lists of packages
export interface Packs{
	_id: string
	name: string
	slug: string
	thumbPic: string
	description: string
	inclusionsCount: number
}

// Types for Home Carousel Pictures
export interface HomeCarouselPics{
	_id: string
	name: string
	pics: string
}

export interface Stats{
	clients: number
	repairs: number
	soldProducts: number
}
