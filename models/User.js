const { Schema, Types, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: { type: String, unique: true, required: true, trim: true },
    email: {
      type: String,
      require: true,
      unique: true,
      validate: {
        validator: () => Promise.resolve(false), //TODO fix validation
        message: "Email validation failed",
      },
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "thought",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "user",
      },
    ],
  },
  {
    toJson: {
      virtuals: true,
    },
    id: false,
  }
);

//  Create virtural called friendcount that gets the length of the user's friends array field on query
userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

// Initialize the user model
const User = model("user", userSchema);

module.exports = User;
