const numbers = [1, 2, 3, 4,5 ,6]
const numbers2 = [7, 8, 9, 10, 11, 12]

// combine these two arrays elements in one array 
// const combine = [...numbers,...numbers2]
// console.log(combine);

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
// use spread operator for taking price and discount form this array apply discount on this price also use map method


const multiplyElements = (targetElement, ...allElements) =>{
    // console.log(allElements, targetElement);
    const calculate = allElements.map((item)=> item * targetElement)
    return calculate;
}
console.log(multiplyElements(6,2, 3, 4, 5, 6));
