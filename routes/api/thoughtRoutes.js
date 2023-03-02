const router = require('express').Router();
const {
    getThoughts, 
    createThought,
    getSingleThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction,
} = require('../../controllers/thoughtController');

// get all thoughts or create a new thought - /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// get, update, or delete a thought by its id - /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

// add a reaction to a thought - /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').put(addReaction).delete(deleteReaction);

router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;