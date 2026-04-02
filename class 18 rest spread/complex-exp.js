const books = [
  {
    title: "JavaScript Guide",
    author: "John Doe",
    year: 2020,
    rating: 4.5,
    genre: "Programming",
    price: 45,
    discount: 4,
  },
  {
    title: "HTML Basics",
    author: "Jane Smith",
    year: 2019,
    rating: 4.0,
    genre: "Programming",
    price: 25,
    discount: 4,
  },
  {
    title: "CSS Mastery",
    author: "Bob Wilson",
    year: 2021,
    rating: 4.8,
    genre: "Programming",
    price: 35,
    discount: 4,
  },
  {
    title: "Python for Beginners",
    author: "Alice Brown",
    year: 2020,
    rating: 4.2,
    genre: "Programming",
    price: 40,
    discount: 4,
  },
];

const calculatePrice = (totalPrice, discount) => {
  let discountPrice = (totalPrice * discount) / 100;
  let finalPrice = totalPrice - discountPrice;
  return finalPrice;
};

const updatedPrices = books.map((item) => {
  let singleBook = {
    ...item,
    price: calculatePrice(item.price, item.discount),
  };

  return singleBook;
});
 

console.log(updatedPrices);