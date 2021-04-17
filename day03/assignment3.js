const fs = require('fs');
const moment = require('moment');
const XLSX = require('xlsx');
const chalk = require('chalk');

fs.readFile('./product.json', 'utf8', (err, data) => {
	if (err) {
		console.log(chalk.red('ERROR!'), err);
		console.log('err', err);
	}
	let productObj = JSON.parse(data);
	productObj = productObj.map((item) => {
		item.updated = moment(item.dateUpdated).format('MM/DD/YYYY');
		delete item.dateUpdated;
		return item;
	});

	// create 'worksheet' object from json
	const ws = XLSX.utils.json_to_sheet(productObj);
	// Optional: config columns width (character length)
	ws['!cols'] = [{ width: 20 }, { width: 15 }, { width: 20 }, { width: 20 }, { width: 20 }];
	// create 'workbook' object (which contains multiple sheet)
	const wb = XLSX.utils.book_new();
	XLSX.utils.book_append_sheet(wb, ws, 'Products');
	// convert to Microsoft EXCEL workbook and write to a Buffer object
	const buf = XLSX.write(wb, { type: 'buffer', bookType: 'xlsx' });

  console.log('buf', buf)

  fs.writeFile('./product.xlsx', buf, err => {
    if (err) {
      console.log('err', err)
    }
    console.log(chalk.green('Success'))
  })
});


