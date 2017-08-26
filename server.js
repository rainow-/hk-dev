const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const DATA_FILE = path.join(__dirname, 'data.json');

app.set('port', (process.env.API_PORT || 3001));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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

export default app;