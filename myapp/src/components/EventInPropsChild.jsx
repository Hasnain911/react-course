import React from 'react'

const EventInPropsChild = (props) => {
const containerStyle = {
  display: "flex",
  justifyContent: "center",
  marginTop: "20px",
};

const buttonStyle = {
  padding: "10px 20px",
  backgroundColor: "#2563eb",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};
 const ReceivedEvent = props.onClick
return (
  
  <div style={containerStyle}>
    <button onClick={ReceivedEvent} style={buttonStyle}>
      Click Me
    </button>
  </div>
)
}

export default  EventInPropsChild