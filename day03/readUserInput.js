const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});
const chalk = require('chalk');
const moment = require('moment');

let name = null;
let age = null;
let homeTown = null;
readline.question("What's your name ? ", (name) => {
	name = name;
	readline.question("What's your year of birth ? (dd/mm/yyyy)", (age) => {
		if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(age)) {
			console.log('You are input wrong format !');
			readline.close();
			return;
		}
		const yob = moment(age, 'dd/mm/yyyy');
		const fromNow = yob.fromNow();
		age = fromNow;
		readline.question("What's your home town ? ", (homeTown) => {
			homeTown = homeTown;
			console.log(
				'Thank you. Hello ' +
					chalk.hex('#1abc9c').bgWhite(name) +
					', ' +
					'so you are ' +
					chalk.hex('#3498db').bgWhite(age) +
					' years old and from ' +
					chalk.hex('#e67e22').bgWhite(homeTown)
			);
			readline.close();
		});
	});
});

readline.question("What's your home town ?", (answer) => {
	homeTown = answer;

	console.log(
		'Thank you. Hello ' +
			chalk.hex('#1abc9c').bgWhite(name) +
			', ' +
			'so you are ' +
			chalk.hex('#3498db').bgWhite(age) +
			' years old and from ' +
			chalk.hex('#e67e22').bgWhite(homeTown)
	);
});
