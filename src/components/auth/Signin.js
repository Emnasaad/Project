import React , {Component} from 'react';
import Navbar1 from '../layaout/Navbar1';
import '../../App.css';
import {connect} from 'react-redux'; 
import {signIn} from '../../store/actions/authAction';
import {Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';





class SignIn extends Component {
    state = {
        email:'',
        password:''

    }

    handleChange =(e)=> {
        this.setState({
            [e.target.id]: e .target.value

        })

    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state);
        //this.props.history.push('/Home');
        

    }

    render(){
        const{authError , auth} = this.props;
        if (auth.uid) return <Redirect to ='/Home'/> 
        return(
            <div><Navbar1/>
            <br></br> <br></br> <br></br>
            <div className="container">
            <div className="body">
                <form onSubmit= {this.handleSubmit} className="form-style-10">
                    <h5 className="grey-text text-darken-3">Sign In   </h5>
                    <div className="input-field">
                        <label htmlFor="email" color="black">Email</label>
                        <input type="email" id="email" onChange={this.handleChange}/>

                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                        
                    </div>
                    <div className="input-field">
                        <button className="btn blue lighten-1 z-depth-0">Login</button>
        <div className="red-text center"> { authError ? <p>{authError} </p> :  null }</div>

         <br />
                        <small>
                              dont have an account ? sign up <Link to="/signup">here</Link>
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
        signIn: (creds) => dispatch(signIn(creds))
    }
}


export default connect(mapStateToProps, mapDispatchToProps) 
(SignIn) 