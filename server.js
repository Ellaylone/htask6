'use strict'

let express = require('express')
let app = express()

app.set('port', 9000)

app.get('/', (req, res) => {
  console.time('render')
  res.send('Hello World!')
  console.timeEnd('render')
})

app.listen(app.get('port'), () => {
  console.log(`Listening on port ${app.get('port')}`)
})
