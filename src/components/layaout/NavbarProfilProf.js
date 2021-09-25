import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {Link} from 'react-router-dom';
import PostScream from '../PostScream';
import HomeIcon from '@material-ui/icons/Home';
import MyButton from '../../util/MyButton';
import '../../App.css';
//import AddIcon from '@material-ui/icons/Add';
import Notifications from '@material-ui/icons/Notifications';
import AddI from '@material-ui/icons/ChromeReaderModeOutlined';




class Navbarprofilprof extends Component {


    render(){
        return(
         <AppBar>
             <Toolbar className="nav-containerr">
            
             <Link to="/OwnProfile1">
                <MyButton tip="Home">
                  <HomeIcon  />
                </MyButton>
              </Link>
            
             <PostScream/>
              
             <Link to="/Add_PDF">
                <MyButton tip="ADD PDF cours!" >
                  < AddI />
                </MyButton>
              </Link>
              <Link to="/OwnProfile1">
                <MyButton tip="Notifications!">
                  <Notifications />
                </MyButton>
              </Link>

             
                 
                 

                 
             </Toolbar>
         </AppBar> 
        );
    
    
    }
        
        
}

export default Navbarprofilprof;