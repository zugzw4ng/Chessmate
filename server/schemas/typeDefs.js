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

    type Puzzle{
        PuzzleId: String
        FEN: String
        Moves: String
        Rating: Int
        RatingDeviation: Int
        Popularity: Int
        NbPlays: Int
        Themes: [String]
        GameUrl: String
    }

    type Query{
        me: User
        users: [User]
        puzzle(PuzzleId: ID!): Puzzle
        puzzles: [Puzzle]
    }

    type Mutation{
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
    }

`;

module.exports = typeDefs;
