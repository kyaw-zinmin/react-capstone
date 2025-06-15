import Home from '../ui/pages/Home'
import About from '../ui/pages/About'
import Menu from '../ui/pages/Menu'
import Reservations from '../ui/pages/Reservations'
import OrderOnline from '../ui/pages/OrderOnline'
import Login from '../ui/pages/Login'

export const pages = [
  {
    name: 'Home',
    component: Home,
    path: '/'
  },
  {
    name: 'About',
    component: About,
    path: '/About'
  },
  {
    name: 'Menu',
    component: Menu,
    path: '/Menu'
  },
  {
    name: 'Reservations',
    component: Reservations,
    path: '/Reservations'
  },
  {
    name: 'Order Online',
    component: OrderOnline,
    path: '/OrderOnline'
  },
  {
    name: 'Login',
    component: Login,
    path: '/Login'
  }
]


export const menu = [
  {
    name: "Greek Salad",
    imgPath: "/assets/images/photos/Greek Salad.jpg",
    price: "$8.99",
    description: "A refreshing salad with tomatoes, cucumbers, red onions, Kalamata olives, and feta cheese, tossed in a light olive oil and oregano dressing."
  },
  {
    name: "Bruschetta",
    imgPath: "/assets/images/photos/Bruschetta.jpg",
    price: "$6.50",
    description: "Toasted bread topped with a vibrant mix of diced tomatoes, garlic, basil, and olive oil. A perfect Italian appetizer."
  },
  {
    name: "Grilled Fish",
    imgPath: "/assets/images/photos/Grilled Fish.jpg",
    price: "$14.95",
    description: "Fresh fish fillet grilled to perfection, served with lemon wedges and a side of seasonal vegetables."
  },
  {
    name: "Lemon Dessert",
    imgPath: "/assets/images/photos/Lemon Dessert.jpg",
    price: "$5.75",
    description: "A zesty lemon tart with a buttery crust and a sweet-tart filling, topped with a dollop of whipped cream."
  },
  {
    name: "Pasta",
    imgPath: "/assets/images/photos/Pasta.jpg",
    price: "$11.99",
    description: "Classic Italian pasta tossed in a rich tomato sauce with garlic, herbs, and your choice of Parmesan or vegan cheese."
  }
];

export const reviews = [
  {
    rating: 5,
    imgPath: "/assets/images/photos/Greek Salad.jpg",
    name: "Alice Johnson",
    comment: "Absolutely loved it! The flavors were fresh and vibrant."
  },
  {
    rating: 4,
    imgPath: "/assets/images/photos/Bruschetta.jpg",
    name: "Marco Li",
    comment: "Great taste and presentation. Would definitely recommend."
  },
  {
    rating: 3,
    imgPath: "/assets/images/photos/Grilled Fish.jpg",
    name: "Sophia Green",
    comment: "It was good but could use a bit more seasoning."
  },
  {
    rating: 5,
    imgPath: "/assets/images/photos/Lemon Dessert.jpg",
    name: "Jamal Rivera",
    comment: "Perfectly cooked and beautifully served. 10/10!"
  },
  {
    rating: 2,
    imgPath: "/assets/images/photos/Pasta.jpg",
    name: "Chloe Becker",
    comment: "Not what I expected. The portion was too small for the price."
  }
];

export const tabletypes = [
  {
    label: '2 seater',
    value: 2
  },
  {
    label: '4 seater',
    value: 4
  },
  {
    label: '8 seater',
    value: 8
  }
]