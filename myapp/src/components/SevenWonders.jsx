import data from "../api/data.json"
import Card from "./Card"

const SevenWonders = () => {
  return (
    <>
      <ul>
        {data.map((currentelem) => 
          <Card
            key={currentelem.id }// key is used internally by React to uniquely identify list items.
            data={currentelem}
            elem={"hello world"} // this is a string passed as props
            reactElem={<p>hi i am jsx passed to child as React element</p>}
          >
            <p>multiple jsx</p>
            <p>hi i am jsx1 passed to child as props</p>
            <p>hi i am jsx2 passed to child as props</p>
          </Card>
        )}
      </ul>
    </>
  )
}

export default SevenWonders
