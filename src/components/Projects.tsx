import "./Projects.css"
import {ProjectCard} from "./ProjectCard"

export const Projects = () => {
  return (
    <>
      <div className="projectHeader">
        <p className="projectLogo">Design Projects</p>
      </div>

      <div className="projectCards">
        <ProjectCard url={'url(https://raw.githubusercontent.com/DaniBoie/TS-React-Portfolio/main/src/resources/astro.jpg)'} />
        <ProjectCard url={'url(https://raw.githubusercontent.com/DaniBoie/TS-React-Portfolio/main/src/resources/SecretSauceLogo.png)'}/>
        <ProjectCard url={'url(https://raw.githubusercontent.com/DaniBoie/TS-React-Portfolio/main/src/resources/OC-Hillel-logo.png-OC%2BHillel%2Blogo.png)'}/>
        <ProjectCard url={'url(https://raw.githubusercontent.com/DaniBoie/TS-React-Portfolio/main/src/resources/ZotPediaVisual.PNG)'}/>
        <ProjectCard />
      </div>
      
    </>
  )
}