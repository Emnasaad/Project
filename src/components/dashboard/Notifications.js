import  React ,{Component}  from 'react'; 
import Notification from './notification';
import {ProjectList} from '../projects/projectList'; 
import Navbarownprofile1 from '../../components/layaout/NavbarOwnProfile1';
import { connect } from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import {Redirect} from 'react-router-dom';

class Notifications extends Component {
    render(){
        const {projects,auth } = this.props;
       // if (! auth.uid) return <Redirect to ='/Home'/>  
        
        
      
       
        return(
            <div>
                <Navbarownprofile1/>
                <br></br> <br></br> <br></br>
            <div className= "dashboard ">
                <div className="row">
                    <div className ="col s12 m6"> <ProjectList projects= {projects}/> </div>
                    
                    
                </div>
                </div>
            </div>

        );
    }


}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth

    }
} 


export default compose(
connect(mapStateToProps),
firestoreConnect([
    {collection: 'projects'}   
])
)(Notifications)


