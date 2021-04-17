const https = require('https');

const option = {
  hostname: 'mp3.zing.vn',
  port: 443,
  path: '',
  method: 'GET',
}

const req = https.request(option, res => {
  console.log(`statusCode: ${res.statusCode} `)

  res.on('data', d => {
    console.log('PART', d.toString('utf8'))
  })
})

req.on('error', error => {
  console.error(error)
})