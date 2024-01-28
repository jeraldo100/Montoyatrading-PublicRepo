'use client'
import React from 'react'
import styles from '@/styles/HomeCarousel.module.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { HomeCarouselPics } from '@/app/interfaces';
import { Carousel } from 'react-responsive-carousel';
import { BiSolidChevronsLeft, BiSolidChevronsRight } from "react-icons/bi";


function HomeCarousel({ homeCarouselPics } : { homeCarouselPics: Array<HomeCarouselPics> }) {
    return (
        <>
            <div className={styles.homeCarousel}>
                <Carousel
                    showThumbs={false}
                    showStatus={false}
                    autoPlay={true} 
                    interval={4000}
                    infiniteLoop={true}

                    renderArrowPrev={(clickHandler) => {
                        return(
                            <div className={`${styles.carouselArrows} ${styles.prevArrow}`} onClick={clickHandler}>
                                <BiSolidChevronsLeft />
                            </div>
                        )
                    }}
                    renderArrowNext={(clickHandler) => {
                        return(
                            <div className={`${styles.carouselArrows} ${styles.nextArrow}`} onClick={clickHandler}>
                                <BiSolidChevronsRight />
                            </div>
                        )
                    }}
                >
                    {homeCarouselPics.map((Pic) => {return(
                        <div key={Pic._id}>
                            <img className={styles.image} src={Pic.pics} alt={Pic.name} />
                        </div>
                    )})}
                </Carousel>
            </div>
        </>
    )
}

export default HomeCarousel