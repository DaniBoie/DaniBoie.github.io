import "./Projects.css"
import { Link } from "react-router-dom"
import {ProjectCard} from "./ProjectCard"

export const Projects = () => {
  return (
    <>
      <div className="projectHeader">
        <p className="projectLogo">Design Projects</p>
      </div>

      <div className="projectCards">
        <Link className="linkStyle" to='/projects'>
          <ProjectCard url={'url(https://raw.githubusercontent.com/DaniBoie/TS-React-Portfolio/main/src/resources/SecretSauceLogo.png)'}/>
        </Link>
        <ProjectCard url={'url(https://raw.githubusercontent.com/DaniBoie/TS-React-Portfolio/main/src/resources/OC-Hillel-logo.png-OC%2BHillel%2Blogo.png)'}/>
        <ProjectCard url={'url(https://raw.githubusercontent.com/DaniBoie/TS-React-Portfolio/main/src/resources/ZotPediaVisual.PNG)'}/>
        <ProjectCard />
      </div>
      
    </>
  )
}