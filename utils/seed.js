const connection = require("../config/connection");
const { User, Thought, Reaction } = require("../models");

// throw error if error
connection.on("error", (err) => err);

// Connect to mongodb
connection.once("open", async () => {
  console.log("connected");

  // Delete collections in database
  await Thought.deleteMany({});
  await User.deleteMany({});

  // Create users
  const users = [
    {
      username: "Matt",
      email: "Matt@gmail.com",
    },
    {
      username: "Nic",
      email: "Nic@gmail.com",
    },
    {
      username: "Rock",
      email: "Rock@gmail.com",
    },
    {
      username: "Tommy",
      email: "Tommy@gmail.com",
    },
    {
      username: "Andy",
      email: "Andy@gmail.com",
    },
  ];

  // Create thougts
  const thoughts = [
    {
      thoughtText: "Today is a great day",
      username: "Nic",
      reactions: [
        {
          responseBody: "The sun is shining bright",
          username: "Matt",
        },
      ],
    },
    {
      thoughtText: "This is some good fishing weather",
      username: "Rock",
      reactions: [
        {
          responseBody: "Sure is, the perfect temperature",
          username: "Andy",
        },
        {
          responseBody: "Nice and cool",
          username: "Tommy",
        },
      ],
    },
    {
      thoughtText: "The fall is my favorite time of year",
      username: "Andy",
      reactions: [
        {
          responseBody: "Enjoy it while it last, winter is coming!",
          username: "Nic",
        },
        {
          responseBody: "Love these colors",
          username: "Rock",
        },
        {
          responseBody: "Can't wait for winter",
          username: "Matt",
        },
      ],
    },
  ];

  await User.collection.insertMany(users);
  await Thought.collection.insertMany(thoughts);

  // loop through the saved videos, for each video we need to generate a video response and insert the video responses
  console.table(users);
  console.table(thoughts);
  console.info("Seeding complete! 🌱");
  process.exit(0);
});
