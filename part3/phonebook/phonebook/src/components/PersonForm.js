import React from 'react'

export default function PersonForm({
  handleSumbit,
  handleNameChanged,
  handlePhoneChanged,
  newName,
  newPhone,
}) {
  return (
    <form onSubmit={handleSumbit}>
      <div>
        Name: <input onChange={handleNameChanged} value={newName} />
      </div>
      <div>
        Number: <input onChange={handlePhoneChanged} value={newPhone} />
      </div>
      <div>
        <button type='submit'>Add</button>
      </div>
    </form>
  )
}
