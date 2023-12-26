
import { Link } from "react-router-dom";
import "../assets/style/header.scss";

function Header() {
    return (
        <header className="header">
            <div className='title'>
                <h1>LAMTAOUI MOHAMMED</h1>
                <h2>Developpeur Web</h2>
            </div>
            
            <div className="navigation">
                <nav>
                    <Link className="link" to="/">Acceuil</Link>
                    <Link className="link" to="/project">Mes projets</Link>
                    <Link className="link" to="/techno">Les technologies</Link>
                    <Link className="link" to="/contact">Contact</Link>
                </nav>
            </div>
        </header>
    )
}
export default Header