var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PhotoExtrasSchema = Schema(
	{
        title: String,
        width: Number,
    	height: Number,
    	signed: Boolean,
        date_painted: String,
        canvas_type: String,
        b_info: String,
        motive: String,
        price: Number,
        photo: {type: Schema.ObjectId, ref: 'Photo', required: true}
	}
);

// virtuals for extras
PhotoExtrasSchema
.virtual('dimensions_formatted')
.get(function () {
    return this.width + 'x' + this.height + ' cm';
});

PhotoExtrasSchema
.virtual('price_formatted')
.get(function () {
    return 'kr. ' + this.price + ',-';
});

PhotoExtrasSchema
.index( { "$**": "text" } );

module.exports = mongoose.model('PhotoExtras', PhotoExtrasSchema);