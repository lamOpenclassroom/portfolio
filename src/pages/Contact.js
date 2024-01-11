import "../assets/style/contact.scss"

function Contact() {
    return (
        <div id="block-contact">
            <h1>Contact</h1>

            <form name="contact" method="POST" id="block-form">
            <input type="hidden" name="form-name" value="contact"/>
                <label for="name"> Nom :</label>
                    <input className="effet" type="text" name="name" value="name"/>
                <label for="email"> Email :</label>
                    <input className="effet" type="email" name="email" value="email"/>
                <label for="message"> Message :</label>
                    <textarea className="effet" name="message" value="message"></textarea>
            </form>

            <button type="submit">Envoyer</button>

        </div>
        
    )
}
export default Contact