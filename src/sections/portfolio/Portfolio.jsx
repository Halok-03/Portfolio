import './portfolio.css'
import Projects from './Projects'
import ProjectsCategories from './ProjectsCategories'
import data from './data'
import { useState } from 'react'

const Portfolio = () => {
  const [projects, setProjects] = useState(data);

  const categories = data.map(item => item.category);
  const uniqueCategories = ["tout", ...new Set(categories)];

  const filterProjectsHandler = (category) => {
    if (category === "tout") {
      setProjects(data);
      return;
    }

    const filterProjects = data.filter(project => project.category === category);
    setProjects(filterProjects);
  }


  return (
    <section id="portfolio">
      <h2>Mes Projets</h2>
      <p>
        Découvrez mes projets ainsi en cliquant sur le bouton demo , ainsi que le code source directement sur mon github.
      </p>
      <div className="container portfolio__container">
        <ProjectsCategories categories={uniqueCategories} onFilterProjects={filterProjectsHandler} />
        <Projects projects={projects} />
      </div>
    </section>
  )
}

export default Portfolio