import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const PuzzleDay = () => {
  return (
    <div style={{ background: "#2b313c", height: "100vh" }}>
      <div className="test"></div>
      <div>
        <iframe
          src="https://lichess.org/training/frame?theme=brown&bg=dark"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            width: 400,
            height: 444,
            allowtransparency: "true",
            frameborder: "0",
          }}
          title="dailyPuzzle"
        ></iframe>
        <br/>
        <a href="https://lichess.org/training">Click here for daily puzzle</a>
      </div>
    </div>
  );
};

export default PuzzleDay;
