const { response } = require('express')
const express = require('express')
const app = express()
app.use(express.json())

let persons = [
  {
    "name": "Arto Hellas",
    "number": "040-123456",
    "id": 1
  },
  {
    "name": "Ada Lovelace",
    "number": "39-44-5323523",
    "id": 2
  },
  {
    "name": "Dan Abramov",
    "number": "12-43-234345",
    "id": 3
  },
  {
    "name": "Mary Poppendieck",
    "number": "39-23-6423122",
    "id": 4
  },
  {
    "name": "Grace Hopper",
    "number": "1337",
    "id": 5
  }
]

app.get('/api/persons', (req, res) => {
  res.json(persons)
})

app.post('/api/persons', (req, res) => {
  let newPerson = req.body
  if (!newPerson.name || !newPerson.number) {
    res.status(400).send({ error: "Name or number missing" })
    return
  }

  if (persons.find(person => person.name == newPerson.name)) {
    res.status(400).send({ error: "Name must be unique" })
    return
  }

  newPerson.id = Math.floor(Math.random() * 50000)
  persons = persons.concat(newPerson)
  res.json(newPerson)
})

app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  const person = persons.find(person => person.id === id)

  if (person) {
    res.json(person)
  } else {
    res.status(404).send({ error: `No person with id ${id}`})
  }
})

app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  persons = persons.filter(person => person.id !== id)
  res.status(204).end()
})

app.get('/info', (req, res) => {
  const message =
    `<p>Phonebook has info for ${persons.length} people</p>` +
    `<p>${new Date()}</p>`
  res.send(message)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
