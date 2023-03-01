const { User, Thought } = require('../models');

module.exports = {
    // get all thoughts
    getThoughts(req, res) {
        Thought.find({})
            .then((users) =>  res.json(users))
            .catch((err) => res.status(500).json(err))    
    },

    // get single user by id
    // getSingleUser(req, res) {
    //     User.findOne({ _id: req.params.userId }) 
    //         .populate('thoughts')
    //         .populate('friends')
    //         .select('-__v')
    //         .then((user) => 
    //             !user
    //                 ? res.status(404).json({ message: "No user with this ID!" })
    //                 : res.json(user)
    //         )
    //         .catch((err) => res.status())
    // },

    // // create a thought
    // createUser(req, res) {
    //     Thought.create(req.body)
    //     .then((user) => res.json(user))
    //     .catch((err) => res.status(500).json(err));
    // },


}