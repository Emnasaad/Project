import React , {Component} from 'react';
import Navbar1 from '../layaout/Navbar1';
import '../../App.css';
import {Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import {signIn} from '../../store/actions/authAction';
import {signUp} from '../../store/actions/authAction';
import {Link} from 'react-router-dom';


class SignUp extends Component {
    state = {
        email:'',
        password:'',
        firstName: '',
        lastName:'',


    }

    handleChange =(e)=> {
        this.setState({
            [e.target.id]: e .target.value

        })

    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state);
        
        

    }

    render(){
        const {auth, authError} = this.props;
        if (auth.uid) return <Redirect to ='/Home'/>
        return(
           
            <div><Navbar1/>
            <br></br> <br></br> <br></br>
            <div className="container">
            <div className="body">
                <form onSubmit= {this.handleSubmit} className="form-style-10">
                    <h5 className="grey-text text-darken-3">Sign In   </h5>


                    <div className="input-field">
                        <label htmlFor="password">First Name</label>
                        <input type="text" id="firstName" onChange={this.handleChange} required/>
                        
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Last Name</label>
                        <input type="text" id="lastName" onChange={this.handleChange} required/>
                        
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange} required/>

                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange} required/>
                        
                    </div>



                    <div className="input-field">
                        <button className="btn blue lighten-1 z-depth-0">Sign Up</button>
                        
                        <div className="red-text center">
                             { authError ? <p>{authError} </p> :  null }</div> 
                             <br />
                        <small>
                        Already have an acount ?  sign up <Link to="/signin">here</Link>
                        </small> 


                        </div> 
                       

                </form>
            </div>
            </div>
            </div>

        )
    }
    











}

const mapStateToProps = (state) => {
    return {
    authError: state.auth.authError,
    auth: state.firebase.auth
    
 }
}

 const mapDispatchToProps = (dispatch) => {
     return {
         signUp: (newUser)=> dispatch(signUp(newUser))
     }
 }


export default connect(mapStateToProps, mapDispatchToProps)(SignUp) 