import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <h1>Give feedback</h1>
      <Button text='good' onClick={() => setGood(good + 1)} />
      <Button text='neutral' onClick={() => setNeutral(neutral + 1)} />
      <Button text='bad' onClick={() => setBad(bad + 1)} />
      {good === 0 && bad === 0 && neutral === 0 ? (
        <h2>No feedback given</h2>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Statistics</th>
            </tr>
          </thead>
          <tbody>
            <Statistics text={'Good'} value={good} />
            <Statistics text={'Neutral'} value={neutral} />
            <Statistics text={'Bad'} value={bad} />
            <Statistics text={'All'} value={good + neutral + bad} />
            <Statistics
              text={'Average'}
              value={good * 1 + neutral * 0 + bad * -1}
            />
            <Statistics
              text={'Positive'}
              value={(good * 100) / (good + neutral + bad) + ' %'}
            />
          </tbody>
        </table>
      )}
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

