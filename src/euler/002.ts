import chalk from 'chalk'

/**
 * Problem 2
 * Even Fibonacci numbers
 *
 * Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
 * 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
 * By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
 *
 * @see {@link https://projecteuler.net/problem=2}
 */

console.log(chalk.bold.cyan('Problem 2'))
console.log(chalk.bold.magenta('Even Fibonacci numbers'), '\n')

const generateFibonacci = (maxValue: number): number[] => {
  const result = [1, 2]

  while (result.at(-1) < maxValue) {
    const nextFibonacciNumber = result.at(-1) + result.at(-2)
    if (nextFibonacciNumber < maxValue) {
      result.push(nextFibonacciNumber)
    } else {
      return result
    }
  }
}

const fibonacciNumbers = generateFibonacci(4_000_000)

const evenSum = fibonacciNumbers.reduce(
  (previousValue, currentValue) => {
    return currentValue % 2
      ? previousValue
      : previousValue + currentValue
  },
  0,
)

console.log(chalk.blue(`Result of problem 2: ${evenSum}`))
