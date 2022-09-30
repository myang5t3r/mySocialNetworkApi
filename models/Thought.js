const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");

// Schema for thought
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      require: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      // Add middleware here if I go this route
    },
    username: { type: String, required: true },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getter: true,
    },
  }
);

// Create virtual called reactionCount the retrieves the length of the thought's reactions array field on query
//TODO use getter method to format timestamp on query
thoughtSchema
  .virtual("reactionCount")
  // retrieves length of thought's reaction array
  .get(function () {
    return this.reactions.length;
  });
thoughtSchema.get(function () {
  let today = new DataTransfer(this.createdAt);
  return today.toDateSting();
});

// Initialize the though model
const Thought = model("thought", thoughtSchema);

module.exports = Thought;
