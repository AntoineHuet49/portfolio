import React from "react";
import "./index.css";

class Card extends React.Component {
    // state

    //function

    //render
    render() {
        return (
            <div className='card'>
                <h3 className='card__title'>TodoList</h3>
                <div className='card__img'>
                    <img src='' alt=''></img>
                </div>
                <p className='card__description'>Une TodoList développé avec Symfony et React</p>
            </div>
        )
    }
}

export default Card;