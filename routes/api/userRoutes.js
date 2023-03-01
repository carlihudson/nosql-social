const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    createUser,
} = require('../../controllers/userController');

// get all users or create a new user - /api/users
router.route('/').get(getUsers).post(createUser);

module.exports = router;