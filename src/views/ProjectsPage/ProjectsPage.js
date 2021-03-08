import React from "react"
import "../../App.css";
import {Link} from "react-router-dom";

// components needed for page
import Thumbnail from "../../components/Projects/components/Thumbnail.js";

// project info needed for page
import projects from "../../components/Projects/projectInfo"
 
function ProjectsPage(props) {
  return (
    <div>
      <h1>Projects</h1>
      {console.log(projects)}
      <div>
        {projects.map((project, index) => {
          {console.log(project.image)}
          return(
            <div key={index} >
                <Thumbnail 
                  image={project.image}
                  title={project.title}
                  deployedApp={project.deployedApp}
                  repo={project.repo}
                />
            </div> 
          )
        })}
      </div>
    </div>
  )
}
 
export default ProjectsPage;