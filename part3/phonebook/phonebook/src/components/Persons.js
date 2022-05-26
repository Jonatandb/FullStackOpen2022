import React from 'react'
import Person from './Person'

export default function Persons({ persons, onPersonDeleted }) {
  return persons.map(person => (
    <Person key={person.id} person={person} onPersonDeleted={onPersonDeleted} />
  ))
}
