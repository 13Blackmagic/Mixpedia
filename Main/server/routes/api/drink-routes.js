const router = require('express').Router();
const{
    getDrinks,
    getSingleDrink,
    createDrink,
    updateDrink,
    deleteDrink
} = require('../../controllers/drink-controller');

router.route('/').get(getDrinks).post(createDrink);

router
    .route('/:drinkId')
    .get(getSingleDrink)
    .put(updateDrink)
    .delete(deleteDrink);

    router
    .route('/:drinkId/:userId')
    .put(saveDrink)
    .delete(deleteDrink);

module.exports = router;