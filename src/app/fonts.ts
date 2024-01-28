import { Roboto } from 'next/font/google'

const roboto300 = Roboto({
    weight: '300',
    subsets: ['latin'],
    variable: '--roboto300',
})

const roboto500 = Roboto({
    weight: '500',
    subsets: ['latin'],
    variable: '--roboto500',
})

const roboto700 = Roboto({
    weight: '700',
    subsets: ['latin'],
    variable: '--roboto700',
})

export { roboto300, roboto500, roboto700 }