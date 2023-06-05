import "./Greet.css"
import { Link } from "react-router-dom";

type GreetProps = {
  name : string
}

export const Greet = (props: GreetProps) => {
  return (
    <header className="header">

      <h1 className="nameLogo">
        <Link className="link"to="/">{props.name}</Link>
      </h1>

      <div className=""></div>

      <nav className="links">
        <p>
          <Link to="/projects" className="link">Projects</Link>
        </p>
        <p>
          <a href="https://raw.githubusercontent.com/DaniBoie/TS-React-Portfolio/de6b6cbd03ae54dc5fd4fe12b12edd0fcd95e199/src/resources/Dev%20Resume.pdf" target="_blank" className="link">Resume</a>
        </p>
        <p >
          <a href="mailto:dannyboy3385@gmail.com" className="link">Contact</a>
        </p>
      </nav>

      <style>
        @import url('https://fonts.googleapis.com/css2?family=Alice&family=Benne&family=Yrsa&display=swap');
      </style>
    </header>
    
  )
}