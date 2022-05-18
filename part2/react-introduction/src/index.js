import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({ course: { name } }) => <h1>{name}</h1>

const Part = ({ part, exercises }) => (
  <p>
    {part} {exercises}
  </p>
)

const Content = ({ parts }) =>
  parts.map(part => (
    <Part key={part.id} part={part.name} exercises={part.exercises} />
  ))

const Total = ({ course: { parts } }) => (
  <h4>
    Total of {parts.reduce((acc, part) => acc + part.exercises, 0)} exercises
  </h4>
)

const Course = ({ course }) => {
  return (
    <>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total course={course} />
    </>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1,
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2,
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3,
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1,
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2,
        },
      ],
    },
  ]

  return courses.map(course => <Course key={course.id} course={course} />)
}

ReactDOM.render(<App />, document.getElementById('root'))

