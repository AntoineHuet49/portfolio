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
                    <a href={this.props.link} target="blank">
                        <img className='card__img' src={this.props.image} alt='projet'></img>
                    </a>
                <p className='card__description'>{this.props.text}</p>
            </div>
        )
    }
}

export default Card;