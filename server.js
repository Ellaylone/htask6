'use strict'

const express = require('express')
const fibonacci = require('fibonacci')
const path = require('path')

const app = express()

app.set('port', (process.env.PORT || 5000))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')))
let rand = {
  min: 1,
  max: 8000
}

app.get('/', (req, res) => {
  console.time('render')
  let randIteration = Math.floor(Math.random() * (rand.max - rand.min + 1) + rand.min)
  let randFibonacci = fibonacci.iterate(randIteration)
  console.log(randFibonacci)
  res.render('layout', { fibo: randFibonacci })
  console.timeEnd('render')
})

app.listen(app.get('port'), () => {
  console.log(`Listening on port ${app.get('port')}`)
})
