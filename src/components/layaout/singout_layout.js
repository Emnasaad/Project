import React, { Component }  from 'react';
import {NavLink} from 'react-router-dom';

export  const Singout = () => {
    
    return (
        <ul className="right">
            <li>
                <NavLink to = '/Sigin'>Sign Up </NavLink>
            </li>
            <li>
                <NavLink to = '/'>Log In</NavLink>
            </li>
           




        </ul>
        
        
        );
}

export  default Singout ;