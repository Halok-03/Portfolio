import AboutImage from '../../assets/about.jpg'
import CV from '../../assets/cv.pdf'
import { HiDownload } from 'react-icons/hi'
import data from './data'
import Card from '../../components/Card'
import './about.css'

const About = () => {
    return (
        <section id="about" data-aos="fade-in">
            <div className="container about__container">
                <div className="about__left">
                    <div className="about__portrait">
                        <img src={AboutImage} alt="About Image" />
                    </div>
                </div>
                <div className="about__right">
                    <h2>À propos de moi</h2>
                    <div className="about__cards">
                        {
                            data.map(item => (
                                <Card key={item.id} className="about__card">
                                    <span className='about__card-icon'>{item.icon}</span>
                                    <h5>{item.title}</h5>
                                    <small>{item.desc}</small>
                                </Card>
                            ))
                        }
                    </div>
                    <p>
                        Après avoir travaillé dans différents domaines tel que l'éducation, l'industrie ou encore les casinos, j'ai décidé en Janvier 2022 de me lancer dans un domaine qui me tient à coeur, la création et le développement de site internet.
                    </p>
                    <p>
                        Bonjour, je m'appelle Baptiste Azevedo et j'habite à Saint-Etienne (42). Je suis un développeur junior avec un diplome de niveau BAC+2 de développeur web. Ma priorité absolue est de trouver une entreprise me permettant de m'améliorer et de monter en compétences, en vous offrant de mon coté ma joie de vivre , mon savoir-faire, mon extrème motivation ainsi qu'une capacité d'autoformation et d'apprentissage. Contactez-moi dès aujourd'hui afin de commencer à travailler ensemble ! Découvrez mon CV ci-dessous!
                    </p>
                    <a href={CV} download className='btn primary'>Télécharger mon CV <HiDownload /></a>
                </div>
            </div>
        </section>
    )
}

export default About