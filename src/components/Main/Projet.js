import React from "react";
import './projet.css';
import ProjectCard from "../Card/ProjectCard";

class Projet extends React.Component {
    // properties
    constructor(props) {
        super(props);
        this.state = {
            // projet todolist
            titleTodoList: "TodoList",
            imageTodoList: "./images/Todolist.com.png",
            textTodoList : "Une TodoList développé avec Symfony et React.",
            linkTodoList : "https://todolist.antoinehuet.com",
            altTodoList : "Projet Todolist",
        }
    }

    // function

    //render
    render() {
        return (
            <div className='main__projet'>
                <ProjectCard
                    title={this.state.titleTodoList}
                    image={this.state.imageTodoList} 
                    text={this.state.textTodoList} 
                    link={this.state.linkTodoList}
                    alt={this.state.altTodoList}
                />
            </div> 
        )
    }
}

export default Projet;