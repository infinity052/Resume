import React from 'react';
import './Style.css';
function project(path,heading,content){
   return( <div class="project-card">
    <div class="front"><img src={require("../Images/Experiences/"+path)} alt="Planes.jpg"/></div>
    <div class="back">
        <div class="details">
            <h2>{heading}
            </h2>
            <p>{content}
            </p>
        </div>
    </div>
    </div>);
}
const Experiences = function(){
    return (
        <div class="outer project-background">
            
            <h1 class="education-heading">Projects</h1>
            <div class="skill-container">
            {project("planes.jpg","Plane Fighter",`The project is a single-level ,single-player game created using Java Swing.
                        Consists of a shooting feature where the plane can shoot
                        bullets at the ufo's and eliminate them.`)};
            {project("sf2.jpg","Street Fighter 2",`The project is a mini clone of the world famous game Street Fighter 2 using Java Swing.
                    It contains stages of 8 players and can be played using only one single player.`)};
            {project("bill.jpg","Billing Software",`This project is a clone of the invoicing software used in Restaurants
                        to generate bills created in Java. It contains a 
                        connection to MySQL database for continous updation of inventory
                        on every order.`)};
            {project("classmarker.jpg","Classtest App",`This project is a mini clone of an online class test software created
                        using Javascript. It uses Google Firebase as a backend database to store 
                        tests. It contains different portals for teacher and student.`)};
            {project("usercrudphp.jpg","User CRUD",`The project is a simple userCRUD application created using PHP where users can 
                        register themselves and log into their accounts. It uses MySQL to store records
                        of users.`)};
            {project("tictactoe.jpg","TicTacToe",`The project is a basic tictactoe application created in React JS.
                        It was created just to grasp the complex concepts of React JS like
                        State management, Props and different types of Components.`)};
            {project("todolist.jpg","Todo List",`The project is a online Todo List created in React JS which is 
                        capable of saving the input tasks and retaining the information
                        on page refresh. It uses important concepts like State Management and 
                        Props in vivid detail.`)};
            {project("expense.jpg","Expense Tracker App",`The project is a simple mobile app created in Flutter by Google.
                         It can store the expenses input by the user and can show a graph of 
                         net weekly expenses by the user.`)};
               
            </div>
        </div>
    );
}
export default Experiences;