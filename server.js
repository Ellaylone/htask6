'use strict'

const express = require('express')
const fibonacci = require('fibonacci')
const path = require('path')

const app = express()

app.set('port', (process.env.PORT || 5000))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  console.time('render')
  let randIteration = Math.floor(Math.random() * (4000 - 1 + 1) + 1)
  let randFibonacci = fibonacci.iterate(randIteration)
  console.log(randFibonacci)
  res.status(200).send({ fibo: randFibonacci })
  console.timeEnd('render')
})

app.listen(app.get('port'), () => {
  console.log(`Listening on port ${app.get('port')}`)
})
