const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
	setup: {
		type:String,
		required: [true, "Setup is required"],
	},
	puncline: {
		type:String,
		required: [true, "Punchline is required"],
	},
	createdAt: Date,
	updatedAt: Date
});

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;