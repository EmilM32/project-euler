import { logTitle, logSubtitle, logResult } from '../utils/logs'

/**
 * Problem 9
 * Special Pythagorean triplet
 *
 * A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
 *
 * a^2 + b^2 = c^2
 * For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.
 *
 * There exists exactly one Pythagorean triplet for which a + b + c = 1000.
 * Find the product abc.
 *
 * @see {@link https://projecteuler.net/problem=9}
 */

logTitle('Problem 9')
logSubtitle('Special Pythagorean triplet')

/**
 * Calculates if the given numbers make up a pythagorean triplet
 * @param numbers the numbers to be checked
 * @returns true if the numbers make up a pythagorean triplet, false otherwise
 */
const isPythagoreanTriplet = (numbers: number[]): boolean => {
  const [a, b, c] = numbers.sort((n1, n2) => n1 - n2)

  return Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2)
}

const findProduct = (sum: number): number | undefined => {
  for (let a = 1; a < sum / 3; a++) {
    for (let b = a; b < sum / 2; b++) {
      const c = sum - a - b

      if (isPythagoreanTriplet([a, b, c])) {
        return a * b * c
      }
    }
  }

  return undefined
}

const result = findProduct(1000)

logResult(`Result of problem 9: ${result}`)
