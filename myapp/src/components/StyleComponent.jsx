
import styled from "styled-components";

// Step 1: Create one reusable styled button
// BENEFIT: CSS stays with the component, and generated class names
// help avoid conflicts with normal CSS class names.
// IMPORTANT: Define styled components outside your React component
// so a new component is not created on every render.

const Button = styled.button`
  background-color: ${(props) => props.color};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  margin: 5px;
  cursor: pointer;
`;

// Step 2: Use the same component with different props
const StyleComponent = () => {
  return (
    <>
      <Button color="#50C878">Success</Button>
      <Button color="red">Delete</Button>
      <Button color="
	#89CFF0
">Submit</Button>
    </>
  );
};

export default StyleComponent;

/*
STYLED-COMPONENTS NOTES
=======================

BENEFITS:
1. CSS and component stay together; no separate CSS file needed.
2. Generated class names help avoid CSS class-name conflicts.
3. Reuse the same styled component with different props.
4. Change CSS dynamically based on props.
5. Defining styled components outside the React component
   prevents creating a new component type on every render.

HOW IT WORKS:
1. styled.button creates a reusable React component with CSS.
2. Pass a prop in JSX:
   <Button color="green">Success</Button>
3. Styled-components receives the prop.
4. props.color reads the value "green".
5. The background color becomes green.

DYNAMIC STYLING:
background-color: ${(props) => props.color};

color="green" -> green button
color="red"   -> red button
color="blue"  -> blue button

IMPORTANT:
- Re-rendering the parent does not automatically mean every
  child avoids rendering; styled-components is not a
  re-render prevention tool.
- Defining Button outside StyleComponent keeps its component
  identity stable between renders.
- Props are for passing values; CSS uses those values to style.
*/


//Neeche diye gaye prop uper kaise gye?
// Step 1: Yahan prop bheja
{/* <Button color="green">Success</Button> */}

// Step 2: styled-components is prop ko receive karta hai yeh step internally hota hai. 
// props = { color: "green", children: "Success" }

// Step 3: CSS ke andar props se value read ki
// const Button = styled.button`
//   background-color: ${(props) => props.color};
// `;