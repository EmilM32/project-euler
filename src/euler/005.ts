import { logTitle, logSubtitle, logResult } from '../utils/logs'

/**
 * Problem 5
 * Smallest multiple
 *
 * 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
 * What is the smallest positive number that is evenly divisible by all the numbers from 1 to 20?
 *
 * @see {@link https://projecteuler.net/problem=5}
 */

logTitle('Problem 5')
logSubtitle('Smallest multiple')

const maxDivider = 20
let result = maxDivider

const isNumberEvenlyDivisible = (number: number): boolean => {
  let result = true
  for (let i = 1; i <= maxDivider; i++) {
    if (number % i) {
      result = false
      break
    }
  }
  return result
}

while (!isNumberEvenlyDivisible(result)) {
  result++
}

logResult(`Result of problem 5: ${result}`)
