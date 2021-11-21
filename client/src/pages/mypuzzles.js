import React from "react";
import { Typography } from "@material-ui/core";
import {
  createMuiTheme,
  ThemeProvider,
  makeStyles,
} from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2e1667",
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
      lineHeight: "2rem",
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
    marginTop: "5rem",
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

const MyPuzzles = () => {
  const classes = styles();

  return (
    <div>
      <ThemeProvider theme={theme}>
        <div className={classes.wrapper}>
          <Typography variant="h4" className={classes.bigSpace} color="primary">
            Here you can choose puzzles to solve from our library.
          </Typography>
          {/* Make som cards to display puzzle boards */}
          <div className="card">
            <img className="card-img-top" src="/client/src/pages/assets/images/fill-murray.jpg" />
            <div className="card-body">
              <Typography
                variant="h5"
                className={classes.bigSpace} 
                className="card-title"
                color="primary">
                  Puzzle 1
              </Typography>
              <p className="card-text">
                puzzle info
              </p>
              <a href="#" class="btn btn-primary">Add to deck</a>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
};

export default MyPuzzles;
