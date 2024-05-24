/*

* Create an object bike of type { brand: string, year: number } and assign it some values. Then, try to assign a string to the year property.

* Create an object laptop of type { brand: string, year: number } and try to assign an object with missing year property to it.

* Create an array products of type { title: string, price?: number }[] and assign it some values. Then, try to add an object with a price property of type string to it.

*/

const bike: { brand: string; year: number } = { brand: "Suzuki", year: 2002 }
// const bike: { brand: string; year: number } = { brand: "Suzuki", year: '2002' } Type Error

const laptop: { brand: string; year: number } = { brand: "Macbook", year: 2001 }
// const laptop2: {brand: string, year: number } = {brand: "Macbook"} Type Error

let product1 = { title: "Shirt", price: 20 }
let product2 = { title: "Pants" }

let products: { title: string; price?: number }[] = [product1, product2]
// products.push({ title: 'Shoes', price: 'expensive' }); // This will result in a TypeScript error
