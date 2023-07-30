const {Drink, User} = require('../models');

module.exports = {

    async getAllDrinks(req, res) {
        try {
            const DrinkData = await Drink.find();
            res.json(DrinkData);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async getDrinkById({ params }, res) {
        try {
            const DrinkData = await Drink.findOne({ _id: params.id });
            if (!DrinkData) {
                res.status(404).json({ message: 'No drink found with this id!' });
                return;
            }
            res.json(DrinkData);
        }
        catch (err) {
            res.status(500).json(err);
        }
    },
    