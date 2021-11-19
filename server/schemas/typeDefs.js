<<<<<<< HEAD
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
=======
// import the gql tagged template function
const {gql} =require('apollo-server-express');

const typeDefs = gql`
    type User{
        _id: ID
        username: String
        email: String
    }

    type Auth{
        token: ID!
        user: User
    }

    type Query{
        me: User
        users: [User]
    }

    type Mutation{
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
    }
`;

module.exports = typeDefs;
>>>>>>> a82bb98071588b80878a765797ad17551268c01a
