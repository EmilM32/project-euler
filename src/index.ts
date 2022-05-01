import cliSelect from 'cli-select'
import chalk from 'chalk'
import fs from 'fs'
import path from 'path'
import { fork } from 'child_process'
import { logWelcome } from './utils/logs'

const DIRECTORY_PATH = './src/euler/'

const availableFiles: string[] = []

logWelcome('Select project to run:')

fs.readdir(DIRECTORY_PATH, (err, files) => {
  if (err) throw new Error(err.message)

  files.forEach((file) => {
    availableFiles.push(file.split('.')[0])
  })

  cliSelect({
    values: availableFiles,
    valueRenderer: (value, selected) => {
      if (selected) {
        return chalk.underline(value)
      }

      return value
    },
  }).then((selected) => {
    const filePath = path.join(
      __dirname,
      `euler/${selected.value}.ts`,
    )

    const child = fork(path.join(filePath))
    child.on('error', (err) => {
      throw new Error(err.message)
    })
  })
})
