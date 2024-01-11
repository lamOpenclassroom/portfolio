import { Link } from "react-router-dom"
import "../assets/style/Message.scss"

function Sent() {
    

    return (
        <div className="bloc-message">
            <Link id="message-retour" to="/">Retour à l'acceuil</Link>
            <h1 id="message-title">Message envoyé</h1>
        </div>
    )
}
export default Sent;