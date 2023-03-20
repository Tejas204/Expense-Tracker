import home from './images/home.png';
import track from './images/track.png';
import products from './images/products.png';
import about from './images/about.png';
import contact from './images/contact.png';

import gpay from './images/gpay.png';
import paypal from './images/paypal.png';
import mastercard from './images/mastercard.png';

import card2 from './images/card3.png'
import card3 from './images/card4.png'
import card1 from './images/card6.png'

export let navItems = [
    {
        name: 'Home',
        image: home
    },
    {
        name: 'Track Expenses',
        image: track
    },
    {
        name: 'Products',
        image: products
    },
    {
        name: 'About Us',
        image: about
    },
    {
        name: 'Contact Us',
        image: contact
    }
]

export let transactionHistory = [
    {
        expense: 'Food',
        date: '15/02/2023',
        amount: '-$25',
        recordId: 1
    },
    {
        expense: 'Movie',
        date: '15/02/2023',
        amount: '-$50',
        recordId: 2
    },
    {
        expense: 'Bonus',
        date: '15/02/2023',
        amount: '+$1050',
        recordId: 3
    }
]

export let transactionImages = [
    {
        image: card1,
        index: 1,
        selected: false
    },
    {
        image: card2,
        index: 2,
        selected: true
    },
    {
        image: card3,
        index: 3,
        selected: false
    }
]