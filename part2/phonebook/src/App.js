import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personsService from './services/personsService'
import Message from './components/Message'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filter, setFilter] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    personsService.getAll().then(initialPersons => {
      setPersons(initialPersons)
    })
  }, [])

  const filteredResults =
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
    const oldPerson = persons.find(p => p.name === newName)
    if (oldPerson) {
      const shouldUpdate = window.confirm(
        `${newName} is already added to phonebook, replace the old number with a new one?`,
      )
      if (shouldUpdate) {
        const updatedPerson = { ...oldPerson, number: newPhone }
        personsService.update(updatedPerson).then(returnedPerson => {
          setPersons(
            persons.map(p => (p.id !== oldPerson.id ? p : returnedPerson)),
          )
          setNewName('')
          setNewPhone('')
          setMessage(`Updated ${updatedPerson.name}`)
          setTimeout(() => {
            setMessage(null)
          }, 5000)
        })
      }
    } else {
      const newPerson = { name: newName, number: newPhone }
      personsService.create(newPerson).then(createdPerson => {
        setPersons([...persons, createdPerson])
        setNewName('')
        setNewPhone('')
        setMessage(`Added ${newPerson.name}`)
        setTimeout(() => {
          setMessage(null)
        }, 5000)
      })
    }
  }

  const handlePersonDeleted = id => {
    const personToDelete = persons.find(p => p.id === id)
    if (window.confirm(`Delete ${personToDelete.name}?`))
      personsService.remove(id).then(() => {
        setPersons(persons.filter(person => person.id !== id))
        setMessage(`Deleted ${personToDelete.name}`)
        setTimeout(() => {
          setMessage(null)
        }, 5000)
      })
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Message message={message} />
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
      <Persons
        persons={filteredResults}
        onPersonDeleted={handlePersonDeleted}
      />
    </div>
  )
}

export default App
