import React, { Component }  from 'react';
import {Link} from 'react-router-dom';
import {Linksnavbar} from './Linksnavbar';
import {Singout} from './singout_layout';
import {connect} from 'react-redux';
import {Home} from '../auth/Home';
import Dashboard from '../dashboard/dashboard';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';


const Navbar1 = (props) => {
    const { auth , profile} = props;
    console.log(auth);
    
    return (
        <AppBar>
        <Toolbar className="nav-containerr">
            <Linksnavbar/>
        </Toolbar>
    </AppBar> 


      
        

        );
}



const mapStateToProps = (state) => {

    console.log(state);
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile


    }
}

export  default connect(mapStateToProps)(Navbar1) 