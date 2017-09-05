var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PhotoExtrasSchema = Schema(
	{
        title: String,
        width: Number,
    	height: Number,
    	signed: Boolean,
        date_painted: String,   // date for queries on text indexing
        date: Date,             // date for queries w/ sort by date
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

// indexes for extras
// text index
PhotoExtrasSchema
.index( { "$**": "text" } );

// single field indexes
PhotoExtrasSchema
.index( { date: 1 } );

PhotoExtrasSchema
.index( { motive: 1 } );

PhotoExtrasSchema
.index( { canvas_type: 1 } );

module.exports = mongoose.model('PhotoExtras', PhotoExtrasSchema);