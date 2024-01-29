import { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/style/header.scss";

function Header() {
    const [menuMobil, setmenuMobil] = useState(true);
    
    const addMenu = () => {
        setmenuMobil(!menuMobil);
    }

    return (
        <header className="header">
            <div className='title'>
                <h1>LAMTAOUI MOHAMED</h1>
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
            <div className={menuMobil ? "hidden" : "visible navMobil"}>
                <nav className="navMobil-link">
                    <Link onClick={addMenu} className="link" to="/">Acceuil</Link>
                    <Link onClick={addMenu} className="link" to="/project">Mes projets</Link>
                    <Link onClick={addMenu} className="link" to="/techno">Les technologies</Link>
                    <Link onClick={addMenu} className="link" to="/contact">Contact</Link>
                </nav>
            </div>
            
            <i onClick={addMenu} className="fa-solid fa-bars"></i>
        </header>
    )
}
export default Header