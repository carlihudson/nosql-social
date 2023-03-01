const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend,
} = require('../../controllers/userController');

// get all users or create a new user - /api/users
router.route('/').get(getUsers).post(createUser);

// get a single user, update a user, or delete a user by their id - /api/users/:userId
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

// add or delete a friend by their id
router.route('/:userId/friends/:friendId').put(addFriend).delete(deleteFriend);

module.exports = router;