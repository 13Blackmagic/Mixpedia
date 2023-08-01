const router = require('express').Router();

const drinkRoutes = require("./drinkRoutes");
const userRoutes = require("./userRoutes");
const thoughtsRoutes = require("./thoughtsRoutes");

router.use('/drinks', drinkRoutes);
router.use('/users', userRoutes);
router.use('/thoughts', thoughtsRoutes)

module.exports = router;
