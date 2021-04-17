const request = require('request');
const cheerio = require('cheerio');
const chalk = require('chalk');

/*
  ref: https://www.digitalocean.com/community/tutorials/how-to-use-node-js-request-and-cheerio-to-set-up-simple-web-scraping
*/

request(
  'https://news.ycombinator.com/',
  (err, res, html) => {
    if (!err && res.statusCode === 200) {
      // console.log(chalk.green('HTML'), html)
      let $ = cheerio.load(html);
      let parsedResults = [];
      $('span.comhead').each((i, element) => {
        let a = $(element).prev();
        let rank = a.parent().parent().text();
        // let rank = a.parent().parent().children('.title').children('.rank').text();
        let title = a.text();
        let url = a.attr('href')
        let subtext = a.parent().parent().next().children('.subtext').children();
        let points = $(subtext).eq(0).text()
        let username = $(subtext).eq(1).text()
        let comments = $(subtext).eq(2).text()
        let metadata = {
          rank: parseInt(rank),
          title: title,
          url: url,
          points: parseInt(points),
          username: username,
          comments: parseInt(comments),
        }
        parsedResults.push(metadata)
      })
      console.log(chalk.green('check'), parsedResults)
    }
  }
)