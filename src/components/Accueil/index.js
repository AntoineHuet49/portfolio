import React from 'react';
import Card from './Card';
import './index.css';
import Nav from "./Nav";
import emailjs from '@emailjs/browser';




class Accueil extends React.Component {
    // properties
    constructor(props) {
        super(props);
        this.state = {
            presentation: true,
            projet: false,
            contact: false,
            imageTodoList: "./images/fondEcranMontagne.jpg",
            cards: []
        }
    }

    // function
    handleClickAccueil = (e) => {
        this.handleMenuBtnClick();
        this.setState({presentation: true});
        this.setState({projet: false});
        this.setState({contact: false});
    }

    handleClickProjet = (e) => {
        this.handleMenuBtnClick();
        this.setState({presentation: false});
        this.setState({projet: true});
        this.setState({contact: false});
    }

    handleClickContact = (e) => {
        this.handleMenuBtnClick();
        this.setState({presentation: false});
        this.setState({projet: false});
        this.setState({contact: true});
    }

    handleMenuBtnClick = (e) => {
        const menuBtn = document.querySelector(".menu");
        menuBtn.classList.toggle('opened');

        const background = document.querySelector(".background");
        background.classList.toggle("nav--blur")

        const content = document.querySelector('.content');
        content.classList.toggle("nav--blur");

        this.toggleNav();
    }

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

    toggleNav = () => {
        const navList = document.querySelector("#nav__list");
        (navList.classList.contains("nav__list")) ? navList.classList.replace("nav__list", "nav__list--show") : navList.classList.replace("nav__list--show", "nav__list")
    }
    
    //render
    render() {

        return (
            <div className="container">
                <header>
                    <Nav handleClickAccueil={this.handleClickAccueil}
                        handleClickProjet={this.handleClickProjet}
                        handleClickContact={this.handleClickContact}
                        handleMenuBtnClick={this.handleMenuBtnClick}
                    />
                </header>
                <div className='content'>
                    <h1 className="mainTitle">Huet Antoine</h1>
                    <span className='title__barre'></span>
                    <h2 className="secondTitle">Développeur web et web mobile</h2>

                    <main className='main'>
                    {this.state.presentation ? 
                        <div className='main__presentation'>
                            <h3>Bienvenue !</h3>
                            <p>Je me présente, je suis un développeur agé de 27ans spécialisé dans le back-end, surtout sur Symfony. Je sais néanmoins faire du front-end égualement comme le montre ce site codé grâce au Framework React. Sur ce site vous pouvez retrouver mes different projet perso et en entreprise, afin de voir ce que je suis capable de faire. Vous pourrez télécharger mon CV si vous le souhaitez et me contecter par mail. Bonne visite !</p>
                        </div> 
                        : null
                    }
                    {this.state.projet ? 
                        <div className='main__projet'>
                            <Card image={this.state.imageTodoList} />
                        </div> 
                        : null
                    }
                    {this.state.contact ?
                        <div className='main__contact'>
                            <form onSubmit={this.handleSubmitContactForm} id='contact__form'>
                                <h3>Envoyé moi un mail!</h3>
                                <label autoFocus for="name">Nom</label>
                                <input name="name"></input>
                                <label for="email">Email</label>
                                <input name="email" type='email'></input>
                                <label for="message">Message</label>
                                <textarea name='message' type="text"></textarea>
                                <button type='submit'>Envoyer</button>
                            </form>
                        </div>
                        : null
                    }
                    </main>
                </div>
                <div className='background'></div>
                <footer className='footer'>

                </footer>
            </div>
        );
    }
}

export default Accueil;