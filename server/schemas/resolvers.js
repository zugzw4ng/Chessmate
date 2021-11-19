<<<<<<< HEAD
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
=======
const {User} = require('../models')
const {AuthenticationError} = require('apollo-server-express');
const {signToken} = require('../utils/auth');

const resolvers={
    Query:{
        me: async(parent, args, context)=>{
            if(context.user){
                const userData = await User.findOne({_id: context.user._id})
                    .select('-__v -password')
                return userData;
            }
            throw new AuthenticationError('Not Logged In');
        }
    },
    Mutation:{
        addUser: async(parent, args)=>{
            const user = await User.create(args);
            const token = signToken(user);
            return{token, user};
        },
        
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
              throw new AuthenticationError('Incorrect credentials');
            }
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
            }
            const token  =signToken(user);
            return {token, user};
        },
    }
};

module.exports = resolvers;
>>>>>>> a82bb98071588b80878a765797ad17551268c01a
