import { logTitle, logSubtitle, logResult } from '../utils/logs'

/**
 * Problem 3
 * Largest prime factor
 *
 * The prime factors of 13195 are 5, 7, 13 and 29.
 * What is the largest prime factor of the number 600851475143 ?
 *
 * @see {@link https://projecteuler.net/problem=3}
 */

logTitle('Problem 3')
logSubtitle('Largest prime factor')

const SEARCH_NUMBER = 600_851_475_143

const getFactorNumbers = (number: number): number[] => {
  const result: number[] = []
  const square = Math.floor(Math.sqrt(number))

  for (let i = 1; i < square; i++) {
    if (number % i === 0) result.push(i)
  }

  return result
}

const isPrime = (number: number): boolean => {
  if (number === 2 || number === 3) return true
  for (let i = 2; i * i <= number; i++) {
    if (number % i === 0) return false
  }

  return true
}

const getPrimeFactors = (numbers: number[]): number[] =>
  numbers.filter((number) => isPrime(number))

const factorNumbers = getFactorNumbers(SEARCH_NUMBER)
const primeFactors = getPrimeFactors(factorNumbers)
const maxPrimeNumber = Math.max(...primeFactors)

logResult(`Result of problem 3: ${maxPrimeNumber}`)
