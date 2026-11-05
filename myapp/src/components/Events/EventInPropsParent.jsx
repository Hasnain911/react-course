import React from 'react'
import EventInPropsChild from './EventInPropsChild'

const EventInPropsParent = () => {

    const SentEvent = () => {
        alert('Event Sent From Parent Component Called From Child Component')
    }
  return (
    <div>
      <EventInPropsChild onClick={SentEvent} />
    </div>
  )
}

export default EventInPropsParent