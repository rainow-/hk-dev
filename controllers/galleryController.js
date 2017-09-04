var Photo = require('../models/photo');
var PhotoExtras = require('../models/photoextras');
var Promise = require('bluebird');

exports.gallery_list = function(req, res, next){
	const perPage = req.query.per_page;
	const page = req.query.page;

	var from = (page - 1) * perPage;

	if(req.query.s){

		var p1 = PhotoExtras.count( {$text: {$search: req.query.s} } ).exec();
		var p2 = PhotoExtras.find( {$text: {$search: req.query.s} } )
				.lean()
				.populate('photo')
				.exec();

		return Promise.join(p1, p2,(count, dataSet) => {
			console.log("Promise from database resolved. Data received -> query: " + req.query.s + ' -- count -> ' + count);

			let pages = Math.ceil(count / perPage);
			let replace = function(i) {
				let photo = i.photo;
				delete i.photo;
				return Object.assign(photo, {extras: i});
			}

			let r = dataSet.map(replace);
			res.json({photoset: { photo: r }, pages: pages});
		})
		.catch((err) => {
			console.log('error on search query:', err);
			res.status(500).json({error: err});	
		});	

	}
	else{
		var p1 = Photo.count().exec();
		var p2 = Photo.find()
					.lean()
					.populate('extras')
					.skip(from).limit(parseInt(perPage))
					.exec();

		return Promise.join(p1, p2, function(count, dataSet) {
			console.log("Promise from database resolved. Data received -> count: " + count);
			let pages = Math.ceil(count / perPage);
			res.json({photoset: { photo: dataSet }, pages: pages});
		})
		.catch(function(err){
			console.log('error when finding photo meta data:', err);
			res.status(500).json({error: err});	
		});		
	}
}