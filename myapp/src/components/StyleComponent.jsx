import React from 'react'

const StyleComponent = () => {
  return (
    <div>StyleComponent</div>
  )
}

export default StyleComponent

// Notes
// Step 1: You render the component

// <ButtonThapa rating={rating}>Watch Now</ButtonThapa>

// This is always the very first step.
// Just like <MyComponent someProp="value" />, you’re telling React:

// "Render ButtonThapa and pass it { rating: someValue, children: 'Watch Now' }."

// Step 2: React gives props to ButtonThapa
// styled.button under the hood is a React component function.
// So it receives all the props you passed:
// props = { rating: 9, children: "Watch Now" }

// Step 3: styled-components evaluates your CSS template

// background-color: ${(props) =>
//   props.rating >= 8.5 ? "#7dcea0" : "#f7dc6f"};
// At this moment, styled-components:

// Looks at the props it got ({ rating: 9 })

// Calls your function (props) => ... with that object

// Substitutes the result into CSS.

// So the order is:

// You pass the prop in JSX (<ButtonThapa rating={...} />).

// React hands those props to the styled-component.

// Styled-components calls your (props) => ... function inside the template using those props.

// CSS gets generated with the result.