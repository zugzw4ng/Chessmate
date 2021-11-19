import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { createTheme } from '@material-ui/core/styles';
import NavBar from './components/NavBar'
// eslint-disable-next-line no-unused-vars
import './App.css';
import Home from './pages/Home';
import PuzzleDay from './pages/puzzleoftheDay';
import ParticleBackground from './ParticleBackground';
import Resources from './pages/Resources';


const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
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
    <ParticleBackground />
      <ThemeProvider theme={theme}>
        <NavBar/>
        <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/puzzleoftheday" element={<PuzzleDay/>} />
        <Route exact path="/resources" element={<Resources/>} />
        <Route path = "*" element={<Home/>} /> 
        </Routes>
        {/* demo of what we can use for icons if we want for the grid */}
        {/* can add more divs here */}
        <div className={classes.bigSpace}>
          
        </div>
      </ThemeProvider>
  </div>
  </Router>
  )};

export default App;
