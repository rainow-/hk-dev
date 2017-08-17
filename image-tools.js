// see popdb

/*
	m: 				small, 240 on longest side 
	c: 				medium 800, 800 on longest side
	l (b?): 	large, 1024 on longest side 
	h: 				large, 1600 on longest side
*/

var fs = require('fs');
var gm = require('gm');

var async = require('async');

const DATA_FILE = path.join(__dirname, 'data.json');

function resize(file, subfolder, width){
	var title = file.substr(0, file.lastIndexOf('.')); // e.g. 'cat.picture-cute'
	var extension = file.substr(file.lastIndexOf('.')); // e.g. '.jpg'

	gm('client/assets/images/' + file)
	.resize(width)
	.noProfile()
	.write('client/assets/' + subfolder + '/' + title + '-' + width + extension, function(err) {
		if(!err) console.log('done');
		else console.log(err);
	});
}

function resizeAll(cb) {
	fs.readdir('./client/assets/images/', (err, files) => {
		files.forEach(file => {
			async.parallel([
				function(callback){
					resize(file, 'images-m', 240);
				},
				function(callback){
					resize(file, 'images-c', 800);
				},
				function(callback){
					resize(file, 'images-l', 1024);
				},
				function(callback){
					resize(file, 'images-h', 1600);
				},
			], cb);
		});
	});
}

// run from command line with: node -e '"require(\"./image-tools\").functionName()"

module.exports.resizeall = function() {
	resizeAll(function(err, result) {
		if(err) console.log(err);
	});
}

module.exports.populatedata = function() {
	fs.readdir('./client/assets/images/', (err, files) => {
		files.forEach(file => {
			
		});
	});
}	

module.exports.removexmpfiles = function() {
	console.log("hello world!");
	var path = './client/assets/images/';

	fs.readdir(path, (err, files) => {
		files.forEach(file => {
			let extension = file.substr(file.lastIndexOf('.') + 1);

			if(extension === 'xmp'){
				fs.unlink(path + file, (err) => {
					if(err) throw err;
					console.log('successfully deleted ' + path + file);
				});
			}
		});
	});
}

module.exports.removeduplicates = function() {
	var path = './client/assets/images/';

	fs.readdir(path, (err, files) => {
		files.forEach(file => {
			let extension = file.substr(file.lastIndexOf('.') + 1);

			if(file.includes('(1)') || extension === 'CR2'){
				fs.unlink(path + file, (err) => {
					if(err) throw err;
					console.log('successfully deleted ' + path + file);
				});
			}
		});
	});
}

module.exports.writedata = function() {
	var path = './client/assets/images/';
	var images = [];
	var count = 0;

	fs.readdir(path, (err, files) => {
		files.forEach(file => {
			let obj = {
				name: file
			};
			images.push(obj);
			count++;
		});
	});

	fs.readFile(DATA_FILE, (err, data) => {
		fs.writeFile(DATA_FILE, JSON.stringify(images, null, 4), () => {
			console.log("JSON objects written to file: " + count);
		});
	});
}
