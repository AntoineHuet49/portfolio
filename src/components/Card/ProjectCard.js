import React from "react";
import "./ProjectCard.css";

// image Cards

class ProjectCard extends React.Component {
    // state

    //function

    //render
    render() {
        return (
            <div className='card'>
                <h3 className='card__title'>{this.props.title}</h3>
                    <a href={this.props.link} target="blank">
                        <img className='card__img' src={this.props.image} alt={this.props.alt}></img>
                    </a>
                <p className='card__description'>{this.props.text}</p>
            </div>
        )
    }
}

export default ProjectCard;