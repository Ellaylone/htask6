'use strict'

const express = require('express')
const fibonacci = require('fibonacci')
const path = require('path')

const app = express()
app.set('helpers', path.join(__dirname, 'src', 'helpers'))
const helpers = require(app.get('helpers'))

app.set('port', (process.env.PORT || 5000))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  console.time('render')
  let randIteration = helpers.getRandomIteration()
  let randFibonacci = fibonacci.iterate(randIteration)
  res.render('layout', { fibo: randFibonacci })
  console.timeEnd('render')
  console.log('iteration:', '#' + randIteration)
})

app.listen(app.get('port'), () => {
  console.log(`Listening on port ${app.get('port')}`)
})
