import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createTheme } from '@material-ui/core/styles'
import {Typography} from '@material-ui/core'; 
import Button from '@material-ui/core/Button';
import NavBar from './components/NavBar'
// eslint-disable-next-line no-unused-vars
// import Grid from './components/Grid'
import Footer from './components/Footer'
import './App.css';
import Home from './pages/Home';
import PuzzleDay from './pages/puzzleoftheDay';
//changes to imports 
// template for if we want to end up using any of the material ui icons vvv
// import TestIcon from '@material-ui/icons/Test';

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

function App() {
  const classes = styles(); 

  return (
    <Router>
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar/>
        <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/puzzleoftheday" element={<PuzzleDay/>} />
        </Routes>
        {/* demo of what we can use for icons if we want for the grid */}
        {/* can add more divs here */}
        <div className={classes.bigSpace}>
          <Footer/>
        </div>
      </ThemeProvider>
  </div>
  </Router>
  )};

export default App;
