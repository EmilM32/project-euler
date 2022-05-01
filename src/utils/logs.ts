import chalk from 'chalk'
const { log } = console

export const logWelcome = (text: string): void => {
  log(chalk.green(text), '\n')
}

export const logTitle = (text: string): void => {
  log(chalk.bold.cyan(text))
}

export const logSubtitle = (text: string): void => {
  log(chalk.bold.magenta(text), '\n')
}

export const logResult = (text: string): void => {
  log(chalk.blue(text))
}
