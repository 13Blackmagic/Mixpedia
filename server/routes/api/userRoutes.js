const router = require('express').Router();
const {
  getAllUsers,
  createUser,
  getSingleUser,
  saveDrink,
  deleteDrink,
  login,
} = require('../../controllers/userController');

// import middleware
const { authMiddleware } = require('../../utils/auth');

// put authMiddleware anywhere we need to send a token for verification of user
router.route('/').get(getAllUsers).post(createUser).put(authMiddleware, saveDrink);

router.route('/login').post(login);

router.route('/me').get(authMiddleware, getSingleUser);

router.route('/drink/:drinkId').delete(authMiddleware, deleteDrink);

router
.route('/:drinkId/:userId')
.put(saveDrink)
.delete(deleteDrink);

module.exports = router;
