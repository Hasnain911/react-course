// import { Fragment } from "react";
// import Conditional from "./Conditional.jsx"
import "./card.css"

const Card = (props) => {
  return (
    <>
      <li>
        <img
          src={props.elem.image}
          alt={props.elem.name}
          width="200"
          style={{ borderRadius: "8px" }}
        />
        <p>Name : {props.elem.name}</p>
        <p>Country :{props.elem.country}</p>
        <p>Location :{props.elem.location}</p>
        <p>Year-Built :{props.elem.year_built}</p>
        <p>Description :{props.elem.description}</p>
      </li>

      {/* <Conditional /> */}
    </>
  )
}

export default Card
