import React from 'react'
import Person from './Person'

export default function Persons({ persons }) {
  return persons.map(person => (
    <Person key={person.name} name={person.name} phone={person.phone} />
  ))
}
