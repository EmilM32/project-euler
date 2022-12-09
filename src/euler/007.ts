import { logTitle, logSubtitle, logResult } from '../utils/logs'

/**
 * Problem 7
 * 10001st prime
 *
 * By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
 * What is the 10 001st prime number?
 *
 * @see {@link https://projecteuler.net/problem=7}
 */

logTitle('Problem 7')
logSubtitle('10001st prime')

const searchPrimeIndex = 10001

const isPrime = (number: number): boolean => {
  if (number === 2 || number === 3) return true
  for (let i = 2; i * i <= number; i++) {
    if (number % i === 0) return false
  }

  return true
}

const primes: number[] = []

let n = 2
while (primes.length < searchPrimeIndex) {
  if (isPrime(n)) primes.push(n)
  n++
}

const result = primes.at(-1)

logResult(`Result of problem 7: ${result}`)
