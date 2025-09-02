import React from "react";

const VirtualDom = () => {
  // This is what we normally write in JSX
  const jsxElement = <h1 className="title">Hello JSX</h1>;

  // Behind the scenes, Babel compiles JSX to React.createElement
  // React.createElement returns a plain JS object (a "React element"),
  // which is part of the Virtual DOM tree
  const manualElement = React.createElement(
    "h1",
    { className: "title" },
    "Hello createElement"
  );

  console.log("🔍 JSX element:", jsxElement);
  console.log("🔍 Manual createElement:", manualElement);

  return (
    <div>
      {jsxElement}
      {manualElement}
    </div>
  );
};

export default VirtualDom;

// Key Clarifications for Students :

// 1. JSX is just syntax sugar for React.createElement.
// 2. React.createElement returns a React Element (a plain JS object).
// 3. Many React Elements together form the Virtual DOM tree.
// 4. React uses this Virtual DOM to figure out what to change in the Real DOM.

// Flow: JSX → React.createElement → React Element → Virtual DOM → Real DOM
