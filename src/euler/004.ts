import { logTitle, logSubtitle, logResult } from '../utils/logs'

/**
 * Problem 4
 * Largest palindrome product
 *
 * A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
 * Find the largest palindrome made from the product of two 3-digit numbers.
 *
 * @see {@link https://projecteuler.net/problem=4}
 */

logTitle('Problem 4')
logSubtitle('Largest palindrome product')

const isPalindrome = (value: number): boolean => {
  const numberAsString = value.toString()
  const reversedNumber = numberAsString.split('').reverse().join('')

  return numberAsString === reversedNumber
}

const largestPalindromic = (digits: number): number => {
  const largestNumber = Math.pow(10, digits) - 1
  const smallestNumber = Math.pow(10, digits - 1)
  let largestPalindrome = 0

  for (let i = largestNumber; i > smallestNumber; i--) {
    for (let j = largestNumber; j > smallestNumber; j--) {
      const number = i * j
      if (isPalindrome(number) && number > largestPalindrome) {
        largestPalindrome = number
      }
    }
  }

  return largestPalindrome
}

const result = largestPalindromic(3)

logResult(`Result of problem 4: ${result}`)
