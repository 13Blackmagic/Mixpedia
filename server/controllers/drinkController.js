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

    async getDrinkById( req , res) {
        try {
            const DrinkData = await Drink.findOne({ idDrink: req.params.idDrink })
            .select('-__v');
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

    async createDrink({ body }, res) {
        try {
            const DrinkData = await Drink.create(body);
            const user = await User.findOneAndUpdate(
                { _id: body.userId },
                { $addToSet: { drinks: DrinkData.idDrink } },
                { new: true }
            );
            if (!user) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.json(DrinkData);
        } catch (err) {
            console.log(err);
            res.status(400).json(err);
        }
    },

    async updateDrink({ params, body }, res) {
        try {
            console.log(req.params);
            const DrinkData = await Drink.findOneAndUpdate(
                { idDrink: params.idDrink },
                { $set: req.body },
                { runValidators: true, new: true }
            );
            if (!DrinkData) {
                res.status(404).json({ message: 'No drink found with this id!' });
            }

            res.json(DrinkData);
        } catch (err) {
            console.log(err);
            res.status(400).json(err);
        }
    },

    async deleteDrink({ params }, res) {
        try {
            const DrinkData = await Drink.findOneAndDelete({ idDrink: params.idDrink });
            if (!DrinkData) {
                res.status(404).json({ message: 'No drink found with this id!' });
                
            }
            const user = await User.findOneAndUpdate(
                { drinks: req.params.idDrink },
                { $pull: { drinks: req.params.idDrink } },
                { new: true }
            );
            if (!user) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.json(DrinkData);
        } catch (err) {
            res.status(400).json(err);
        }
    }
};