import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({ course }) => <h1>{course}</h1>

const Part = ({ part, exercises }) => (
  <p>
    {part} {exercises}
  </p>
)

const Content = ({ parts: [part1, part2, part3] }) => (
  <>
    <Part part={part1.name} exercises={part1.exercises} />
    <Part part={part2.name} exercises={part2.exercises} />
    <Part part={part3.name} exercises={part3.exercises} />
  </>
)

const Total = ({ parts }) => (
  <p>
    Number of exercises{' '}
    {parts[0].exercises + parts[1].exercises + parts[2].exercises}
  </p>
)

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10,
    },
    {
      name: 'Using props to pass data',
      exercises: 7,
    },
    {
      name: 'State of a component',
      exercises: 14,
    },
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

