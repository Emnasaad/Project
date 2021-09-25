import React, { Component }  from 'react';
import {NavLink} from 'react-router-dom';
import {signOut} from '../../store/actions/authAction'
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

 const Singin = (props) => {
    
    return (


        <AppBar>
             <Toolbar className="nav-containerr">
             <Button color="inherit" component= {Link} to="/Home" >Public </Button>

                 <Button color="inherit" component= {Link} to="/Createproject">publish a decision</Button>
                 <ul className="right">
                 <li> <a onClick= { props.signOut} > 
            <NavLink to = '/' className='btn btn-floating bleu lighten-1'> {props.profile.initials}</NavLink></a> 
                
            </li>
            </ul>
             </Toolbar>
         </AppBar> 






        
      
        
        
        );
}


const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}
export  default connect(null , mapDispatchToProps)
 (Singin) 