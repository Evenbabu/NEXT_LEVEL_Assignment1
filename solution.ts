function formatValue(value: string | number | boolean) {
  if (typeof value === "string") {
    const upperCaseValue:string = value.toUpperCase();
    return upperCaseValue;
  } else if (typeof value === "number") {
    const multipliedValue :number= value * 10
    return multipliedValue;
  } else if (typeof value === "boolean") {
    if (value === true) {
      return false;
    } else {
      return true;
    }
  }
}

function getLength(value: string | number[]) {
  let valueLength: number = value.length;
  return valueLength;
}

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails() {
    const provideDetails: string = `'Name: ${this.name}, Age: ${this.age}';`;
    return provideDetails;
  }
}
const Person1 = new Person("John Dow", 48);
const person2 = new Person("Alice", 25);

type BookRating = {
  title: string;
  rating: number;
};
let books: BookRating[] = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];

function filterByRating(books: BookRating[]) {
  let ratingItem: BookRating[] = [];
  books.map((bookItem) => {
    if (bookItem.rating >= 4) {
      ratingItem.push(bookItem);
    }
  });
}


type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

const users: User[] = [
  { id: 1, name: "Rakib", email: "rakib@example.com", isActive: true },
  { id: 2, name: "Asha", email: "asha@example.com", isActive: false },
  { id: 3, name: "Rumi", email: "rumi@example.com", isActive: true },
];

function filterActiveUsers(users: User[]) {
  let ActiveUser: User[] = [];
  users.map((user) => {
    if (user.isActive === true) {
      ActiveUser.push(user);
    }
  });
}


interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}
const myBook: Book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  publishedYear: 1925,
  isAvailable: false,
};

function printBookDetails(book: Book) {
  const bookDetails = `Title: ${book.title}, Author: ${book.author
    }, Published: ${book.publishedYear}, Available: ${book.isAvailable ? "Yes" : "No"
    }`;
  return bookDetails;
}

const array1: number[] = [1, 2, 3, 4, 5, 5];
const array2: number[] = [3, 3, 8];
// 4,7,8,1
let unique: number[] = [];
function getUniqueValues(arrayValue1: number[], arrayValue2: number[]) {
  for (let i: number = 0; i < arrayValue1.length; i++) {
    let isExist: boolean = false;
    const getArrayValue1 = arrayValue1[i];

    for (let j: number = 0; j < unique.length; j++) {
      const getUniqueValues = unique[j];
      if (getArrayValue1 === getUniqueValues) {
        isExist = true;
        break;
      }
    }
    if (getArrayValue1 !== undefined && !isExist) {
      unique.push(getArrayValue1)
    }
  }

  for (let i: number = 0; i < arrayValue2.length; i++) {
    const getArrayValue2 = arrayValue2[i];
    let isExist: boolean = false;
    for (let j: number = 0; j < unique.length; j++) {
      const getUniqueValues = unique[j];
      if (getArrayValue2 === getUniqueValues) {
        isExist = true;
        break;
      }
    }

    if (getArrayValue2 !== undefined && !isExist) {
      unique.push(getArrayValue2)
    }
  }

}


type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}


let products: Product[] = [
  { name: 'Pen', price: 10, quantity: 2 },
  { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
  { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];


function calculateTotalPrice(value: Product[]) {
  const totalPriceCalculate: number = products.reduce((acc: number, curr: Product) => {
    const discount: number = curr.discount ?? 0;

    if (discount < 0 || discount > 100) {
      throw new Error('Please give correct Discount not less then 0% and not less then 100%')
    }
    const price: number = acc + curr.price * curr.quantity;
    const discountPrice: number = curr.price * curr.quantity * discount / 100;
    const totalPrice: number = price - discountPrice;

    return totalPrice;
  }, 0)
};




