import { FiFigma } from 'react-icons/fi'
import { RiReactjsLine } from 'react-icons/ri'
import { FaServer } from 'react-icons/fa'
import { VscReferences } from 'react-icons/vsc'


const data = [
    {
        id: 1, icon: <FiFigma />, title: 'Design UI/UX', desc: "J'utilise Figma et je fais le maximum pour retransmettre avec exactitude les maquettes mis à ma disposition."
    },
    {
        id: 2, icon: <RiReactjsLine />, title: 'Développement Frontend', desc: "J'utilise actuellement React en Framework JavaScript. Je prends également soin à vérifier le coté responsive de tout mes projets."
    },
    {
        id: 3, icon: <FaServer />, title: 'Développement Backend', desc: "J'utilise actuellement NodeJS avec MongoDB en base de donnée NoSQL. J'apprends également le PHP avec Symfony en tant que Framework et les DB SQL."
    },
    {
        id: 4, icon: <VscReferences />, title: 'SEO/Accessibilité', desc: "Je mets en oeuvre mes connaissances afin d'optimiser au maximum le SEO et l'accessibilité de mes projets."
    }
]


export default data