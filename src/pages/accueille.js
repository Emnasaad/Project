import React, {Component} from 'react';
import Navbarownprofile1 from '../components/layaout/NavbarOwnProfile1';
// import from materialize for desgin 
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import Grid from '@material-ui/core/Grid';
import Scream from '../components/Scream'
import Profile from '../components/Profile'
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getScreams } from '../redux/actions/dataActions';






const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#33c9dc',
        main: '#00bcd4',
        dark: '#008394',
        contrastText: '#fff'
      },
      secondary: {
        light: '#ff6333',
        main: '#ff3d00',
        dark: '#b22a00',
        contrastText: '#fff'
  
      }
    },
  
  })
  


class Accueille extends Component {
    
    componentDidMount(){
      this.props.getScreams();
      
          }
         


    render(){
        const { screams , loading } = this.props.data;
        let recentScreamsMarkup = !loading ? (
            screams.map((scream) => <Scream  key= {scream.screamId} scream={scream}/> )) : ( <p> Loding</p>);
        
        return(

            <div>  
                <br></br> <br></br> <br></br> <br></br>
          <Navbarownprofile1/>

          <Grid container spacing={16}>
        <Grid item sm={7} xs={12}>
          {recentScreamsMarkup}
        </Grid>
        <Grid item sm={4} xs={12}>
          
          <Profile/>
        </Grid>
      </Grid>



         </div> 
         

        );
    
    
    }
        
        
}


Accueille.propTypes = {
  getScreams: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  data: state.data
});

export default connect(
  mapStateToProps,
  { getScreams }
)(Accueille);


