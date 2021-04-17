const express = require('express');
const fs = require('fs');
const chalk = require('chalk');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  fs.readFile('./html.html', 'utf8', (err, data) => {
    if (err) {
      console.log(chalk.red('ERROR:'), err)
    }
    res.send(data);
  })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.get('/homepage', (req, res) => {
  res.send(`Get request to the Homepage`)
  res.redirect('/homepage/2')
  // res.redirect('/homepage/2')
})

app.get('/homepage/:id', (req, res) => {
  res.send(`Get request to the Homepage ${req.params.id}`)
})

app.post('/homepage', (req, res) => {
  console.log(chalk.green('req12'), req.body)
  res.send(`Post request to the Homepage`)
})

// app.get('/news', (req, res) => {
//   let dataHtml = null
//   fs.readFile('html.html', 'utf8', (err, data) => {
//     if (err) {
//       console.log(chalk.red('ERROR:'), err)
//     }
//     dataHtml = data
//   })
//   res.render('./html.html', {name: 'Tobi'}, (err, html) => {
//     if (err) {
//       console.log(chalk.red('ERROR RENDER:'), err)
//     }
//     console.log('saasasas', html)
//   })
// })

app.use(express.static('public'));

app.use('/static', express.static('public'))