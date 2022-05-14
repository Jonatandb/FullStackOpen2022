import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const generateRandomIndex = max => Math.floor(Math.random() * max)

const getAnecdoteWithMoreVote = (anecdotes, votes) => {
  const max = Math.max(...Object.values(votes))
  const maxIndex = Object.keys(votes).find(key => votes[key] === max)
  return <p>{anecdotes[maxIndex]}</p>
}

const App = props => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState({})

  return (
    <>
      <div>{props.anecdotes[selected]}</div>
      <p>Has {votes[selected] || 0} votes </p>
      <button
        onClick={() =>
          setVotes(prevState => ({
            ...prevState,
            [selected]: prevState[selected] + 1 || 1,
          }))
        }
      >
        Vote
      </button>
      <button
        onClick={() => setSelected(generateRandomIndex(anecdotes.length))}
      >
        Next anecdote
      </button>
      <h2>Anecdote with more votes</h2>
      {getAnecdoteWithMoreVote(anecdotes, votes)}
    </>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
]

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'))

