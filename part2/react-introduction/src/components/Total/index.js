const Total = ({ course: { parts } }) => (
  <h4>
    Total of {parts.reduce((acc, part) => acc + part.exercises, 0)} exercises
  </h4>
)
export default Total
