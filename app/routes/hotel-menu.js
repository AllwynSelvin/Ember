import Ember from 'ember';

var menus = [{
  id: 1,
  title: 'A9 – Assorted Platter',
  description: 'A delicious combination of Samosa, Vegetable Pakore, Chicken Pakore and Shammi Kabab',
  price: '4.99',
  qty: '.5lb',
  sharingPerson: 1,
  image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
  style: 'Appetizers'
}, {
  id: 2,
  title: 'A8 - Chicken Chaat',
  description: 'Dices of chicken tikka mixed with chopped onion, tomato, lemon and mint chutney.',
  price: '4.99',
  qty: '.5lb',
  sharingPerson: 1,
  image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
  style: 'Appetizers'
}, {
  id: 3,
  title: 'A7 - Shrimp Pakore',
  description: 'Delicately spiced, batter friend shrip.',
  price: '5.99',
  qty: '.5lb',
  sharingPerson: 1,
  image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
  style: 'Appetizers'
},
{
  id: 4,
  title: 'A5 - Chicken Pakore',
  description: 'Delicately spiced, deep fried marinated chicken wings.',
  price: '3.99',
  qty: '.5lb',
  sharingPerson: 1,
  image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
  style: 'Appetizers'
},
{
  id: 5,
  title: 'A4 - Methi Chaman Kabab',
  description: 'Deep fried patties made of minced spinach, potato and cottage cheese, blended with mild spices and served with mint chutney.',
  price: '5.99',
  qty: '.5lb',
  sharingPerson: 1,
  image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
  style: 'Appetizers'
},
{
  id: 6,
  title: 'A3 - Onion Bhaji',
  description: 'Freshly cut onions, dipped in chick-pea batter mix tempered with spices and fried.',
  price: '5.99',
  qty: '.5lb',
  sharingPerson: 1,
  image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
  style: 'Appetizers'
},
{
  id: 7,
  title: 'A2 - Vegetable Pakore',
  description: 'Fried potatoes and cauliflower fritters, dipped in chick-pea batter.',
  price: '5.99',
  qty: '.5lb',
  sharingPerson: 1,
  image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
  style: 'Appetizers'
},
{
  id: 8,
  title: 'A1 - Samose',
  description: 'Triangular pasty shells stuffed with potatoes, peas and spices.',
  price: '5.99',
  qty: '.5lb',
  sharingPerson: 1,
  image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
  style: 'Appetizers'
}
];

export default Ember.Route.extend({
  model() {
    return menus;
  }
});