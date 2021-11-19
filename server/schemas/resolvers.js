const { Puzzle } = require('../models');
// TODO: Review all of this after typeDefs are completed
const resolvers = {
    Query: {
        puzzles: async () => {
            return Puzzle.find();
        },

        puzzle: async (parent, { puzzleId }) => {
            return Puzzle.findOne({ _id: puzzleId });
        },
    },

		Mutation: {
			addPuzzle: async (parent, { puzzleId }) => {
				return Puzzle.create({ puzzleId });
			},

		}
}