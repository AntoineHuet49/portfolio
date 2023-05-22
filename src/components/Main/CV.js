import React from "react";
import "./CV.css"
import PDF from '../../utils/pdf/CV HUET Antoine.pdf'

class CV extends React.Component {
    // Properties

    // Methods

    // Render
    render() {
        return (
            <div className="cv">
                {window.innerWidth > 1200 ?
                <div className="main__cv">
                    <div className="left">
                        <div className="picture">
                            <img src="./images/CV.jpg" alt="" />
                        </div>
                        <div className="name">
                            <h4><span className="lastname">HUET</span><span className="firstname">ANTOINE</span></h4>
                        </div>
                        <div>
                            <p className="text">Recherche alternance : Concepteur développeur d'Applications <br/>
                            Durée : 13mois + 3mois 100% entreprise<br/>
                            Rythme : 1 semaine en formation, 2 semaine en entreprise<br/>
                            Disponible immédiatement<br/>
                            Télétravail hybride possible en Île-de-France (2h de train)</p>
                        </div>
                        <div className="left_title">
                            <h6 className="left_h6">Informations</h6>
                        </div>
                        <div className="informations">
                            <ul>
                                <li><img src="./images/svg/ping.svg" alt="" /><p>49250 Loire-Authion</p></li>
                                <li><img src="./images/svg/phone.svg" alt="" /><p>06.64.69.65.56</p></li>
                                <li><img src="./images/svg/mail.svg" alt="" /><p>antoine.huet.webdev@gmail.com</p></li>
                                <li><img src="./images/svg/linkedin.svg" alt="" /><p><a href="https://www.linkedin.com/in/antoine-huet-devweb/" target="_blank" rel="noopener noreferrer">Antoine HUET</a></p></li>
                                <li><img src="./images/svg/github.svg" alt="" /><p><a href="https://github.com/AntoineHuet49" target="_blank" rel="noopener noreferrer">AntoineHuet49</a></p></li>
                                <li><img src="./images/svg/www.svg" alt="" /><p><a href="https://www.antoinehuet.com" target="_blank" rel="noopener noreferrer">antoinehuet.com</a></p></li>
                            </ul>
                        </div>
                        <div className="left_title">
                            <h6 className="left_h6">Formation Scolaire</h6>
                        </div>
                        <div className="formation">
                            <p>Titre professionnel Développeur web et web mobile | <a href="https://oclock.io/?utm_source=google&utm_medium=cpc&utm_campaign=Brand&adgroupname=Oclock&keyword=oclock&gclid=CjwKCAjwwL6aBhBlEiwADycBIPM2DLDzPsMCY2g9VsMk2AU9QnIMXyQno_dDd9pj1daCLZO_As0JURoCa78QAvD_BwE" target="_blank" rel="noopener noreferrer">Ecole O'clock</a><br/> - avril 2023 </p>
                            <p>Baccalauréat pro Sécurité et prévention | Lycée Pro Henri Dunant <br/>- juillet 2015</p>
                        </div>
                    </div>

                    <div className="right">

                        <div className="right__one">
                            <h4>Concepteur Developpeur d'Application</h4>
                            <span>-</span>
                            <p>Eligible a la prime d'entreprise de 6000€</p>
                        </div>

                        <div className="right__two">
                            <h5>Expériences / projet</h5>
                        </div>

                        <div className="right__three">
                            <h6>Développeur Back-end | Ecole O'clock</h6>
                            <p className="date">Décembre 2022 à Janvier 2023</p>
                            <p>Projet en équipe de fin de formation : <a href="https://github.com/AntoineHuet49/projet-10-plan-o-miam-back" target="_blank" rel="noopener noreferrer">plan'o'miam</a></p>
                            <ul>
                                <li>Equipe de 3 Développeurs</li>
                                <li>Méthode agile Scrum, sur 4 sprints d'une semaine</li>
                                <li>Conception : Cahiers des charges, MCD, Wireframes</li>
                            </ul>
                            <p>Technologies utilisées :</p>
                            <ul>
                                <li>Symfony, Doctrine</li>
                                <li>React, Redux</li>
                                <li>Mariadb</li>
                                <li>JWT, Déploiement API REST</li>
                            </ul>
                            <h6>Projet Personnel</h6>
                            <ul>
                                <li>Portfolio : React, Routeur, Site responsive | <a href="https://github.com/AntoineHuet49/portfolio" target="_blank" rel="noopener noreferrer">Repo</a></li>
                                <li>Todolist : React, Symfony, CSS, HTML | <a href="https://github.com/AntoineHuet49/todolist" target="_blank" rel="noopener noreferrer">Repo</a></li>
                            </ul>
                        </div>

                        <div className="right__four">
                            <h5>Compétences</h5>
                        </div>

                        <div className="right__five">
                            <div className="five__top">
                            <h6>Intégration Web</h6>
                            <p>HTML5, CSS3, SEO, Accessibilité.</p>

                            <h6>Développement Back-end</h6>
                            <p>PHP, MySQL, API Rest, Conception d'une base de données (MCD, MLD, MPD), POO, Laravel, Symfony.</p>

                            <h6>Développement Front-End</h6>
                            <p>React, JavaScript Vanilla.</p>

                            <h6>Gestion de projet numérique</h6>
                            <p>WireFrame, Git/GitHub, User Story, Rédaction d'un cahier des charges.</p>
                            </div>

                            <div className="five__bottom">
                                <div>
                                    <h6>Soft Skills :</h6>
                                    <ul>
                                        <li>Travail d'équipe</li>
                                        <li>Autonome</li>
                                        <li>Polyvalent</li>
                                        <li>Dynamique</li>
                                        <li>Motivé</li>
                                        <li>Ponctuel</li>
                                    </ul>
                                </div>

                                <div>
                                    <h6>Loisir :</h6>
                                    <ul>
                                        <li>Sapeur-Pompier (depuis 2013)</li>
                                        <li>Basket (Joue dans un petit club)</li>
                                        <li>Musique (Pratique la guitare)</li>
                                        <li>Jeux-Vidéo</li>
                                    </ul>
                                </div>

                                <div>
                                    <h6>Langues :</h6>
                                    <ul>
                                        <li>Français : Maternelle</li>
                                        <li>Anglais : Intermédiaire</li>
                                    </ul>
                                </div>

                                <div>
                                    <h6>Permis :</h6>
                                    <ul>
                                        <li>B et B1 : 2014</li>
                                        <li>A2 : 2019</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                : 
                <div className="mobile">
                    <p>L'écran est trop petit :'(<br/>
                    Revenez me voir sur PC<br/>
                    Ou sinon</p>
                    <img src="./images/svg/arrow.svg" alt="" /> 
                </div>
                }
                <button className="download"><a href={PDF} download >Téléchargez moi !!!</a></button>
            </div>



        )
    }
}

export default CV;