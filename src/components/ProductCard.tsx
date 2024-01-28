import React from 'react'
import styles from '@/styles/ProductCard.module.scss'
import Link from 'next/link'
import { Products } from '@/app/interfaces';
import { roboto300 } from '@/app/fonts';

function ProductCard({ product, setWidth } : { product : Products, setWidth : boolean }) {

  return (
    <>
      <Link href={`/Products/${ product.slug }`} style={{ textDecoration: 'none' }}>
        <div key={ product._id } className={styles.ProductCard} style={{width: setWidth ? '40vmin' : 'auto'}}>
          <div className={`${styles.ProductCardTop} ${roboto300.className}`}>
              { product.name }
          </div>
          <div className={styles.ProductCardBody}>
              <img className={styles.productImg} src={`${ product.thumbPic }?q=25`} alt={ product.name } />
          </div>
        </div>
      </Link>
    </>
  );
}

export default ProductCard;