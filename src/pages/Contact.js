import { useState } from "react";
import "../assets/style/contact.scss";

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    
    return (
        <div id="block-contact">
            <h1 id="titleForm">Contact</h1>

            <form name="contact" method="POST" id="form">
                <input type="hidden" name="form-name" value="contact" />
                <div id="block-form">
                    <label for="name"> Nom :</label>
                    <input className="effet" type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                    <label for="email"> Email :</label>
                    <input className="effet" type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <label for="message"> Message :</label>
                    <textarea
                        className="effet"
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}>
                    </textarea>
                </div>
                <button type="submit">Envoyer</button>
            </form>

        </div>
    )
}
export default Contact