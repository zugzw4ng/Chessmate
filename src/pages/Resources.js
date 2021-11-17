import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './resources.css'



const  Resources = () => {


    return (
      <div>
    <table>
        <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Link</th>
        </tr>
          
        <tr>
            <td>Listudy</td>
            <td>Offers numerous opening, tactics and endgame resources.</td>
            <td><a href="https://listudy.org/en">Listudy</a></td>
        </tr>
          
        <tr>
            <td>Lichess Learn</td>
            <td>Gives a great breakdown of the basics and fundamentals of chess, fantastic resource for new learners.</td>
            <td><a href="https://lichess.org/learn#/">Lichess Learn</a></td>
        </tr>
          
    </table>
      </div>
    );
  }

  export default Resources;