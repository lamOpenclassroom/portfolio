import "../assets/style/contact.scss"

function Contact() {
    return (
        <div id="block-contact">
            <h1>Contact</h1>

            <form name="contact" method="POST" id="block-form" data-netlify="true">
            <input type="hidden" name="subject" value="Sales inquiry from mysitename.netlify.app" />
                <label> Nom :</label>
                    <input className="effet" type="text" name="name"/>
                <label> Email :</label>
                    <input className="effet" type="email" name="email"/>
                <label> Message :</label>
                    <textarea className="effet" name="message"></textarea>
            </form>

            <button type="submit">Envoyer</button>

        </div>
        
    )
}
export default Contact