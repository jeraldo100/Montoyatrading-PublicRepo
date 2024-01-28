import React from 'react'
import styles from '@/styles/PagesCSS/AboutUs.module.scss';
import ParagraphPartRight from '@/components/ParagraphPartRight';
import ParagraphPartLeft from '@/components/ParagraphPartLeft';
import Image from 'next/image';
import { roboto300, roboto500, roboto700 } from '@/app/fonts';

function AboutUs() {
    return (
        <>
            <h1 className={`${styles.title} ${roboto300.className}`}>About Us</h1>
            <div className={styles.bodyBackground}>
                <div className={styles.paragrapsContainer}>
                    <h1 className={`${styles.header} ${roboto700.className}`}>Montoya Trading</h1>

                    <div className={styles.intro}>
                        <p className={`${styles.introParagraph} ${roboto300.className}`}>
                            Welcome to Montoya Trading, your trusted partner in the world of Point of Sale (POS) hardware solutions. Since our establishment in 2015, we&apos;ve been dedicated to providing top-notch services to businesses of all sizes.
                        </p>
                        <div className={styles.logoContainer}>
                            <Image 
                                fill={true}
                                src='/images/logo-png.png' 
                                style={{objectFit: "contain"}}
                                quality={80}
                                alt='Montoya Trading Logo' 
                            />
                        </div>
                    </div>
                    <h2 className={`${styles.subheader} ${roboto500.className}`}>Our Expertise</h2>
                    <p className={`${styles.paragraph} ${roboto300.className}`}>
                        At Montoya Trading, we specialize in:
                    </p>

                    <ParagraphPartRight
                        imgSrc='/images/POS-hardware.jpg'
                        imgAlt='POS Hardware Image by prostooleh on Freepik'
                        header='POS Hardware'
                        text='We offer a wide range of high-quality POS hardware solutions to streamline your business operations.'
                    />

                    <ParagraphPartLeft
                        imgSrc='/images/printer-repair.jpg'
                        imgAlt='Printer Repair Image by Freepik'
                        header='Printer Repairs'
                        text='Our experienced technicians are here to keep your POS printers running smoothly. We&apos;re committed to quick and efficient printer repairs.'
                    />

                    <ParagraphPartRight
                        imgSrc='/images/rentals.jpg'
                        imgAlt='POS Rentals Image by rawpixel.com on Freepik'
                        header='POS Printer Rentals'
                        text='Need a temporary solution? Our POS printer rentals are the perfect choice, ensuring you&apos;re never without the tools you need.'
                    />

                    <ParagraphPartLeft
                        imgSrc='/images/packages.jpg'
                        imgAlt='Packages Image by jcomp on Freepik'
                        header='Scalable POS System Packages'
                        text='We understand that every business is unique. That&apos;s why we offer scalable POS system packages tailored to your specific needs. Whether you&apos;re a small startup or an established enterprise, our flexible packages can grow with your business.'
                    />

                    <h4 className={`${styles.subheader} ${roboto500.className}`}>Our Commitment</h4>
                    <p className={`${styles.paragraph} ${roboto300.className}`}>
                        What sets us apart is our unwavering commitment to our customers. We believe that exceptional service extends beyond the initial purchase. That&apos;s why we take pride in our excellent aftersales support. Your satisfaction is our priority, and we&apos;re here to assist you every step of the way.
                    </p>
                    <h4 className={`${styles.subheader} ${roboto500.className}`}>Join Our Community</h4>
                    <p className={`${styles.paragraph} ${roboto300.className}`}>
                        Join the growing list of businesses that have chosen Montoya Trading as their POS hardware provider. We&apos;re not just a company; we&apos;re a community of professionals dedicated to helping your business succeed.
                    </p>
                    <p className={`${styles.paragraph} ${roboto300.className}`}>
                        Thank you for considering Montoya Trading for your POS needs. We look forward to serving you and helping you find the perfect POS system package for your business.
                    </p>
                </div>
            </div>

        </>
    )
}

export default AboutUs