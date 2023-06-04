import { Greet } from "../components/Greet"
import { ProjectCard } from "../components/ProjectCard"

export const ProjectPage = () => {
  return (
    <>
      <Greet name="Daniel Ayala" />


      <div className="projectHeader">
        <p className="projectLogo">Design Projects</p>
        <p className="projectTag">User Research</p>
        <p className="projectTag">UI/UX</p>
      </div>

      <div className="projectBody">

        <p className="projectProblemStatement">Problem Statement:</p>

        <div className="projectSection">
          <div></div>
          <ProjectCard url={'url(https://raw.githubusercontent.com/DaniBoie/TS-React-Portfolio/main/react-typescript-demo/src/resources/astro.jpg)'} />
          <p>Secret Sauce began as a class exercise for Human Computer Interaction, where we were instructed to solve a novel problem in the world. Our team first brainstormed problem statements individually, then came together on a final decision based on weighted analysis.</p>
          <div></div>
        </div>
        
        <div className="projectSection">
          <div></div>
          <p>hardest problems to address was differentiating our product from the field... My contribution was ____. To do so, I ____...  Key finding: ______.</p>
          <ProjectCard url={'url(https://raw.githubusercontent.com/DaniBoie/TS-React-Portfolio/main/react-typescript-demo/src/resources/astro.jpg)'} />
          <div></div>
          
        </div>

        <div className="projectSection">
          <div></div>
          <ProjectCard url={'url(https://raw.githubusercontent.com/DaniBoie/TS-React-Portfolio/main/react-typescript-demo/src/resources/astro.jpg)'} />
          <p>user research... highlight the parts of the research that reiterate the value in the "gap" you found</p>
          <div></div>
        </div>

        <div className="projectDesign">
          <ProjectCard url={'url(https://raw.githubusercontent.com/DaniBoie/TS-React-Portfolio/main/react-typescript-demo/src/resources/astro.jpg)'} />
          <ProjectCard url={'url(https://raw.githubusercontent.com/DaniBoie/TS-React-Portfolio/main/react-typescript-demo/src/resources/astro.jpg)'} />
          <ProjectCard url={'url(https://raw.githubusercontent.com/DaniBoie/TS-React-Portfolio/main/react-typescript-demo/src/resources/astro.jpg)'} />
          <ProjectCard url={'url(https://raw.githubusercontent.com/DaniBoie/TS-React-Portfolio/main/react-typescript-demo/src/resources/astro.jpg)'} />
        </div>
      </div>

      <div className="projectLessonsHeader">
          <p className="projectLogo">Reflection / Lessons Learned</p>
      </div>

      <div className="projectSection">
        <div></div>
        <ProjectCard url={'url(https://raw.githubusercontent.com/DaniBoie/TS-React-Portfolio/main/react-typescript-demo/src/resources/astro.jpg)'} />
        <p>what I learned and what I would do if we moved forward?</p>
        <div></div>
      </div>
      <div>
        <video className="projectVideo" src=""></video>
      </div>
    </>
  )
}