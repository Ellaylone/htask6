const assert = require('chai').assert
const fibonacci = require('fibonacci')
const path = require('path')
const helpers = require(path.join(__dirname, '..', 'src', 'helpers'))

describe('getRandomIteration', () => {
  for (let i = 0; i < 10; i++) {
    it('should return random integer in 1-10000 range', () => {
      let testRandIteration = helpers.getRandomIteration()
      assert.isAtLeast(testRandIteration, 1, 'random number is less than 1')
      assert.isAtMost(testRandIteration, 10000, 'rangom number is more than 10000')
    })
  }
})

describe('fibonacci', () => {
  let testResults = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765]
  for (let i = 1; i <= 20; i++) {
    it('should return object', () => {
      let randFibonacci = fibonacci.iterate(i)
      assert.isObject(randFibonacci, 'randFibonacci should be an object')
      assert.equal(randFibonacci.number, testResults[i - 1], 'generated number is wrong')
      assert.equal(randFibonacci.length, testResults[i - 1].toString().length, 'generated length is wrong')
      assert.equal(randFibonacci.iterations, i, 'number of iterations if wrong')
      assert.isAtLeast(randFibonacci.ms, 0, 'generation time is less than 0')
    })
  }
})
