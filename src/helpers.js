'use strict'

const helpers = {
  getRandomIteration () {
    const min = 1
    const max = 10000

    return Math.floor(Math.random() * (max - min + 1) + min)
  }
}

module.exports = helpers
