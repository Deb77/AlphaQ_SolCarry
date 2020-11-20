const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = Schema({
    customerId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    businessId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    driverId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    orderDetails: [{
        type: String
    }]
},
    { timestamps: true }
);

const Order = mongoose.model('order', orderSchema);

module.exports = Order;