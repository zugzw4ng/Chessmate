import React from 'react'
import { useParams, Link } from 'react-router-dom';
import CustomBtn from './CustomBtn'
import {Toolbar, Typography} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles"; 

const styles = makeStyles({
    bar:{
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
    logoMobile:{
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
            color:  "#4f25c8"
        },
        '@media (max-width:780px)': { 
            paddingBottom: "1rem"    }
    }
})

function NavBar() {
    const classes = styles()
    return (
            <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className={classes.bar}>   
                {/* can place image url here for our logo for chessmate which will use svg formatting to fill according to mobile or web*/}
                <Typography variant="h6" className={classes.menuItem}>
                <Link to="puzzleoftheday">
                    Puzzle of The Day
                </Link>
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Matches 
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                <Link to="resources">
                    Chess Resources
                </Link>
                </Typography>
            </Toolbar>
    )
}

export default NavBar
