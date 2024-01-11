import { Link } from "react-router-dom";
import "../assets/style/Message.scss";

function Error() {
    return (
        <div className="bloc-message">
            <Link id="message-retour" to="/">Retour à l'acceuil</Link>
            <h1 id="message-title">404</h1>
        </div>
    )
}

export default Error;