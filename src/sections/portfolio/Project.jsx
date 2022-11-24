import { useEffect, useState } from 'react'
import Card from '../../components/Card'


const Project = ({ project }) => {

  const [toggleDemo, setToggleDemo] = useState(false)

  useEffect(() => {
    if (project.demo.length === 0) {
      setToggleDemo(true);
    } else {
      setToggleDemo(false);
    }
  }, [project.demo.length])


  return (
    <Card className="portfolio__project">
      <div className="portfolio__project-image">
        <img src={project.image} alt="Portfolio Project" />
      </div>
      <h4>{project.title}</h4>
      <p>{project.desc}</p>
      <div className="portfolio__project-cta">
        <a href={project.demo} className="btn sm" target="_blank" rel="noopener noreferrer" style={{ display: toggleDemo ? "none" : "block" }}>Demo</a>
        <a href={project.github} className="btn sm primary" target="_blank" rel="noopner noreferrer">Github</a>
      </div>
    </Card>
  )
}

export default Project