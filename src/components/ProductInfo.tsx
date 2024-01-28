import React from 'react'
import styles from '../styles/ProductInfo.module.scss'
import { Product } from '@/app/interfaces';
import PackageCard from './PackageCard';
import ShareBtn from './ShareBtn';
import { roboto300, roboto500, roboto700 } from '@/app/fonts';

function ProductInfo({ product }: { product: Product }) {
    return (
        <>
            <div className={styles.productContainer}>
                {/* Container for image product info for flexbox direction row */}
                <div className={styles.layer1}>
                    <div className={styles.imageContainer}>
                        <img className={styles.image} src={ product.thumbPic } alt={ product.name } />
                    </div>
                    {/* Container for product info only for flexbox direction collumn */}
                    <div className={styles.layer2}>
                        <h1 className={`${styles.prodName} ${roboto700.className}`}>
                            { product.name }
                        </h1>
                        <h2 className={`${styles.prodBrand} ${roboto500.className}`}>
                            Brand:
                            <span> </span>
                            <span className={roboto300.className}>
                                { product.brand }
                            </span>
                        </h2>
                        {/* Convert Schema of description to Block Type to make use of rich Text */}
                        <h2 className={`${styles.descriptionH1} ${roboto500.className}`}>
                            Description:
                        </h2>
                        <pre className={`${styles.description} ${roboto300.className}`}>
                            { product.description }
                        </pre>
                        <ShareBtn />
                        {product.specs !== null || product.packagedIn !== undefined ?
                            <>
                                <h3 className={`${styles.specsH1} ${roboto500.className}`}>
                                    Specifications:
                                </h3>
                                {/* Coulb be presented better with flexbox */}
                                <div className={styles.specs}>
                                    {product.specs.map((spec) => {
                                        return(
                                            <>
                                                <p>
                                                    <span className={roboto500.className}>
                                                        { spec?.specType }:
                                                    </span>
                                                    <span> </span>
                                                    <span className={roboto300.className}>
                                                        { spec?.specVal }
                                                    </span>
                                                </p>
                                                <hr/>
                                            </>
                                        );
                                    })}
                                </div>
                            </>
                            :
                                <></>
                        }
                    </div>
                </div>
                {product.packagedIn.length !== 0  ?
                    <>
                        <h2 className={`${styles.packagesHeader} ${roboto500.className}`}>
                            Also Included in these packages:
                        </h2>
                        <div className={styles.packageList}>
                            {product.packagedIn.map((pack) => {
                                return (
                                    <>
                                        <PackageCard
                                            pack={pack}
                                        />
                                    </>
                                );
                            })}
                        </div>
                    </> :
                        <></>
                }
            </div>
        </>
    )
}

export default ProductInfo