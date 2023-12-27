import "../assets/style/contact.scss"

function Contact() {
    return (
        <div id="block-contact">
            <h1>Contact</h1>

            <form id="block-form">
                <label> Nom :</label>
                <input className="effet" type="texte"></input>
                <label> Email :</label>
                <input className="effet" type="email"></input>
                <label> Message :</label>
                <textarea className="effet" type="texte"></textarea>
            </form>

            <button type="submit">Envoyer</button>

        </div>
        
    )
}
export default Contact