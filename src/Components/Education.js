import React from 'react';
import './Style.css';
function box(heading,content,hideLine){
    return(
        <div class="component">
                <div class="card">
    <h2 class="h2">{heading}</h2>
                    <h3 class="h3">{content}
                    </h3>
                </div>
                <div></div>
                <div className={hideLine?"noLine":""}></div>
                
            </div>
 );
}
const Education =()=>{
    return(
        <div className="outer education-background">
            
            <h1 className="education-heading">Education</h1>
            <div class="main-container">
               
                {box("2020","Completed MERN Stack web development course from Brain Mentors Pvt. Ltd.",false)};
                {box("2019","Completed Core Java course",false)};
                {box("2018","Completed Web Design course from Freecodecamp and Php from udemy",false)};
                {box("2016","Passed class 12th from Mount Abu Public School",false)};\
                
                {box("2014","Passed class 10th from Mount Abu Public School",true)};
                     <a id="Skills"></a>
            
          
            </div>
            
        </div>
    );

}
export default Education;