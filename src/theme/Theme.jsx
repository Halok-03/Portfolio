import Modal from "../components/Modal"
import { primaryColors, backgroundColors } from "./data"
import PrimaryColor from "./PrimaryColor"
import BackgroundColor from './BackgroundColor';
import './theme.css'

const Theme = () => {
    return (
        <Modal className="theme__modal">
            <h3>Customisez Votre Thème</h3>
            <small>Changez la couleur principale et la couleur de fond en fonction de vos préférence.</small>
            <div className="theme__primary-wrapper">
                <h5>Couleur Principale</h5>
                <div className="theme__primary-colors">
                    {
                        primaryColors.map(pColor => <PrimaryColor key={pColor.className} className={pColor.className} />)
                    }
                </div>
            </div>
            <div className="theme__background-wrapper">
                <h5>Couleur de fond</h5>
                <div className="theme__background-colors">
                    {
                        backgroundColors.map(bColor => <BackgroundColor key={bColor.className} className={bColor.className} />)
                    }
                </div>
            </div>
        </Modal>
    )
}

export default Theme