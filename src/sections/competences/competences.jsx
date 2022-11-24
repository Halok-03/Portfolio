import Card from '../../components/Card'
import data from './data'
import './competences.css'

const Competences = () => {
  return (
    <section id="competences">
      <h2>Mes compétences</h2>
      <p>Je travaille dur pour m'améliorer chaque jour dans tout les domaines ci-dessous</p>
      <div className="container services__container" data-aos="fade-up">
        {
          data.map(item => (
            <Card key={item.id} className="service light">
              <div className="service__icon">{item.icon}</div>
              <div className="service__details">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </Card>
          ))
        }
      </div>
    </section>
  )
}

export default Competences