function Conditional() {
  const age = 15
   if (age <= 18) {
      return <p> you can't meet with handsome </p>
     }
  return (
    <>
      <p>press enter and meet Handsome</p>
      {/* <p>{age >= 18 ? "Hi adult" : "bye minor"}</p> */}
    </>
  )
}

export default Conditional


//Key points:

// A React component can have multiple return statements.

// Only the first return that executes matters.

// If an earlier return runs (like in your if), the rest of the function is skipped.

// This is a common pattern for conditional rendering.
