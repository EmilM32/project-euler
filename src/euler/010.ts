import { logTitle, logSubtitle, logResult } from '../utils/logs'

/**
 * Problem 10
 * Summation of primes
 *
 * The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
 * Find the sum of all the primes below two million.
 *
 * @see {@link https://projecteuler.net/problem=10}
 */

logTitle('Problem 10')
logSubtitle('Summation of primes')

const isPrime = (number: number): boolean => {
  if (number === 2 || number === 3) return true
  for (let i = 2; i * i <= number; i++) {
    if (number % i === 0) return false
  }

  return true
}

const sumOfPrimes = (limit: number): number => {
  let sum = 0
  for (let i = 2; i < limit; i++) {
    if (isPrime(i)) sum += i
  }

  return sum
}

const result = sumOfPrimes(2_000_000)

logResult(`Result of problem 10: ${result}`)
