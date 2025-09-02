// import { Fragment } from "react";
// import Conditional from "./Conditional.jsx"
import { useState } from "react"
// import "./card.css"
import styles from "./card.module.css";

// const Card = (props) => {
//   let {image,name,country,location,year_built,description} = props.data
const Card = ({ data, elem, children }) => {
  let { image, name, country, location, year_built, description } = data //object destructuring
  let [elem1, elem2, elem3] = children //Array destructuring
  const [hover, setHover] = useState(false)
  let cndtn = hover ? "h-world-active" : "h-world"
  const countryStyle = {
    backgroundColor: country === "Brazil" ? "lightgreen" : "transparent", // conditional
    padding: "5px",
    borderRadius: "4px"
  }
   {console.log(styles)};

  return (
    <>
      <li>
        <img
          src={image}
          alt={name}
          width="200"
          style={{ borderRadius: "8px" }}
        />
        <p>Name : {name}</p>
        <p style={countryStyle}>Country :{country}</p>
        <p>Location :{location}</p>
        <p>Year-Built :{year_built}</p>
        <p>Description :{description}</p>
        {/* 1️⃣ Using plain string + ternary, without CSS Modules */}
{/* ✅ Works with global CSS only, not scoped */}
{/* <p onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)} 
    className={hover ? "h-world" : "h-world-active"}>
    {elem}
</p> */}

{/* 2️⃣ Using template literals + global classes */}
{/* ✅ Combines one static class with a conditional global class */}
{/* <div
  onMouseEnter={() => setHover(true)}
  onMouseLeave={() => setHover(false)}
  className={`b-radius ${cndtn}`} 
>
  {elem}
</div> */}

{/* 3️⃣ Using template literals + inline ternary */}
{/* ✅ Same as above, but ternary is written inline inside template literal */}
{/* <div
  onMouseEnter={() => setHover(true)}
  onMouseLeave={() => setHover(false)}
  className={`b-radius ${hover ? "h-world" : "h-world-active"}`} 
>
  {elem}
</div> */}

{/* 4️⃣ Using CSS Modules + template literals */}
{/* ✅ Scoped classes from card.module.css, avoids global conflicts */}
<div
  onMouseEnter={() => setHover(true)}
  onMouseLeave={() => setHover(false)}
  className={`${styles["b-radius"]} ${hover ? styles["h-world"] : styles["h-world-active"]}`} 
 
  
>
  {elem}
</div>

  
        <p>{elem1}</p>
        <p>{elem2}</p>
        <p>{elem3}</p>
      </li>

      {/* <Conditional /> */}
    </>
  )
}

export default Card

// React calls your component function in case of single jsx as children
// When React sees this JSX, it translates it into a function call like:
// Card({
//   key: index, // React handles this separately
//   data: currentelem,
//   elem: <p>hello world</p>,
//   children: <p>hi i am jsx passed to child as props</p>
// });

// In case of multiple jsx
// React calls your component function
// Card({
//   key: index, // special to React
//   data: currentelem,
//   elem: <p>hello world</p>,
//   children: [
//     <p>multiple jsx</p>,
//     <p>hi i am jsx1 passed to child as props</p>,
//     <p>hi i am jsx2 passed to child as props</p>
//   ]
// });

//Inline css notes
// function Greeting() {
//   return (
//     <h1 style={{ color: "blue", backgroundColor: "lightgray", padding: "10px" }}>
//       Hello, React with inline styles!
//     </h1>
//   );
// }

// export default Greeting;

// function Greeting() {
//   const headingStyle = {
//     color: "blue",
//     backgroundColor: "lightgray",
//     padding: "10px"
//   };

//   return (
//     <h1 style={headingStyle}>
//       Hello, React with inline styles!
//     </h1>
//   );
// }

// export default Greeting;

// Explanation:

// 1 . headingStyle is a JavaScript object.

// 2 . Keys are written in camelCase (backgroundColor not background-color).

// 3 . Values are strings (even for numbers with units).
// 4 . React’s inline style objects (or any JavaScript object), you must use commas between properties, not semicolons like in traditional CSS.
