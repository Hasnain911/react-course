import React from "react"
import VirtualDom from "./components/VirtualDom.jsx"
import MultipleValues from "./components/MultipleValues.jsx"
import Conditional from "./components/Conditional.jsx"
import ReactInterview1 from "./components/ReactInterview1"
import SevenWonders from "./components/SevenWonders"
import StyleComponent from "./components/StyleComponent.jsx"
import EventHandling from "./components/EventHandling.jsx"
import EventInPropsParent from "./components/EventInPropsParent.jsx"
import EventPropagation from "./components/EventPropagation.jsx" 
import StateHook from "./hooks/StateHook.jsx"
import StateChallenge from "./hooks/StateChallenge.jsx"
import GrandParent from "./hooks/GrandParent.jsx"
import DerivedState from "./hooks/DerivedState.jsx"
import LiftingStateUp from "./hooks/LiftingStateUp.jsx"
import Todo from "./projects/todo/Todo.jsx"
import RegistrationForm from "./projects/Forms/RegistrationForm.jsx"
import LoginForm from "./projects/Forms/LoginForm.jsx"


const App = () => {
  return (
    <>
      {/* <VirtualDom/> */}
      {/* <MultipleValues /> */}
      {/* <Conditional/> */}
      {/* <ReactInterview1/>  */}
      {/* <SevenWonders /> */}
      {/* <StyleComponent /> */}
      {/* <EventHandling /> */}
      {/* <EventInPropsParent /> */}
      {/* <EventPropagation /> */}
      {/* <StateHook /> */}
      {/* <StateChallenge  />    */}
      {/* <GrandParent /> */}
      {/* <DerivedState/> */}
      <LiftingStateUp />
      {/* <Todo/> */}
      {/* {<RegistrationForm />} */}
      {/* {<LoginForm />} */}

    </>
  )
}
export default App
