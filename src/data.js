import home from './images/home.png';
import track from './images/track.png';
import products from './images/products.png';
import about from './images/about.png';
import contact from './images/contact.png';


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
        amount: '+$250',
        recordId: 3
    }
]