import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './resources.css'



const Resources = () => {


  return (
    <div style={{ background: "#2b313c", height: "100vh" }}>
      <table>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Link</th>
        </tr>

        <tr>
          <td>Listudy</td>
          <td>Offers numerous opening, tactics and endgame resources</td>
          <td><a href="https://listudy.org/en">Listudy</a></td>
        </tr>

        <tr>
          <td>Lichess Learn</td>
          <td>Gives a great breakdown of the basics and fundamentals of chess, fantastic resource for new learners</td>
          <td><a href="https://lichess.org/learn#/">Lichess Learn</a></td>
        </tr>

        <tr>
          <td>Chessable</td>
          <td>Online chess books with interactive studies for all phases of the game</td>
          <td><a href="https://listudy.org/en">Chessable</a></td>
        </tr>

        <tr>
          <td>Chessgames</td>
          <td>Archive of over one million top chess tournament games</td>
          <td><a href="https://www.chessgames.com/">Chessgames</a></td>
        </tr>

        <tr>
          <td>Chess on Twitch</td>
          <td>Watch top players and live events on Twitch!</td>
          <td><a href="https://www.twitch.tv/directory/game/Chess">Twitch</a></td>
        </tr>

        <tr>
          <td>Project Gutenberg</td>
          <td>Free downloadable chess book archive</td>
          <td><a href="https://www.gutenberg.org/ebooks/search/?query=chess&go=Go">Chessgames</a></td>
        </tr>

        <tr>
          <td>chess-news.ru</td>
          <td>Russian chess news site covering events, top game studies</td>
          <td><a href="https://www.chessgames.com/">Chessgames</a></td>
        </tr>

      </table>
    </div>
  );
}

export default Resources;