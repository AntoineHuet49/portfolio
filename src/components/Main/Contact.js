import React from "react";
import emailjs from '@emailjs/browser';

class Contact extends React.Component {
    // properties

    // function
    handleSubmitContactForm = (e) => {
        e.preventDefault();

        const form = document.getElementById('contact__form');

        emailjs.sendForm('service_yki4w3w', 'template_dcb3vza', form, "tSlYZKFZED13mgzRN")
            .then((response) => {
                console.log(response.status + " " + response.text);
            })

        // vide les inputs
        const inputs = document.querySelectorAll('#contact__form > input');
        inputs.forEach(input => {
            input.value = "";
        });

        // vide le texte area
        document.querySelector('#contact__form > textarea').value = "";
    }

    //render
    render() {
        return (
            <div className='main__contact'>
                <form onSubmit={this.handleSubmitContactForm} id='contact__form'>
                    <h3>Envoyez moi un mail!</h3>
                    <label autoFocus for="name">Nom</label>
                    <input name="name"></input>
                    <label for="email">Email</label>
                    <input name="email" type='email'></input>
                    <label for="message">Message</label>
                    <textarea name='message' type="text"></textarea>
                    <button type='submit'>Envoyer</button>
                </form>
            </div>
        )
    }
}

export default Contact;