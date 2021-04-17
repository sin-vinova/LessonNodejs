const request = require('request')
const chalk = require('chalk')
const fs = require('fs')

request(
  {
    url: 'https://tuoitre.vn',
    gzip: true,
  },
  (error, response, body) => {
    console.log(chalk.red('ERROR: '), error)
    console.log(chalk.green('statusCode: '), response && response.statusCode)
    console.log(chalk.blue('body: '), body)
    fs.writeFile('./html.html', body, (error) => {
      if (error) {
        console.error(error)
      }
      console.log(chalk.green('SUCCESS'))
    })
  }
)