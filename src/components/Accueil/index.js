import React from 'react';
import './index.css';
import Nav from "../Nav";
import Presentation from '../Main/Presentation';
import Projet from '../Main/Projet';
import Contact from '../Main/Contact';



class Accueil extends React.Component {
    // properties
    constructor(props) {
        super(props);
        this.state = {
            presentation: true,
            projet: false,
            contact: false,
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
                            <Presentation />
                            : null
                        }

                        {this.state.projet ? 
                            <Projet />
                            : null
                        }

                        {this.state.contact ?
                            <Contact />
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