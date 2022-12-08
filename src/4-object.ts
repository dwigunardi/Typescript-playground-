/* eslint-disable prefer-const, @typescript-eslint/no-unused-vars */

export {};
/**
 * 1. Object Literal
 * 2. Nested Object
 * 3. Nested, Object of Array
 * 4. Nested, Object of Object
 * 5. Object destructuring
 */

/**
 * 1. Object Literal
 */
/*
  {
    id: "ID-1",
    productName: "Macbook Air",
    price: 2000,
    note: ""
  }
*/
//cara type inference
let myObj1 =  {
  id: "ID-1",
  productName: "Macbook Air",
  price: 2000,
  note: ""
}

//cara inline interface
let myObj2:{
  id:string,
  productName:string,
  price:number,
  note:string | number | boolean
}

myObj2 = {
  id:"1",
  productName:"adidas",
  price:10000000,
  note : "BArang mewah"
}

// interface yang sesungguhnya alias cetakan obj
interface Product {
  id:string,
  productName:string,
  price:number,
  note:string | number | boolean
}

const myProduct1:Product = {
  id:"1",
  productName: "adidas",
  price:10000,
  note: "Bonus berlimpah"
}
const myProduct2:Product = {
  id:"2",
  productName: "Nike",
  price:20000,
  note: "no bonus"
}
/**
 * 2. Nested Object
 * {
      idCart: "C1",
      dateOrdered: "2020-05-20",
      items: {
        p1 :{
          "id": "P-1",
          "name": "Mechanical Keyboard",
          "qty": 2
        },
        p2 :{
          "id": "P-2",
          "name": "USB Hub",
          "qty": 1
        },
      }
    }
*/
interface ProductCart { 
  idCart:string,
  dateOrdered:string,
  items:ProductCartItem
}
interface ProductCartItem {
  p1:p1,
  p2:p2
 }
interface p1{ 
  id:string,
  name:string,
  qty:number,
}
interface p2{
  id:string,
  name:string,
  qty:number,
}

const nestedProduct:ProductCart = {
  idCart: "C1",
      dateOrdered: "2020-05-20",
      items: {
        p1 :{
          id: "P-1",
          name : "Mechanical Keyboard",
          qty: 2
        },
        p2 :{
          id: "P-2",
          name: "USB Hub",
          qty: 1
        },
      }
}
const nestedProduct2:ProductCart = {
  idCart: "C2",
  dateOrdered:"2020-06-20",
  items: {
    p1: {
      id: "2",
      name: "Laptop Cooler Fan",
      qty :1
    },
    p2: {
      id: '3',
      name: "DBE Headset Accoustic",
      qty: 1,
    }
  }
}

console.log(nestedProduct2)
/*
 * 3. Nested, Array of Object
 */

/*
    {
      id: "U-1",
      name: "Adi dodi",
      address: [
        {
          street : "Jln. Setapak No.2",
          city: "Jakarta"
        },
        {
          street: "Jln. Lebar sekali no 10",
          city: "Medan"
        }
      ]
    }
*/

/**
 * 4. Nested, Object of Object
 */

/*
    {
      idCart: "C1",
      dateOrdered: "2020-05-20",
      items: {
        p1 :{
          "id": "P-1",
          "name": "Mechanical Keyboard",
          "qty": 2
        },
        p2 :{
          "id": "P-2",
          "name": "USB Hub",
          "qty": 1
        },
      }
    }
*/

/**
 * 5. Object Destructuring
 */

/*
  let fullName = {
    firstName : "Sastra",
    lastName : "Nababan"
  }
  let {firstName, lastName} = fullName
*/
