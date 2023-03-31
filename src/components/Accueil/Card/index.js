import React from "react";
import "./index.css";
import imageTodoList from "./../../../utils/images/fondEcranMontagne.jpg"

class Card extends React.Component {
    // state

    //function

    //render
    render() {
        return (
            <div className='card'>
                <h3 className='card__title'>TodoList</h3>
                    <img className='card__img' src={imageTodoList} alt=''></img>
                <p className='card__description'>Une TodoList développé avec Symfony et React</p>
            </div>
        )
    }
}

export default Card;