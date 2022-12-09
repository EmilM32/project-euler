import { logTitle, logSubtitle, logResult } from '../utils/logs'

/**
 * Problem 6
 * Sum square difference
 *
 * The sum of the squares of the first ten natural numbers is
 * 1^2 + 2^2 + ... + 10^2 = 385
 * The square of the sum of the first ten natural numbers is
 * (1 + 2 + ... + 10)^2 = 55^2 = 3025
 * Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is $3025 - 385 = 2640
 * Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
 *
 * @see {@link https://projecteuler.net/problem=6}
 */

logTitle('Problem 6')
logSubtitle('Sum square difference')

const maxNumber = 100

const getSumOfSquares = (number: number): number => {
  let result = 0

  for (let i = 1; i <= number; i++) {
    result += Math.pow(i, 2)
  }

  return result
}

const getSquareOfSum = (number: number): number => {
  let sum = 0
  for (let i = 1; i <= number; i++) {
    sum += i
  }

  return Math.pow(sum, 2)
}

const sumOfSquares = getSumOfSquares(maxNumber)
const squareOfSum = getSquareOfSum(maxNumber)

const result = squareOfSum - sumOfSquares

logResult(`Result of problem 6: ${result}`)
