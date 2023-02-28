const { User, Thought } = require('../models');

module.exports = {
    // get all users
    getUsers(req, res) {
        User.find({})
            .then((users) =>  res.json(users))
            .catch((err) => res.status(500).json(err))    
    },

    // get single user by id
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId})
            .populate('thoughts')
            .populate('friends')
            .select('-__v')
            .then((user) => 
                !user
                    ? res.status(404).json({ message: "No user with this ID!" })
                    : res.json(user)
            )
            .catch((err) => res.status())
    },

    // create a user
    createUser(req, res) {
        User.create(req.body)
        .then((user) => res.json(user))
        .catch((err) => res.status(500).json(err));
    },


}