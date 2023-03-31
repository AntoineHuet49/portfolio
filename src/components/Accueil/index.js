import React from 'react';
import App from '../../App';
import './index.css';
import Nav from "./Nav";

class Accueil extends React.Component {
    // properties
    show = false;

    // getters and setters
    getShow() {
        return this.show
    }

    setShow(value) {
            this.show = value;
    }

    // function



    //render
    render() {

        return (
            <div className="container">
                <Nav setShow={this.setShow} getShow={this.getShow} show={this.show} />
                <div className='background'>
                    <h1 className="mainTitle">Huet Antoine</h1>
                    <span className='title__barre'></span>
                    <h2 className="secondTitle">Développeur web et web mobile</h2>

                    <main className='main'>
                        <div className='main__presentation'>
                            <h3>Bienvenue !</h3>
                            <p>Je me présente, je suis un développeur agé de 27ans spécialisé dans le back-end, surtout sur Symfony. Je sais néanmoins faire du front-end égualement comme le montre ce site codé grâce au Framework React. Sur ce site vous pouvez retrouver mes different projet perso et en entreprise, afin de voir ce que je suis capable de faire. Vous pourrez télécharger mon CV si vous le souhaitez et me contecter par mail. Bonne visite !</p>
                        </div>
                    </main>
                </div>
            </div>
        );
    }
}

export default Accueil;