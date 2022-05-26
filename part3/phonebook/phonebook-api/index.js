const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')

app.use(express.static('build'))
app.use(express.json())
app.use(cors())

// https://stackoverflow.com/questions/51409771/logging-post-body-size-using-morgan-when-request-is-received
morgan.token('body', (req, res) =>
  req.method === 'POST' ? JSON.stringify(req.body) : '',
)
app.use(
  morgan(':method :url :status :res[content-length] - :response-time ms :body'),
)

let persons = [
  {
    name: 'Arto Hellas',
    number: '040-123456',
    id: 1,
  },
  {
    name: 'Ada Lovelace',
    number: '39-44-5323523',
    id: 2,
  },
  {
    name: 'Dan Abramov',
    number: '12-43-234345',
    id: 3,
  },
  {
    name: 'Mary Poppendieck',
    number: '39-23-6423122',
    id: 4,
  },
]

app.get('/info', (request, response) => {
  response.send(
    `<p>Phonebook has info for ${persons.length} people</p><br/>${new Date()}`,
  )
})

app.get('/api/persons', (request, response) => {
  response.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find(n => n.id === id)
  if (!person) {
    return response.status(404).end()
  }
  response.json(person)
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(n => n.id !== id)
  response.status(204).end()
})

app.post('/api/persons', (request, response) => {
  const { name, number } = request.body
  if (!name || !number) {
    return response.status(400).json({
      error: 'Name or number is missing',
    })
  }

  if (persons.find(n => n.name === name)) {
    return response.status(400).json({
      error: 'Name must be unique',
    })
  }

  const newPerson = {
    id: Math.floor(Math.random() * 10000),
    name,
    number,
  }
  persons = persons.concat(newPerson)
  response.send(newPerson)
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
