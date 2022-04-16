import chalk from 'chalk'

/**
 * Problem 1
 * Multiples of 3 or 5
 *
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
 * Find the sum of all the multiples of 3 or 5 below 1000.
 *
 * @see {@link https://projecteuler.net/problem=1}
 */

console.log(chalk.bold.cyan('Problem 1'))
console.log(chalk.bold.magenta('Multiples of 3 or 5'), '\n')

let i = 0
let sum = 0
while (i < 1000) {
  if (!(i % 3) || !(i % 5)) sum += i
  i++
}

console.log(chalk.blue(`Result of problem 1: ${sum}`))
