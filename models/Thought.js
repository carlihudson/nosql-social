const { Schema, model, Types } = require('mongoose');
const moment = require('moment');


// schema to create reaction document that will be nested in the thought model
const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            max: 280
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date, 
            default: Date.now,
            get: createdAtVal => moment(createdAtVal).format("MMM DD, YYYY [at] hh:mm a"),
        },
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
    }
    
)

// schema to create thought model
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            max: 280,

        },
        createdAt: {
            type: Date, 
            default: Date.now,
            get: createdAtVal => moment(createdAtVal).format("MMM DD, YYYY [at] hh:mm a"),
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

// virtual property (not stored in MongoDB) of a thought's reaction count
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
})

// create Thought model with schema
const Thought = model('thought', thoughtSchema);

module.exports = Thought;