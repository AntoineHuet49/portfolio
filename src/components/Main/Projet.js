import React from "react";
import Card from '../Card';
import './projet.css';

class Projet extends React.Component {
    // properties
    constructor(props) {
        super(props);
        this.state = {
            // projet todolist
            imageTodoList: "./images/Todolist.com.png",
            textTodoList : "Une TodoList développé avec Symfony et React.",
            link: "https://todolist.antoinehuet.com",
        }
    }

    // function

    //render
    render() {
        return (
            <div className='main__projet'>
                <Card
                    image={this.state.imageTodoList} 
                    text={this.state.textTodoList} 
                    link={this.state.link}
                />
            </div> 
        )
    }
}

export default Projet;