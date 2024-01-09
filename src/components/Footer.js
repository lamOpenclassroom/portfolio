import "../assets/style/footer.scss"

function Footer() {
    return (
        <footer className="footer">
            <nav>
                <ul>
                    <li>© Mohamed Lamtaoui</li>
                    <li>
                        <a href="https://www.linkedin.com/in/mohamed-lamtaoui-ab49b5114" target="blank" aria-label="lien linkedin">
                            <i className="fa-brands fa-linkedin" />
                        </a>
                    </li>
                    <li><i className="fa-solid fa-at"></i> lamtaoui@hotmail.fr</li>
                </ul>
            </nav>
        </footer>
    )
}
export default Footer