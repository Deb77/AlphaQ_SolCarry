const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = Schema({
    name: {
        type: String,
        required: [true, "Please item name"],
    },
    description: {
        type: String,
        required: [true, "Please enter item's description"],
    },
    businessId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    price: {
        type: Number,
        required: [true, "Please enter item's price"]
    },
    image: {
        type: String,
        required: [true, "Please add an image of the item"]
    }
},
    { timestamps: true }
);

const Item = mongoose.model('item', itemSchema);

module.exports = Item;