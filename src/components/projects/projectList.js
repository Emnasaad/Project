import React, { Component }  from 'react';
import {ProjectSummary} from './projectSummary';
import { Link } from 'react-router-dom';


 export const ProjectList = ({projects}) => {
    return (
        <div className='project-list section'>
            { projects && projects.map(project => {
                return(
                    <Link to = {'/project/' + project.id} key = {project.id}>
                    <ProjectSummary project={project} />
                    </Link>
                )
            }
                
                
                
                
                
                
                )}
          
                  



                   
              
        </div>
          




    )
}