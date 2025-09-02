import data from "../api/data.json"
import Card from './Card'

const SevenWonders = () => {
  return (
   <>
      <ul>
        {data.map((currentelem, index) => (

          <Card
            key={index}
            data={currentelem}
            elem={"hello world"}
          > <p>multiple jsx</p>
            <p>hi i am jsx1 passed to child as props</p>
            <p>hi i am jsx2 passed to child as props</p>
            </Card >
            ))}
          </ul>
   </>
      )
}

      export default SevenWonders