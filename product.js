import bcrypt from 'bcryptjs';
const data = {
  users: [
    {
      name: 'John',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Jane',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],

    products: [
      {
        name: 'Scooter ev1',
        category: 'Scooter',
        image: '/images/steelgray.png',
        prod:'gray',
        price: 60000,
        rating: 4.2,
        numReviews: 10,
        colour:'steel gray',
        owner: 'John',
        countInStock: 20,
        description: 'comfortable scooter',
        
      },
      {
        name: 'Scooter ev2',
        category: 'Scooter',
        image: '/images/black.jpg',
        prod:'black',
        price: 60000,
        rating: 4.2,
        numReviews: 10,
        colour:'black',
        owner: 'John',
        countInStock: 20,
        description: 'comfortable scooter',
      },
      {
        name: 'Scooter ev3',
        category: 'Scooter',
        image: '/images/white.png',
        prod:'white',
        price: 60000,
        rating: 4.2,
        numReviews: 10,
        colour:'white',
        owner: 'John',
        countInStock: 20,
        description: 'comfortable scooter',
      },
      {
        name: 'Scooter ev4',
        category: 'Scooter',
        image: '/images/blue.png',
        prod:'blue',
        price: 60000,
        rating: 4.2,
        numReviews: 10,
        colour:'blue',
        owner: 'John',
        countInStock: 20,
        description: 'comfortable scooter',
      },
      {
        name: 'Scooter ev5',
        category: 'Scooter',
        image: '/images/green.png',
        prod:'green',
        price: 60000,
        rating: 4.2,
        numReviews: 10,
        colour:'green',
        owner: 'John',
        countInStock: 20,
        description: 'comfortable scooter',
      },
      {
        name: 'Scooter ev5',
        category: 'Scooter',
        image: '/images/red.png',
        prod:'red',
        price: 60000,
        rating: 4.2,
        numReviews: 10,
        colour:'red',
        owner: 'John',
        countInStock: 20,
        description: 'comfortable scooter',
      },
    ],
  };
  export default data;