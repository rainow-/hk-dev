var fs = require('fs');
var gm = require('gm');

gm('client/assets/images/odzBtWa.jpg')
	.resize(240, 240)
	.noProfile()
	.write('client/assets/images/odzBtWa-240.jpg', function(err) {
		if(!err) console.log('done');
		else console.log(err);
});