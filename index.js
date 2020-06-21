const fs = require('fs');
const _ = require('lodash');
const express = require('express');
const app = express();

console.clear();

let fileList = [];

fs.readdir('sample', (err, data) => {
	if (err) {
		console.log(err);
	} else {
		console.log(data);
		fileList = data;
		app.get('/', function (req, res) {
			res.send(`Hello World yo ${data.toString()}`);
		});
		app.listen(3000);
	}
});

// code to create sample

// for (let i = 0; i < 10; i++) {
//   fs.writeFile(`./sample/file${i}.txt`, `This is sample${i}`, function (
//     err
//   ) {
//     if (err) throw err;
//     console.log("Results Received");
//   });
// }

// fs.readFile("sample/DATA", "utf8", (err, contents) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(contents);
//   }
// });
