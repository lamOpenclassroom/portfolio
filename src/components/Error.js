import { Link } from "react-router-dom";
import "../assets/style/Message.scss";
import { useLocation } from "react-router-dom";

function Error() {
    const location = useLocation();

    return (
        <div className="bloc-message">
            <Link id="message-retour" to="/">Retour à l'acceuil</Link>
            <div >
                <h1 className="message-title">"{location.pathname}"Page not found</h1>
                <p className="message-title">404</p>
            </div>
        </div>
    )
}

export default Error;