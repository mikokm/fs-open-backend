const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Usage: node mongo.js <password> [<name> <number>]')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://fullstack:${password}@cluster0.zcuvl.mongodb.net/phonebook?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema)

if (process.argv.length == 3) {
  console.log('Phonebook contents')
  Person.find({}).then(result => {
    result.forEach(person => {
      console.log(person)
    })
    mongoose.connection.close()
  })

  return
}

const name = process.argv[3]
const number = process.argv[4]

const person = new Person({
  name: name,
  number: number
})

person.save().then(() => {
  console.log(`added ${name} number ${number} to phonebook`)
  mongoose.connection.close()
})
