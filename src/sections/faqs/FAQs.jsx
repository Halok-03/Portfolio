import { useEffect } from 'react'
import faqs from './data'
import FAQ from './FAQ'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './faqs.css'

const FAQs = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  })

  return (
    <section id="faqs">
      <h2>Questions Fréquemment Posées</h2>
      <p>
        Voici quelques questions que certains recruteurs m'ont posés. Cliquez pour voir la réponse, et si vous avez encore d'autres questions, envoyez-moi un message depuis la section contact !
      </p>
      <div className="container faqs__container" data-aos="fade-in">
        {
          faqs.map(faq => (
            <FAQ key={faq.id} faq={faq} />
          ))
        }
      </div>
    </section>
  )
}

export default FAQs