const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

const DATA_FILE = path.join(__dirname, 'data.json');
const STATIC_DIR = path.join(__dirname, 'client/build/');

console.log("STATIC DIR:", STATIC_DIR);

app.use(express.static(STATIC_DIR));

app.get('/api/gallery', (req, res) => {
	const perPage = req.query.per_page;
	const page = req.query.page;
	const photoSet = [];
	var pages = 0;

	fs.readFile(DATA_FILE, (err, data) => {
		let d = JSON.parse(data);
		let images = d.photo;

		pages = Math.ceil(images.length / perPage);

		// do this outside of readFile?
		let i = (page - 1) * perPage;
		let to = page * perPage;

		while(images[i] && i < to){
			photoSet.push(images[i]);
			i++;
		}

		res.setHeader('Cache-Control', 'no-cache');
		res.json({photoset: { photo: photoSet }, pages: pages});
	});
});

app.get('*', (req, res) => {
	res.sendFile(STATIC_DIR + 'index.html');
}); 

module.exports = app;
