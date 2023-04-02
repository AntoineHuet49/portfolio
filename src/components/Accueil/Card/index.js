import React from "react";
import "./index.css";

// image Cards

class Card extends React.Component {
    // state

    //function

    //render
    render() {
        return (
            <div className='card'>
                <h3 className='card__title'>TodoList</h3>
                    <img className='card__img' src={this.props.image} alt='projet'></img>
                <p className='card__description'>Une TodoList développé avec Symfony et React</p>
            </div>
        )
    }
}

export default Card;