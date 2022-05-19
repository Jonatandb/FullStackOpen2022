import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }])
  const [newName, setNewName] = useState('')

  const handleNameChanged = e => {
    setNewName(e.target.value)
  }

  const handleSumbit = e => {
    e.preventDefault()
    if (persons.find(p => p.name === newName)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      setPersons([...persons, { name: newName }])
      setNewName('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSumbit}>
        <div>
          Name: <input onChange={handleNameChanged} value={newName} />
        </div>
        <div>
          <button type='submit'>Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => (
        <p key={person.name}>{person.name}</p>
      ))}
    </div>
  )
}

export default App
