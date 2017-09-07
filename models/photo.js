var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PhotoSchema = Schema(
	{
        	filename: {type: String, required: true},
        	url_o: {type: String, required: true},
                width_o: {type: Number, required: true},
                height_o: {type: Number, required: true},
                url_c: {type: String, required: true},
                width_c: {type: Number, required: true},
                height_c: {type: Number, required: true},
                url_h: {type: String, required: true},
                width_h: {type: Number, required: true},
                height_h: {type: Number, required: true},
                url_l: {type: String, required: true},
                width_l: {type: Number, required: true},
                height_l: {type: Number, required: true},
                url_m: {type: String, required: true},
                width_m: {type: Number, required: true},
                height_m: {type: Number, required: true},
                extras: {type: Schema.ObjectId, ref: 'PhotoExtras'}
	}
);

// virtual for Photo url (if needed later)
PhotoSchema
.virtual('photoUrl')
.get(function () {
	return '/gallery/photo/' + this._id;
});

module.exports = mongoose.model('Photo', PhotoSchema);