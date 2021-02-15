require('dotenv').config()

const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const Person = require('./models/person')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static('build'))

let logger = morgan(function (tokens, req, res) {
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms',
    req.method === 'POST' ? JSON.stringify(req.body) : ''
  ].join(' ')
})

app.use(logger)

app.get('/api/persons', (req, res) => {
  Person.find({}).then(people => {
    res.json(people)
  })
})

app.post('/api/persons', (req, res) => {
  let body = req.body
  if (!body.name || !body.number) {
    res.status(400).send({ error: "Name or number missing" })
    return
  }

  Person
    .find({})
    .then(people => {
      if (people.find(person => person.name == body.name)) {
        res.status(400).send({ error: "Name must be unique" })
        return
      }
    })

  const person = new Person({
    name: body.name,
    number: body.number
  })

  person.save().then(person => {
    res.json(person)
  })
})

app.get('/api/persons/:id', (req, res) => {
  const id = req.params.id
  Person.findById(id)
    .then(person => {
      if (person) {
        res.json(person)
      } else {
        res.status(404).send({ error: `No person with id ${id}` })
      }
    })
    .catch(error => next(error))
  // .catch(error => {
  //   console.log(error)
  //   res.status(400).send({ error: `malformatted id ${id}` })
  // })
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

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
