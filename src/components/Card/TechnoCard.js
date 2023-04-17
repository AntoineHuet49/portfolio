import React from "react";
import "./TechnoCard.css"

class TechnoCard extends React.Component {
    // Properties

    // Methodes

    // Render
    render() {
        return (
            <div className="techno__card">
                <img src={this.props.image} alt={this.props.alt} />
                <h4>{this.props.title}</h4>
            </div>
        )
    }
}

export default TechnoCard;