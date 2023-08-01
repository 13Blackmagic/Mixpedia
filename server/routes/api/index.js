const router = require('express').Router();
const userController = require("./userRoutes");
const drinkController = require("./drinkRoutes");

router.use('/drinks', drinkRoutes);
router.use('/users', userRoutes);

module.exports = router;
