import Content from '../Content'
import Header from '../Header'
import Total from '../Total'

const Course = ({ course }) => {
  return (
    <>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total course={course} />
    </>
  )
}

export default Course
