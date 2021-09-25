import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import PostScream from '../PostScream';
import '../../App.css';
import HomeIcon from '@material-ui/icons/Home';
import MyButton from '../../util/MyButton';
//import AddIcon from '@material-ui/icons/Add';
import Notifications from '@material-ui/icons/Notifications';
import AddI from '@material-ui/icons/AddAlert';
import AddII from '@material-ui/icons/ChromeReaderModeOutlined';





class Navbarownprofile extends Component {


    render(){
        return(
         <AppBar>
             <Toolbar className="nav-containerr">
            
             <Link to="/OwnProfile">
                <MyButton tip="Home">
                  <HomeIcon  />
                </MyButton>
              </Link>
            
             <PostScream/>


             <Link to="/Read_PDF">
                <MyButton tip="Read PDF Cours!" >
                  < AddII />
                </MyButton>
              </Link>
              

              <Link to="/OwnProfile">
                <MyButton tip="Notifications!">
                  <Notifications />
                </MyButton>
              </Link>


              

              <Link to="/Notifications">
                <MyButton tip="New Adminstration!" >
                  < AddI color="secondary"/>
                </MyButton>
              </Link>

              
                 
                 

                 
             </Toolbar>
         </AppBar> 
        );
    
    
    }
        
        
}

export default Navbarownprofile;