const { Schema, model } = require("mongoose");

// Schema for thought
const thoughtSchema = new Schema({});

// Initialize the though model
const Thoughts = model("thought", thoughtSchema);

module.exports = Thoughts;
