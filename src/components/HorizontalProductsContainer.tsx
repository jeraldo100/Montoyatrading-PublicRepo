import React from 'react'
import styles from '@/styles/HorizontalProductsContainer.module.scss'
import { Products } from '@/app/interfaces'
import ProductCard from './ProductCard'

function HorizontalProductsContainer({ products } : { products : Array<Products>}) {
	return (
		<div className={styles.container}>
			{products.map((product) => {
				return(
					<>
						<ProductCard
							product={product}
							setWidth={true}
						/>
					</>
				)
			})}
		</div>
	)
}

export default HorizontalProductsContainer