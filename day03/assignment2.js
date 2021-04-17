const fs = require('fs');
const moment = require('moment');

fs.readFile('./product.json', 'utf8', (err, data) => {
	if (err) {
		console.log('err', err);
	}
	let productObj = JSON.parse(data);
	if (productObj) {
		console.log('Count Products', productObj.length);
		productObj = productObj.reduce((initial, curProd, currentIndex) => {
			curProd.frowNow = moment(new Date(curProd.dateUpdated)).fromNow();
			initial.push(curProd);
			console.log(`${curProd.id} - ${curProd.name} - ${curProd.price} VND - Cp nht cach ay ${curProd.realDate}`);
			return initial;
		}, []);
		console.log('productObj', productObj);
	}
});
