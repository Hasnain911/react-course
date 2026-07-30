import React from "react"
import "./e-propagation.css"

const EventPropagation = () => {
  return (
    <>
      {/* 1. Parent Layer */}
      <div
        className="container"
        onClick={() => console.log("Parent Box Clicked")}
      >
        {/* 2. Child/Middle Layer */}
        <div
          className="mid-box"
          onClick={() => console.log("Middle Box Clicked")}
        >
          {/* 3. Button Layer */}
          <button
            className="button"
            onClick={(e) => {
              console.log("Button Clicked")
              // e.stopPropagation()
            }}
          >
            Click Me
          </button>
        </div>
      </div>
      {/* 1. Parent Layer */}
      <div
        className="container"
        onClickCapture={() => console.log("Parent Box Clicked")}
      >
        {/* 2. Child/Middle Layer */}
        <div
          className="mid-box"
          onClickCapture={() => console.log("Middle Box Clicked")}
        >
          {/* 3. Button Layer */}
          <button
            className="button"
            onClickCapture={(e) => console.log("Button Clicked")}
          >
            Click Me
          </button>
          {/* onClickCapture handles the event during the capturing phase (top → down), while onClick handles it during the bubbling phase (bottom → up). Since your code only uses onClickCapture, only the capturing phase callbacks are logged. */}
        </div>
      </div>
      {/* Centralized Event Handling */}
      <div  className = "centralized" onClick={(e) => console.log(e.target.textContent)}> 
        <h1>Click on any button</h1>
        <p>Check the console to see which button was clicked.</p>
        <button>0</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
      </div>
    </>
  )
}

export default EventPropagation

// Why is event propagation useful?

// It allows ancestor elements to respond to events occurring on their descendants. This enables event delegation, centralized event handling, analytics tracking, modal behavior, dropdowns, menus, and many other UI patterns without attaching event listeners to every individual element.

// Centralized event handling is a common use case for event propagation. Instead of attaching event listeners to every child element, you can attach a single listener to a parent element and handle events for all its children. This can improve performance and simplify code maintenance.

// Flow = Flow always starts from document,
// travels down to the target,
// then comes back up.

// Event propagation always runs in a cycle (capturing → target → bubbling) regardless of whether a parent or child is clicked; only the target element changes based on where the click happened.

// | Feature        | Click Child               | Click Parent      |
// | -------------- | ------------------------- | ----------------- |
// | Target         | child                     | parent            |
// | Capturing path | document → parent → child | document → parent |
// | Bubbling path  | child → parent → document | parent → document |

// When we click an element, an event is created. The event travels to the clicked element (target), and when it reaches that element, its callback runs. Then the event may bubble up to its parent elements.

// Target phase: The button is the target element, but the target phase is the brief moment when the event reaches that button before it starts bubbling up.

// Mental Model:
// Clicked element = Target Element

// Code running on that clicked element
// = Target Phase

// Code running on ancestors afterward
// = Bubbling Phase
