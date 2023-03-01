const router = require('express').Router();
const {
    getThoughts,
    // getSingleUser,
    // createUser,
} = require('../../controllers/thoughtController');

// get all users or create a new user - /api/users
router.route('/').get(getThoughts);
// .post(createUser);

// // get a single user by their id - /api/users/:userId
// router.route('/:userId').get(getSingleUser);

module.exports = router;