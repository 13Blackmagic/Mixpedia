const router = require('express').Router();
const{
    getThought,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    removeReaction,
} = require('../../controllers/ThoughtsController');

router.route('/').get(getThought).post(createThought);

router
    .route('/:thoughtId')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought);

router
    .route('/:thoughtId/reactions')
    .post(createReaction);

router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(removeReaction);

module.exports = router;