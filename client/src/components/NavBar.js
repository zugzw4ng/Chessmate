import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Toolbar, Typography } from '@material-ui/core'
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
import { makeStyles } from "@material-ui/core/styles";
import LoginForm from './LoginForm';
import SignUpForm from './SignupForm';

import Auth from '../utils/auth';

const styles = makeStyles({
  bar: {
    paddingTop: "1.15rem",
    backgroundColor: "#fff",
    '@media (max-width:780px)': {
      flexDirection: "column"
    }
  },
  logo: {
    width: "15%",
    '@media (max-width:780px)': {
      display: "none"
    }
  },
  logoMobile: {
    width: "100%",
    display: "none",
    '@media (max-width:780px)': {
      display: "inline-block"
    }
  },
  menuItem: {
    cursor: "pointer",
    flexGrow: 1,
    "&:hover": {
      color: "#4f25c8"
    },
    '@media (max-width:780px)': {
      paddingBottom: "1rem"
    }
  }
})

function NavBar() {
  const classes = styles()
  const [showModal, setShowModal] = useState(false);
  return (
    <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className={classes.bar}>
      {/* can place image url here for our logo for chessmate which will use svg formatting to fill according to mobile or web*/}
      <Typography variant="h6" className={classes.menuItem}>
        <Link to="/">
          Home
        </Link>
      </Typography>

      <Typography variant="h6" className={classes.menuItem}>
        <Link to="puzzleoftheday">
          Puzzle of The Day
        </Link>
      </Typography>

      <Typography variant="h6" className={classes.menuItem}>
        <Link to="puzzleboard">
          Puzzle Training
        </Link>
      </Typography>

      <Typography>
        <Link to="mypuzzles">
          My Puzzles
        </Link>
      </Typography>

      <Typography variant="h6" className={classes.menuItem}>
        <Link to="resources">
          Chess Resources
        </Link>
      </Typography>
      {Auth.loggedIn() ? (
        <>
          <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
        </>
      ) : (
        <Nav.Link onClick={() => setShowModal(true)}>Login/Sign Up</Nav.Link>
      )}
      <Modal
        size='lg'
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby='signup-modal'>
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey='login'>
          <Modal.Header closeButton>
            <Modal.Title id='signup-modal'>
              <Nav variant='pills'>
                <Nav.Item>
                  <Nav.Link eventKey='login'>Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='signup'>Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey='login'>
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey='signup'>
                <SignUpForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </Toolbar>

  )
}

export default NavBar
