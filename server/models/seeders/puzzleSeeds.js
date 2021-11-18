var mongoose = require("mongoose");
var db = require("../../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/puzzledatabase",
  { useNewUrlParser: true }
);

var puzzleSeed = [
    {
      PuzzleId: '00008',
      FEN: "r6k/pp2r2p/4Rp1Q/3p4/8/1N1P2R1/PqP2bPP/7K b - - 0 24",
      Moves: 'f2g3 e6e7 b2b1 b3c1 b1c1 h6c1',
      Rating: 1788,
      RatingDeviation: 76,
      Popularity: 92,
      NbPlays: 456,
      Themes: 'crushing hangingPiece long middlegame',
      GameUrl: 'https://lichess.org/787zsVup/black#48',
    },

]