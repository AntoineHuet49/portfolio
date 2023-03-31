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
                </div>
            </div>
        );
    }
}

export default Accueil;