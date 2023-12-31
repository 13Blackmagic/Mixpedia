const router = require('express').Router();
const{
    getAllDrinks,
    getDrinkById,
    createDrink,
    updateDrink,
    deleteDrink
} = require('../../controllers/drinkController');

router.route('/').get(getAllDrinks).post(createDrink);

router
.route('/:idDrink')
.get(getDrinkById)
.put(updateDrink)
.delete(deleteDrink);



module.exports = router;