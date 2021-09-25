import React, { Component }  from 'react';
import {NavLink} from 'react-router-dom';
import {Link} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';


export  const Linksnavbar = () => {
    return (


        /*<AppBar>
             <Toolbar className="nav-containerr">
             <Button color="inherit" component= {Link} to="/" > Home </Button>
             <Button color="inherit" component= {Link} to="/SignIn" > Sign In </Button>
             <Button color="inherit" component= {Link} to="/SignUp" >Sign Up</Button>

             </Toolbar>
            
         </AppBar> */
         <AppBar>
            <Toolbar>
                <IconButton edge="start" /*className={classes.menuButton}*/ color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" /*className={classes.title}*/>
                    <Button color="inherit" component={Link} to="/" >Home </Button>
                </Typography>
                <Button color="inherit" component={Link} to="/SignIn" >Login</Button>
                <Button color="inherit" component={Link} to="/SignUp" >Signup</Button>
            </Toolbar>
        </AppBar>
        
        
        
        );
}

export  default Linksnavbar ;