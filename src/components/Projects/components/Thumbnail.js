import React from 'react'; // Import the Component component from React
import {Link} from 'react-router-dom'; // Import the Link component
import '../../../App.css';
 
function Thumbnail({title, image, deployedApp, repo}) {
  return (
    <div className="project">
      {/* <Link to=""> */}
        <div className="project-image">
          <a target="_blank" href={deployedApp} rel="noreferrer" >
            <img src={image} alt={title}/>
          </a>
        </div>
        {/* <div className="project-title">{title}</div> */}
        <div className="project-repo">
          <a target="_blank" href={repo} rel="noreferrer" >{title}</a>
        </div>
      {/* </Link> */}
    </div>
  );
}
 
export default Thumbnail;