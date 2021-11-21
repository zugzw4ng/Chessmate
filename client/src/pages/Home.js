import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import {
  createTheme,
  ThemeProvider,
  makeStyles,
} from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#c7d8ed",
    },
  },
  typography: {
    fontFamily: ["Roboto"],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: "2.5rem",
    },
    h5: {
      fontWeight: 100,
      lineHeight: "2rem",
    },
  },
});

const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center",
  },
  bigSpace: {
    marginTop: "0rem",
  },
  littleSpace: {
    marginTop: "2.5rem",
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
});


const Home = () => {
  const classes = styles();

  const getLogin = () => {
    fetch("http://localhost:5000/ok")
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getLogin();
  });

  return (
    <div style={{ background: "#2b313c", height: "100vh" }}>
      <ThemeProvider theme={theme}>
        <div className={classes.wrapper}>
          <Typography variant="h4" className={classes.bigSpace} color="primary">
            At Chessmate, we believe that the best way to learn is to play.
          </Typography>
          <iframe
            src="https://lichess.org/tv/frame?theme=blue&bg=dark"
            style={{
              width: 400,
              height: 444,
              allowtransparency: "true",
              frameborder: "0",
            }}
            title="LichessTV"
          ></iframe>
        </div>
      </ThemeProvider>
    </div>
  );
};

export default Home;
