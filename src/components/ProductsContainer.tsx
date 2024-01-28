import React from 'react'
import styles from '@/styles/ProductsContainer.module.scss';
import { Products } from '@/app/interfaces';
import ProductCard from './ProductCard';

function ProductsContainer({ products } : { products : Array<Products> }) {
    return(
        <>
            <div className={styles.ProductsContainer}>
                {products.map((product) => {
                    return(
                        <>
                            <ProductCard 
                                product={product}
                                setWidth={false}
                            />
                        </>
                    );
                })}
            </div>
        </>
    );
}

export default ProductsContainer