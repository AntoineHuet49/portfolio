import React from "react";
import './presentation.css';
import TechnoCard from "../Card/TechnoCard";

class Presentation extends React.Component {
    // properties
    constructor(props) {
        super(props);
        this.state = {
            // Card HTML
            titleHTML: "HTML",
            imageHTML: "./images/techno/HTML.png",
            altHTML : "HTML",

            // Card CSS
            titleCSS: "CSS",
            imageCSS: "./images/techno/CSS.png",
            altCSS : "CSS",

            // Card JS
            titleJS: "JS",
            imageJS: "./images/techno/JS.png",
            altJS : "JS",

            // Card PHP
            titlePHP: "PHP",
            imagePHP: "./images/techno/PHP.png",
            altPHP : "PHP",

            // Card SQL
            titleSQL: "SQL",
            imageSQL: "./images/techno/SQL.png",
            altSQL : "SQL",

            // Card Symfony
            titleSymfony: "Symfony",
            imageSymfony: "./images/techno/Symfony.png",
            altSymfony : "Symfony",

            // Card React
            titleReact: "React",
            imageReact: "./images/techno/React.png",
            altReact : "React",
        }
    }

    // function

    //render
    render() {
        return (
            <div className='main__presentation'>
                <div className='resume'>
                    <h3>Bienvenue !</h3>
                    <p>Jeune développeur de 27 ans, je me suis spécialisé dans le back-end, surtout sur Symfony. Je sais également coder du front-end, notamment avec le Framework React, comme le montre ce site. Ici, vous pouvez retrouver mes différents projets perso et d'entreprise, réalisations montrant ce que je suis capable de faire. Vous pouvez aussi télécharger mon CV et me contacter par mail. Bonne visite !</p>
                </div>
                <div className="main__techno">
                    <h3>Technologie Maitrisé</h3>

                    <div className="techno">
                        <TechnoCard 
                            title={this.state.titleHTML}
                            image={this.state.imageHTML}
                            alt={this.state.altHTML}
                        />
                        <TechnoCard 
                            title={this.state.titleCSS}
                            image={this.state.imageCSS}
                            alt={this.state.altCSS}
                        />
                        <TechnoCard 
                            title={this.state.titleJS}
                            image={this.state.imageJS}
                            alt={this.state.altJS}
                        />
                        <TechnoCard 
                            title={this.state.titlePHP}
                            image={this.state.imagePHP}
                            alt={this.state.altPHP}
                        />
                        <TechnoCard 
                            title={this.state.titleSQL}
                            image={this.state.imageSQL}
                            alt={this.state.altSQL}
                        />
                        <TechnoCard 
                            title={this.state.titleSymfony}
                            image={this.state.imageSymfony}
                            alt={this.state.altSymfony}
                        />
                        <TechnoCard 
                            title={this.state.titleReact}
                            image={this.state.imageReact}
                            alt={this.state.altReact}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Presentation;