import "./ProjectCard.css"
import { url } from "inspector"

export const ProjectCard = (props: any) => {
  return (
      <div className="card" style={{backgroundImage: props.url}}>
      </div>
    
  )
}