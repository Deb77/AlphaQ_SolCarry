const Item = require('../models/Item');

const handleErrors = (err) => {
    let errors = { name: '', description: '', price: '', image: '' };
    if (err.message.includes('item validation failed')) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        });
    }
    return errors;
}

module.exports.item_get = async (req, res) => {
    try {
        const items = await Item.find(req.body);
        res.status(201).json( items )
    }
    catch(err){
        res.status(400).json("You don't have any items registered/There is connection problem");
    }
}

module.exports.item_post = async (req, res) => {
    try {
        await Item.create(req.body);
        res.status(201).json("Your item has been created");
    }
    catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({ errors });
    }
}

module.exports.item_update = async (req, res) => {
    try {
        await Item.findByIdAndUpdate(req.params.id, req.body);
        res.status(201).json("Your item's data has been updated successfully");
    }
    catch (err) {
        res.status(400).json("A problem occured while updating your item's data")
    }
}

module.exports.item_delete = async (req, res) => {
    try {
        await Item.findByIdAndDelete(req.params.id);
        res.status(201).json("The item has been deleted");
    }
    catch (err) {
        res.status(400).json("There was a problem deleting the item");
    }
}