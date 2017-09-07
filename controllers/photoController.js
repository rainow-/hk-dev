var Photo = require('../models/photo');
var PhotoExtras = require('../models/photoextras');
var Promise = require('bluebird');

exports.photo_list = function(req, res, next){
	
	let params = { 
		perPage: req.query.per_page,
		from: (req.query.page - 1) * req.query.per_page
	};

	if(req.query.s){
		processReqWithSearchText(req, res, next, params);
	}

	else{
		processReq(res, next, params);
	}
}

/*exports.photo_details = function(req, res, next){
	const id = req.params.id;

	PhotoExtras.findById(id)
	.then((photoExtras) => {
		res.json({extras: photoExtras});
	})
	.catch((err) => {
		console.log('error on search query:', err);
		res.status(500).json({error: err});	
	});
}*/

let processReqWithSearchText = function(req, res, next, params){

	let query,
		sort;

	switch(req.query.sort){
		case 'sort':
			query = {date: {$exists: true}};
			req.query.s === 'newest' ?  sort = {date: -1} : sort = {date: 1};
			break;
		default:
			query = {$text: {$search: req.query.s}};
	}

	let p1 = PhotoExtras.count(query).exec();
	let p2 = PhotoExtras.find(query)
			.lean()
			.populate('photo')
			.skip(params.from).limit(parseInt(params.perPage));
	if(req.query.s) p2.sort(sort);

	return Promise.join(p1, p2.exec(),(count, dataSet) => {
		let pages = Math.ceil(count / params.perPage);
		let replace = function(i) {
			let photo = i.photo;
			delete i.photo;
			return Object.assign(photo, {extras: i});
		}

		let re = dataSet.map(replace);
		res.json({photoset: { photo: re }, pages: pages});
	})
	.catch((err) => {
		console.log('error on search query:', err);
		res.status(500).json({error: err});	
	});	
}

let processReq = function(res, next, params){
	var p1 = Photo.count().exec();
	var p2 = Photo.find()
				.lean()
				.populate('extras')
				.skip(parseInt(params.from)).limit(parseInt(params.perPage))
				.exec();

	return Promise.join(p1, p2, function(count, dataSet) {
		let pages = Math.ceil(count / params.perPage);
		res.json({photoset: { photo: dataSet }, pages: pages});
	})
	.catch(function(err){
		console.log('error when finding photo meta data:', err);
		res.status(500).json({error: err});	
	});	
}