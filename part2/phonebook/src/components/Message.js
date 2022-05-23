import React from 'react'

import './Message.css'

export default function Message({ message }) {
  if (!message) {
    return null
  }
  return <div className='message'>{message}</div>
}
