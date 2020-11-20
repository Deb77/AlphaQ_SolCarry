const Order = require('../models/Order');
const Driver = require('../models/Driver');
const axios = require('axios');

module.exports.order_get = async(req, res) => {
    try {
        const orders = await Order.find(req.body);
        res.status(201).json( orders )
    }
    catch(err){
        res.status(400).json("You don't have any orders");
    }
}

module.exports.order_post = async (req, res) => {
    console.log(req.body);
    try {
        const drivers = await Driver.find({ available: true });
        let lat = "";
        let long = "";
        let closestDriver = drivers[0]._id;
        let closest = 10000000000;
        drivers.forEach(async (driver,i) => {
            lat = driver.lat;
            long = driver.long;
            const { data } = await
                axios.post(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${lat},${long}&destinations=New+York+City,NY&key=AIzaSyAX5oDs8RabZB7o1H1OJvPkENC3ugJhsZU`)
            distance = parseInt(data.rows[0].elements[0].distance.text.split(" ")[0]);
            if (closest > distance) {
                closest = distance;
                closestDriver = driver._id;
            }
            if (i === drivers.length - 1) {
                await Order.create({
                    customerId: req.body.customerId,
                    businessId: req.body.businessId,
                    driverId: closestDriver,
                })
            }
        })
        res.status(201).json("Your order was placed successfully");
    }
    catch (err) {
        res.status(400).json("An error occured while placing the order, please try again");
    }
}