import React, {Component} from 'react';
import fire from './components/auth/Fire';
import './App.css';
import jwtDecode from 'jwt-decode';
import AuthRoute from '../src/util/AuthRoute';
import axios from 'axios';

import { SET_AUTHENTICATED } from './redux/types';
import { logoutUser, getUserData } from './redux/actions/userActions';


// import from materialize for desgin 
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

// pour les directions chaque url a une different  page
import {BrowserRouter , Switch, Route} from 'react-router-dom';



//importer les pages pour le profile d'un etudiant
import Home from './components/auth/Home';
import Dashboard from './components/dashboard/dashboard.js';
import ProjectDeatails from './components/projects/projectDetail';
import CreatProject from './components/projects/createProject';
import SignIn from './components/auth/Signin';
import SignUp from './components/auth/Signup';
import Notifications from './components/dashboard/Notifications';
import Read_PDF from './pages/read_PDF'

//importer les page .js d' accuille et identifier et registre pour le profile d'admin
import Accuieille from './pages/accueille';
import Identifier from './pages/identifier';
import Registre_p from './pages/registre_p';

// importer pour le profile d'un Prof
import Loginprof from './pages/Loginprof';
import AccuieilleProf from './pages/accueilleProf';
import Add_PDF from './pages/add_PDF'





/*
const token = localStorage.FBIdToken;
if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch(logoutUser());
    window.location.href = '/LoginProfile';
  } else {
    store.dispatch({ type: SET_AUTHENTICATED });
   axios.defaults.headers.common['Authorization'] = token;
    store.dispatch(getUserData());
  }

}
*/










const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#9e9e9e',
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



class App extends Component {

  constructor(){
    super();
    this.state = {
      user: null
    }
  }

  componentDidMount(){
    this.authListener();
  }

  authListener(){
    fire.auth().onAuthStateChanged((user) => {
      if(user){
        this.setState({user});
      }else{
        this.setState({user:null});
      }
    });
  }

  render(){

    return (
      
      <MuiThemeProvider theme= {theme}>
       
      <BrowserRouter>
      
        <div className='container'>
        
         
         <Switch>
         <Route exact path='/' component= {Home}/>
          <Route path='/project/:id' component={ProjectDeatails} />
          <Route path='/Home' component =  {Dashboard}/>
          <Route path='/Createproject' component = {CreatProject}/>
          <Route path="/signin" component = {SignIn}/>
          <Route path="/signup" component = {SignUp}/>
          <Route path="/OwnProfile" component = {Accuieille}/>
          <Route path="/OwnProfile1" component = {AccuieilleProf}/>
          <Route path="/RegistreProfile" component = {Registre_p}    />
          <Route path="/LoginProfile" component = {Identifier}   />
          <Route path="/Notifications" component = {Notifications} />
          <Route path="/LoginProf" component = {Loginprof} />
          <Route path="/add_PDF" component = {Add_PDF} />
          <Route path="/read_PDF" component = {Read_PDF} />
          
          
          
          
         </Switch>

        </div>
        </BrowserRouter>
       
        </MuiThemeProvider>
    );
  }
}

export default App;


