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
router.route('/').get(getAllUsers).post(createUser);

router.route('/login').post(login);

router.route('/:id').get(getSingleUser);

router.route('/drink/:drinkId').delete(authMiddleware, deleteDrink);


router
.route('/:id/:drinkId')
.put(saveDrink)
.delete(deleteDrink);

module.exports = router;
