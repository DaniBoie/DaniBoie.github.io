import "./About.css";

export const About = () => {
  return (
    <div className="about">


      <div className="info">
        <p className="jobTitle">Software Engineer and Designer</p>
        <div className="education1"> 
          <div>
            <p className="topText">B.S. Software Engineering</p>
            <p className="bottomText">University of California, Irvine</p>
          </div>
          <div>
            <p className="topText">Full Stack Web Development Certificate </p>
            <p className="bottomText">UCI Division of Continuing Education</p>
          </div>
        </div>
      </div>

      <div className="portfolioImage"></div>


      <div className="slogan">
        <div className="education2"> 
          <div>
            <p className="topText">B.S. Software Engineering</p>
            <p className="bottomText">University of California, Irvine</p>
          </div>
          <div>
            <p className="topText">Full Stack Web Development Certificate </p>
            <p className="bottomText">UCI Division of Continuing Education</p>
          </div>
        </div>
        <p>
          Creating innovative, user-focused software solutions to real problems
        </p>
      </div>

      
    </div>
  )
}