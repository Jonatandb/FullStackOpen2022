import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-123456' },
  ])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filter, setFilter] = useState('')

  const results =
    filter === ''
      ? persons
      : persons.filter(person =>
          person.name.toLowerCase().includes(filter.toLowerCase()),
        )

  const handleNameChanged = e => {
    setNewName(e.target.value)
  }

  const handlePhoneChanged = e => {
    setNewPhone(e.target.value)
  }

  const handleFilterChanged = e => {
    setFilter(e.target.value)
  }

  const handleSumbit = e => {
    e.preventDefault()
    if (persons.find(p => p.name === newName)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      setPersons([...persons, { name: newName, phone: newPhone }])
      setNewName('')
      setNewPhone('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        Filter shown with:{' '}
        <input onChange={handleFilterChanged} value={filter} />
      </div>
      <h2>Add a new</h2>
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
      <h2>Numbers</h2>
      {results.map(person => (
        <p key={person.name}>
          {person.name} {person.phone}
        </p>
      ))}
    </div>
  )
}

export default App
