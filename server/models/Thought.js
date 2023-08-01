const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
// Schema to create Post model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 4,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      // get: (createdAtVal) => dateFormat(createdAtVal),

    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);


thoughtSchema
  .virtual('reactionCount')
 
  .get(function () {
    return this.reactions.length;
  });


const Thought = model('Thought', thoughtSchema);

module.exports =Thought;
