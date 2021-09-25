import React, {Component} from 'react';
import NavbarOwnProfileprof from '../components/layaout/NavbarOwnProfileprof';
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


// import Redux stuf

import { connect} from 'react-redux';
import {loginUser} from '../redux/actions/profActions';

const styles = {
    form: {
        textAlign: 'center'
    },
    image: {
        margin: '1px auto -5px auto'
    },
    pageTitle: {
        margin: '-40px auto -20px auto'
    },
    textField: {
          margin: '5px auto 5px auto'
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






class Loginprof extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            errors: {}
            
            
        }
    }
    componentWillReceiveProps(nextProps){
        if (nextProps.UI.errors){
      this.setState({errors: nextProps.UI.errors}) ; 
    }
}




    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const userData = {
            email: this.state.email,
            password: this.state.password
        };
        this.props.loginUser(userData, this.props.history);

       
    };




    render(){
        const {classes, UI: {loading}} = this.props;
        const {errors} = this.state;
        

        return(
            <div>
            <br></br> <br></br> <br></br> <br></br>
            <NavbarOwnProfileprof/>
            <Grid container className={classes.form}>
                <Grid item sm />
                <Grid item sm >
                    <img src={AppIcon} alt="monky"/>
                    <Typography variant="h1" className={classes.pageTitle}>
                        Login
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
                              dont have an account ? sign up <Link to="/RegistreProfile">here</Link>
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

Loginprof.propTypes = {
    classes: PropTypes.object.isRequired,
    loginUser: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    UI: PropTypes.object.isRequired

};
 const mapStateToProps = (state)=> ({
    user: state.user,
    UI: state.UI


 });

 const mapActionsToProps = {
     loginUser
 }


export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(Loginprof));

