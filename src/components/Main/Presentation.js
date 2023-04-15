import React from "react";
import './presentation.css';

class Presentation extends React.Component {
    // properties

    // function

    //render
    render() {
        return (
            <div className='main__presentation'>
                <div className='resume'>
                    <h3>Bienvenue !</h3>
                    <p>Jeune développeur de 27 ans, je me suis spécialisé dans le back-end, surtout sur Symfony. Je sais également coder du front-end, notamment avec le Framework React, comme le montre ce site. Ici, vous pouvez retrouver mes différents projets perso et d'entreprise, réalisations montrant ce que je suis capable de faire. Vous pouvez aussi télécharger mon CV et me contacter par mail. Bonne visite !</p>
                </div>
            </div>
        )
    }
}

export default Presentation;