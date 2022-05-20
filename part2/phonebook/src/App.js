import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'
const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3001/persons').then(response => {
      setPersons(response.data)
    })
  }, [])

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
      <Filter filter={filter} handleFilterChanged={handleFilterChanged} />

      <h3>Add a new</h3>
      <PersonForm
        handleSumbit={handleSumbit}
        handleNameChanged={handleNameChanged}
        handlePhoneChanged={handlePhoneChanged}
        newName={newName}
        newPhone={newPhone}
      />
      <h2>Numbers</h2>
      <Persons persons={results} />
    </div>
  )
}

export default App
