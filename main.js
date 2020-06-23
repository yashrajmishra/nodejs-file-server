const fs = require('fs');
const _ = require('lodash');
const express = require('express');
const app = express();
console.clear();

fs.readdir('sample', (err, data) => {
	if (err) {
		console.log(err);
	} else {
		console.log(data);
		app.set('view engine', 'ejs');
		app.get('/', (req, res) => {
			res.render('index', { data });
		});
		app.use('/download', express.static('sample'))
		app.listen(3000);
	}
});
