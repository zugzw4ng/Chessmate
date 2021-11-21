import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { createTheme } from '@material-ui/core/styles';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import NavBar from './components/NavBar'
// eslint-disable-next-line no-unused-vars
import './App.css';
import Home from './pages/Home';
import PuzzleDay from './pages/puzzleoftheDay';
import MyPuzzles from './pages/mypuzzles';
import Resources from './pages/Resources';
import Puzzleboard from './pages/Puzzleboard';
//changes to imports 
// template for if we want to end up using any of the material ui icons vvv
// import TestIcon from '@material-ui/icons/Test';

// particles
import Particles from 'react-tsparticles';
import particlesConfig from './config/configParticles';
import PuzzleBoard from './pages/Puzzleboard';


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



const client = new ApolloClient({
  request: operation =>{
    const token = localStorage.getItem('id_token');
    operation.setContext({
      headers:{
        authorization: token ? `Bearer ${token}`  : ''
      }
    });
  },
  uri:'/graphql'
});


function App() {

  const classes = styles(); 

  return (
    <ApolloProvider client={client}>
    <Router>
    <div className="App" style={{ position: 'relative', overflow: "hidden" }}>
    <div style={{ position: 'absolute'}}>
      <Particles height="100vh" width="100vw" params={particlesConfig} />
    </div>
      <ThemeProvider theme={theme}>
        <NavBar/>
        <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/puzzleboard" element={<Puzzleboard/>}/>
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
  </ApolloProvider>
  )};

export default App;
