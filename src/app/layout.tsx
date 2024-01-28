import './globals.scss'
import type { Metadata } from 'next'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
	title: 'Montoya Trading',
	description: 'Welcome to Montoya Trading, your trusted partner in the world of Point of Sale (POS) hardware solutions. Since our establishment in 2015, we&apos;ve been dedicated to providing top-notch services to businesses of all sizes.',
	alternates: {
		canonical: 'https://www.montoyatrading.com',
    },
	viewport: 'width=device-width, initial-scale=1.0',
	icons: [
		{
			rel: 'icon',
			sizes: 'any',
			url: '/favicon/favicon.ico',
		},
		{
			rel: 'icon',
			type: 'image/png',
			sizes: '32x32',
			url: '/favicon/favicon-32x32.png',
		},
		{
			rel: 'icon',
			type: 'image/png',
			sizes: '16x16',
			url: '/favicon/favicon-16x16.png'
		},
		{
			rel: 'apple-touch-icon',
			sizes: '180x180',
			url: '/favicon/apple-touch-icon.png',
		},
		{
			rel: 'manifest',
			url: '/favicon/site.webmanifest',
		}
	],
	openGraph: {
		title: 'Montoya Trading',
		description: 'Buy and order high-quality POS system products in the Philippines such as printers, scanners, cash drawers, monitors or screens, biometric scanners and printer consumables. Also comes in packages. Provides printer repair services.',
		url: 'https://www.montoyatrading.com/',
		images: [
			{
				url: 'https://www.montoyatrading.com/images/logo-white-background.png',
				width: 600,
				height: 600,
			},
		],
		type: 'website',
	}
}

export default function RootLayout({ children } : { children: React.ReactNode }) {
    return (
		<html lang="en">
			<body>
				<NavBar />
				{ children }
				<Footer />
			</body>
		</html>
    )
}