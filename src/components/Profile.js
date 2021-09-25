import React, {Component , Fragment } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import EditDetails from './EditDetails';
import { useHistory } from "react-router-dom";
import { Redirect, Route, Switch } from "react-router";


// import from materialize for desgin 
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import MyButton from '../util/MyButton';

//Import action user 
import { logoutUser, uploadImage } from '../redux/actions/userActions';


// MUI stuff
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
// Icons
import LocationOn from '@material-ui/icons/LocationOn';
import LinkIcon from '@material-ui/icons/Link';
import CalendarToday from '@material-ui/icons/CalendarToday';
import EditIcon from '@material-ui/icons/Edit';
import KeyboardReturn from '@material-ui/icons/KeyboardReturn';
import Signin from './auth/Signin';











const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#00FFFF',
      main: '#212121',
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
  typography: {
    useNextVariants: true,
  },

})



const styles = (theme)=> ({
    
    paper: {
        padding: 10,
        margin: '0px 10px 10px 10px'
      },
      profile: {
        '& .image-wrapper': {
          textAlign: 'center',
          position: 'relative',
          '& button': {
            position: 'absolute',
            top: '100%',
            left: '80%',
            
          }
        },
        '& .profile-image': {
          width: 100,
          height: 100,
          objectFit: 'cover',
          maxWidth: '100%',
          borderRadius: '50%'
        },
        '& .profile-details': {
          textAlign: 'center',
          '& span, svg': {
            verticalAlign: 'middle'
          },
          '& a': {
            color: theme.palette.primary.main
          }
        },
        '& hr': {
          border: 'none',
          margin: '0 0 10px 0'
        },
        '& svg.button': {
          '&:hover': {
            cursor: 'pointer'
          }
        }
      },
      buttons: {
        textAlign: 'center',
        '& a': {
          margin: '40px 50px'
          
        }
      }
   
  

  });




class Profile extends Component {

  handleImageChange = (event) => {
    const image = event.target.files[0];
    const formData = new FormData();
    formData.append('image', image, image.name);
    this.props.uploadImage(formData);
  };


  handleEditPicture = () => {
    const fileInput = document.getElementById('imageInput');
    fileInput.click();
  };

  handleLogout = () => {
    this.props.logoutUser();

  };
    
    render() {
        const {
            classes,
            user: {
              credentials: { handle, createdAt, imageUrl, bio, website, location },
              loading,
              authenticated
            }
          } = this.props;


          let profileMarkup = !loading ? (
            authenticated ? (
              <Paper className={classes.paper}>
                  
                <div className={classes.profile}>
                  <div className="image-wrapper">
                    <img src={imageUrl} alt="profile" className="profile-image" />

                    <input
                type="file"
                id="imageInput"
                hidden="hidden"
                onChange={this.handleImageChange}
              />
              <MyButton
                tip="Edit profile picture"
                onClick={this.handleEditPicture}
                btnClassName="button"
              >
                <EditIcon color="primary" />
              </MyButton>
            
            


                  

                  </div>
                  <hr />
                  <div className="profile-details">
                    <MuiLink
                      component={Link}
                      to={`/user/${handle}`}
                      color="primary"
                      variant="h5"
                    >
                      @{handle}
                    </MuiLink>
                    <hr />
                    {bio && <Typography variant="body2">{bio}</Typography>}
                    <hr />
                    {location && (
                      <Fragment>
                        <LocationOn color="primary" /> <span>{location}</span>
                        <hr />
                      </Fragment>
                    )}
                    {website && (
                      <Fragment>
                        <LinkIcon color="primary" />
                        <a href={website} target="_blank" rel="noopener noreferrer">
                          {' '}
                          {website}
                        </a>
                        <hr />
                      </Fragment>
                    )}
                    <CalendarToday color="primary" />{' '}
                    <span>Joined {dayjs(createdAt).format('MMM YYYY')}</span>
                  </div>
                  <MyButton tip="Logout" onClick={this.handleLogout}  >
              <KeyboardReturn color="primary" />
            </MyButton>
            <EditDetails />
                  
                </div>
              </Paper>
            ) : (

              <Redirect to="/LoginProfile" />

              /*<Paper className={classes.paper}>
                <Typography variant="body2" align="center">
                  No profile found, please login again
                </Typography>
                <div className={classes.buttons}>
                  <Button
                    variant="contained"
                    color="primary"
                    component={Link}
                    to="LoginProfile"
                  >
                    Login
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    component={Link}
                    to="/RegistreProfile"
                  >
                    Signup
                  </Button>
                </div>
              </Paper>
              */
            )
            
          ) : (
            <p>Loading</p>
          );









        return  profileMarkup; 
    }
}


const mapStateToProps = (state) => ({
    user: state.user
  });

  const mapActionsToProps = { logoutUser, uploadImage };

 
  Profile.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    uploadImage: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired
  };




export default connect(
    mapStateToProps,
    mapActionsToProps
  )(withStyles(styles)(Profile));