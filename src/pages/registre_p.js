
import React, {Component} from 'react';
import Navbarownprofile from '../components/layaout/NavbarOwnProfile';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import AppIcon from '../images/icon.png';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import  {connect} from 'react-redux';
import {signupUser} from '../redux/actions/userActions';
const styles = {
    form: {
        textAlign: 'center'
    },
    image: {
        margin: '1px auto 1px auto'
    },
    pageTitle: {
        margin: '-40px auto -20px auto'
    },
    textField: {
          margin: '0px auto 0px auto'
    },
    Button: {
        marginTop: 20,
        position: 'relative'

    },
    customError: {
        color: 'red',
        fontSize: '0.9rem',
        marginTop: 10
    },
    progress: {
        position:'absolute'
    }


};






class Registre_p extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            confirmPassword: '',
            handle: '',
            errors: {}
            
            
        }
    }
    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        });
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.UI.errors){
      this.setState({errors: nextProps.UI.errors}) ; 
    }
}




    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            loading: true
        });
        const newUserData = {
            email: this.state.email,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword,
            handle: this.state.handle
        };
        this.props.signupUser(newUserData,this.props.history);
        
    }




    render(){
        const {classes , UI: {loading}} = this.props;
        const {errors} = this.state;
        

        return(
            <div>
            <br></br> <br></br> <br></br> <br></br>
            <Navbarownprofile/>
            <Grid container className={classes.form}>
                <Grid item sm />
                <Grid item sm >
                    <img src={AppIcon} alt="monky"/>
                    <Typography variant="h1" className={classes.pageTitle}>
                        Signup
                    </Typography>
                    <div className="">
                    <form noValidate onSubmit={this.handleSubmit}>
                    <TextField
                         id="email"
                         name="email"
                         type="email"
                         label="Email"
                         className={classes.textField}
                         helperText={errors.email}
                         error={errors.email ? true : false}
                         value={this.state.email}
                         onChange={this.handleChange}
                         fullWidth
                    />
                     <TextField
                         id="handle"
                         name="handle"
                         type="text"
                         label="Handle"
                         className={classes.textField}
                         helperText={errors.handle}
                         error={errors.handle ? true : false}
                         value={this.state.handle}
                         onChange={this.handleChange}
                         fullWidth
                    />
            
                    <TextField
                         id="password"
                         name="password"
                         type="password"
                         label="Password"
                         className={classes.textField}
                         helperText={errors.password}
                         error={errors.password ? true : false}
                         value={this.state.password}
                         onChange={this.handleChange}
                         fullWidth
                     />


                    <TextField
                         id="confirmPassword"
                         name="confirmPassword"
                         type="Password"
                         label="ConfirmPassword"
                         className={classes.textField}
                         helperText={errors.confirmPassword}
                         error={errors.confirmPassword ? true : false}
                         value={this.state.confirmPassword}
                         onChange={this.handleChange}
                         fullWidth
                     />

                    

                         
  

                    

                         



                         {errors.general && (
                                 <Typography variant="body2" className={classes.customError}>
                                         {errors.general}
                                 </Typography>
                                 )}
                        <Button type='submit' variant='contained' color='primary' className= {classes.Button} disabled={loading}>
                            Login
                        {loading && (
                            <CircularProgress className={classes.progress} size= {30} />
                        )}
                        </Button>
                        <br />
                        <small>
                              Already have an acount ? <Link to="/LoginProfile">here</Link>
                        </small>

                    </form>
                    </div>

                </Grid>
                <Grid item sm />
            </Grid>
            </div>
         
        );
    
    
    }
        
        
}






Registre_p.propTypes = {
    classes: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    UI: PropTypes.object.isRequired,
    signupUser: PropTypes.func.isRequired
  };


const mapStateToProps = (state) => ({
    user: state.user,
    UI: state.UI
  });




export default connect(
    mapStateToProps,
    { signupUser }
  )(withStyles(styles)(Registre_p));
