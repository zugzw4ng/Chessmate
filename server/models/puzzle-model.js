const { Schema, model } = require('mongoose');

const PuzzleSchema = new Schema({
	PuzzleId: {type: String},
	FEN: {type: String},
	Moves: {type: String},
	Rating: {type: Number},
	RatingDeviation: {type: Number},
	Popularity: {type: Number},
	NbPlays: {type: Number},
	Themes: [{type: String}],
	GameUrl: {type: String},
});

const Puzzle = model('Puzzle', PuzzleSchema);

module.exports = Puzzle;