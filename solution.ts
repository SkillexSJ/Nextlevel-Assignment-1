function formatValue(
  value: number | string | boolean
): number | string | boolean {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "boolean") {
    return !value;
  }
  return value;
}

function getLength(input: string | any[]): number {
  if (typeof input === "string") {
    return input.length;
  } else if (Array.isArray(input)) {
    return input.length;
  }
  return 0;
}

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

type BookType = {
  title: string;
  rating: number;
};

function filterByRating(input: BookType[]): BookType[] {
  return input.filter((book) => Number(book.rating.toFixed(1)) >= 4);
}

type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

function filterActiveUsers(input: User[]): User[] {
  return input.filter((user) => user.isActive === true);
}

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book): void {
  console.log(
    `Title: ${book.title}, Author: ${book.author} , Published: ${
      book.publishedYear
    }, Available: ${book.isAvailable ? "Yes" : "No"}`
  );
}

function getUniqueValues(
  arr1: (string | number)[],
  arr2: (string | number)[]
): (string | number)[] {
  const arr3 = [...arr1, ...arr2];
  const uniqueArray: (string | number)[] = [];

  for (let i = 0; i < arr3.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < uniqueArray.length; j++) {
      if (uniqueArray[j] === arr3[i]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      uniqueArray[uniqueArray.length] = arr3[i];
    }
  }
  return uniqueArray;
}

type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

function calculateTotalPrice(products: Product[]): number {
  return products.reduce((acc, product) => {
    const basePrice = product.price * product.quantity;
    const discount = product.discount ? product.discount : 0;
    const finalPrice = basePrice - (basePrice * discount) / 100;
    return acc + finalPrice;
  }, 0);
}
