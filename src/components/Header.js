import "../assets/style/header.scss"

function Header() {
    return (
        <header className="header">
            <div className='title'>
                <h1>LAMTAOUI MOHAMMED</h1>
                <h2>Developpeur Web</h2>
            </div>
            
            <div className="navigation">
                <nav>
                    <li>Acceuil</li>
                    <li>Mes projets</li>
                    <li>Les technologies</li>
                    <li>Contact</li>
                </nav>
            </div>
        </header>
    )
}
export default Header