import React from 'react'

export default function Filter({ handleFilterChanged, filter }) {
  return (
    <div>
      Filter shown with: <input onChange={handleFilterChanged} value={filter} />
    </div>
  )
}
