import "./Projects.css"
import { Link } from "react-router-dom"
import {ProjectCard} from "./ProjectCard"

export const Projects = () => {
  return (
    <>
      <div className="projectHeader">
        <h2 className="projectLogo">Design Projects</h2>
      </div>

      <div className="projectCards">
        <Link className="linkStyle" to='/projects'>
          <ProjectCard url={'url(https://raw.githubusercontent.com/DaniBoie/TS-React-Portfolio/main/src/resources/SecretSauceLogo.png)'}/>
        </Link>

        <Link className="linkStyle" to='https://www.ochillel.org/' target="_blank">
          <ProjectCard url={'url(https://raw.githubusercontent.com/DaniBoie/TS-React-Portfolio/main/src/resources/OC-Hillel-logo.png-OC%2BHillel%2Blogo.png)'}/>
        </Link>
        
        <Link className="linkStyle" to='https://www.figma.com/proto/6zGW25nzlwmHFHtBhS6kF9?node-id=251-47&mode=design&t=RlV5BqQWL5A9WDcm-6' target='_blank'>
          <ProjectCard url={'url(https://raw.githubusercontent.com/DaniBoie/TS-React-Portfolio/main/src/resources/ZotPediaVisual.PNG)'}/>
        </Link>

        <Link className="linkStyle" to='https://www.figma.com/proto/HH5tdtQbHDJGyEYtMUMTVb?node-id=0-1&mode=design&t=g8hz04v9nsTFieNi-6' target='_blank'>
          <ProjectCard url={'url(https://raw.githubusercontent.com/DaniBoie/TS-React-Portfolio/main/src/resources/ZotPediaVisual.PNG)'}/>
        </Link>
        
      </div>
      
    </>
  )
}