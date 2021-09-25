import React, {Component} from 'react';
import  './homme.css';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';



const Hom = () => {
    return (
         <div>  
               
             
            <form method="post" action="">
                <div className="login-box">
                    <div className="a">
                        <h1 className="b"><strong> Who are you?  </strong></h1>
                    </div>

                    <Button color="Black" className="button_l" component={Link} to="/LoginProf" >Trainer</Button>
                    <Button color="black" className="button_l" component={Link} to="/SignIn" >administration</Button>
                    <Button color="black" className="button_r" component={Link} to="/LoginProfile" >student</Button>

                    <h2> OUR WEB SITE Created by Emna&&Dhia&&Rim&&Irada  </h2>
                </div>
            </form>

        </div>
            
        )
    }

export default Hom;