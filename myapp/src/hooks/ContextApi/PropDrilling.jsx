import { useContext } from "react"
import { CostumerContext } from "./ContextApi"

const PropDrilling = () => {
  const costumer = useContext(CostumerContext)
  // console.log(costumer)
  return (
    <>
      <PropDrillingChild data="drilled data" />
      <h1>i am data received by using ContextApi Name : {costumer.name}</h1>
    </>
  )
}
const PropDrillingChild = ({ data }) => {
  return <PropDrillingGrandChild data={data} />
}
const PropDrillingGrandChild = ({ data }) => {
  return <PropDrillingGrandGrandChild data={data} />
}
const PropDrillingGrandGrandChild = ({ data }) => {
    const costumer = useContext(CostumerContext)
  return <><div>I am {data}</div>
   <h1>i am data received by using ContextApi Email : {costumer.email}</h1>
</>}

export default PropDrilling
