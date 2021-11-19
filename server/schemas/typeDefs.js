const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Puzzle {
    _id: ID
    puzzleId: String
    FEN: String
    Moves: String
    Rating: Number
    RatingDeviation: Number
	Popularity: Number
	NbPlays: Number
	Themes: String
	GameUrl: String
}
` 