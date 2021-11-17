import React, { useState, useEffect } from 'react';
import {Typography} from '@material-ui/core'; 
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { createTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: {
      main:"#2e1667",
    },
    secondary: {
      main:"#c7d8ed",
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
      },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
  },
});

const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center"
  },
  bigSpace: {
    marginTop: "5rem"
  },
  littleSpace:{
    marginTop: "2.5rem",
  },
  grid:{
    display: "flex", 
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap", 
  },
})


const  Home = () => {

    const classes = styles(); 

    return (
      <div>
      <ThemeProvider theme={theme}>
        <div className={classes.wrapper}>
          <Typography variant="h4" className={classes.bigSpace} color="primary">
             At Chessmate, we believe that the best way to learn is to play.
          </Typography>
        <div className={classes.littleSpace}>
          <Button variant="contained"link={`${process.env.API}/auth/login`}>Login with Lichess</Button>
        </div>
        <iframe src="https://lichess.org/tv/frame?theme=blue&bg=dark" style={{width: 400, height: 444, allowtransparency:"true", frameborder:"0"}} title="LichessTV"></iframe>
        </div>
        </ThemeProvider>
      </div>
    );
  }

  export default Home;