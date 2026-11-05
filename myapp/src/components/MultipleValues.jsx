import MultipleValuesCard from "./MultipleValuesCard.jsx"
import React from "react" // Remove unncessary nodes way 1
import { Fragment } from "react"; //Remove unncessary nodes way 2

const MultipleValues = () => {
  return (
      // way 1
    // <React.Fragment>
    //   <MultipleValuesCard />
    //   <MultipleValuesCard />
    //   <MultipleValuesCard />
    //   <MultipleValuesCard />
    //   <MultipleValuesCard />
    // </React.Fragment>

    // way 2
    // <Fragment>
    //   <MultipleValuesCard />
    //   <MultipleValuesCard />
    //   <MultipleValuesCard />
    //   <MultipleValuesCard />
    //   <MultipleValuesCard />
    // </Fragment>

    // way 3 syntactical sugar
    <>
      <MultipleValuesCard />
      <MultipleValuesCard />
    </> 
)  }


export default MultipleValues

// Way 4 + Notes:
// 📌 Notes: Returning Multiple Values in JavaScript

// - A JavaScript function can return only ONE value.
// - To return multiple values, wrap them inside an array or object.

// 1️⃣ Using Array
// ----------------
// function getNums() {
//   return [10, 20, 30];
// }
// const [a, b, c] = getNums(); // destructuring
// // Best when values are ordered
// // Access by position → [0], [1], [2]

// 2️⃣ Using Object
// -----------------
// function getPerson() {
//   return { name: "Ali", age: 22 };
// }
// const { name, age } = getPerson(); // destructuring
// // Best when values are labeled
// // Access by keys → obj.name, obj.age

// 👉 JS cannot return multiple values directly.
//    It returns one container (array/object) that holds many values.
