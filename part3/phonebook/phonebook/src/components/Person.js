import React from 'react'

export default function Person({
  person: { id, name, number },
  onPersonDeleted,
}) {
  return (
    <>
      <p>
        {name} {number}{' '}
        <button onClick={() => onPersonDeleted(id)}>Delete</button>
      </p>
    </>
  )
}
