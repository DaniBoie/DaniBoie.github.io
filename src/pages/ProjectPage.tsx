import { Greet } from "../components/Greet"
import { ProjectCard } from "../components/ProjectCard"

export const ProjectPage = () => {
  return (
    <div className="projectPage">
      <Greet name="Daniel Ayala" />


      <div className="projectHeader">
        <h2 className="projectLogo">Secret Sauce</h2>
        <div className="projectTagGroup"style={{"marginRight": "1vw"}}>
          <p className="projectTag">User Research</p>
          <p className="projectTag">UI/UX</p>
        </div>
      </div>

      <div className="projectBody">

        <p className="projectProblemStatement">Problem Statement: Many home cooks struggle with deciding what to make when they have various ingredients available, and they lack a convenient way to find recipes that use those ingredients.</p>

        <div className="projectSection">
          <div></div>
          <ProjectCard url={'url(https://raw.githubusercontent.com/DaniBoie/TS-React-Portfolio/main/src/resources/scale-weight-icon-transparent-free-png.webp)'} />
          <p>Secret Sauce began as a class exercise for Human Computer Interaction, in which we were instructed to solve a novel problem in the world. Our team first brainstormed problem statements individually, then came together on a final problem choice based on weighted analysis.</p>
          <div></div>
        </div>
        
        <div className="projectSection">
          <div></div>
          <p>After conducting a competitive analysis I realized the hardest problems to address was differentiating our product from all other recipe apps on the market and giving users a reason to choose our product instead. My contribution to solve this was to design social and advanced filtering features that I found our competitors lacked. To do so, I conducted user research in order to understand what filters/social actions users would find useful and what designs users liked the most.  Key finding: Users wanted a social recipe upload and rating feature and prioritized appliance, allergy, and diet filters.</p>
          <ProjectCard url={'url(https://raw.githubusercontent.com/DaniBoie/TS-React-Portfolio/main/src/resources/CompetitiveAnalysis.png)'} />
          <div></div>
          
        </div>

        <div className="projectSection">
          <div></div>
          <ProjectCard url={'url(https://raw.githubusercontent.com/DaniBoie/TS-React-Portfolio/main/src/resources/appliancePie.png)'} />
          <ProjectCard url={'url(https://raw.githubusercontent.com/DaniBoie/TS-React-Portfolio/main/src/resources/recipeBar.png)'} />
          
          <div></div>
        </div>

        <p style={{"textAlign": "center"}}> Because there is currently no widely known app users go to for finding and sharing recipes, it provides a prime opportunity to come up with something that could shake the market.</p>
        <p style={{ "textAlign": "center" }}>Using insights from user research, we iterated on and created a functional prototype that captures the core functions we invisioned for the application.</p>
        <a href="https://www.figma.com/proto/uJNUeh6N74Sy87qfepHOlV/Secret-Sauce-Hifi-Prototype?type=design&node-id=8-2&scaling=scale-down&page-id=0%3A1&starting-point-node-id=8%3A2&show-proto-sidebar=1"></a>
        <div style={{"display": "flex", "justifyContent": "center"}}>
          <ProjectCard url={'url(https://raw.githubusercontent.com/DaniBoie/TS-React-Portfolio/main/src/resources/sketch.jpg)'} />
        </div>
        
        <div className="projectDesign">
          <ProjectCard url={'url(https://raw.githubusercontent.com/DaniBoie/TS-React-Portfolio/main/src/resources/Lofi2.png)'} />
          <ProjectCard url={'url(https://raw.githubusercontent.com/DaniBoie/TS-React-Portfolio/main/src/resources/Lofi1.png)'} />
          <ProjectCard url={'url(https://raw.githubusercontent.com/DaniBoie/TS-React-Portfolio/main/src/resources/HiFi1.png)'} />
          <ProjectCard url={'url(https://raw.githubusercontent.com/DaniBoie/TS-React-Portfolio/main/src/resources/Hifi2.0.png)'} />
        </div>
      </div>

      <div style={{ "display": "flex", "justifyContent": "center"}}>
        <p ><a target="_blank" className="figmaLink" href="https://www.figma.com/proto/uJNUeh6N74Sy87qfepHOlV/Secret-Sauce-Hifi-Prototype?type=design&scaling=scale-down&page-id=0%3A1&node-id=8-2&starting-point-node-id=8%3A2&show-proto-sidebar=1"> Link to Figma Functional Prototype</a></p>
    </div>

      <div className="projectLessonsHeader">
          <h2 className="projectLogo">Reflection / Lessons Learned</h2>
      </div>

      <p style={{ "textAlign": "center", "margin": "20px" }}>What I learned and what I would do if we moved forward?</p>

      <div className="projectSection">
        <div></div>
        <ProjectCard url={'url(https://raw.githubusercontent.com/DaniBoie/TS-React-Portfolio/main/src/resources/Reflection.png)'} />
        <div></div>
      </div>

      <p className="lessonText">In doing this project I learned how to create key design artifacts such as a competitive analysis / project presentation, and expanded my toolbox of design methods.</p>
      <p className="lessonText">If I were to continue moving forward with this project, I would conduct user interviews to gague interest in Secret Sauce's core functionality and if interest is high enough begin developing a minimum viable product.  </p>
      {/* <div>
        <video className="projectVideo" src=""></video>
      </div> */}
    </div>
  )
}