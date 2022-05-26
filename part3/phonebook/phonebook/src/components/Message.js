import React from 'react'

import './Message.css'

export default function Message({ type, message }) {
  if (!message) {
    return null
  }
  const className = type === 'error' ? `Message-Error` : `Message-Success`
  return <div className={className}>{message}</div>
}
