import React, { Component }  from 'react';
import {Link} from 'react-router-dom';
import Singin from './singin_layout';
import {Singout} from './singout_layout';
import {connect} from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';



const Navbar = (props) => {
    const {profile}= props;
    return (
        <AppBar>
             <Toolbar className="nav-containerr">
                 <Singin profile= {profile} />
             </Toolbar>
         </AppBar> 






       

        );
}




const mapStateToProps = (state) => {
    console.log(state);
    return {
        profile: state.firebase.profile

    }
}

export  default connect(mapStateToProps)(Navbar) 