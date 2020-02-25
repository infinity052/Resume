import React from 'react';
import './Style.css';
function skillComp(percent,skill){
    return (<div class="skill-card">
    <div class="skill-box">
        <div class="skill-percent">
            <svg>
                <circle cx="40" cy="39.9" r="42.3"></circle>
                <circle cx="40" cy="39.9" r="42.3"></circle>
            </svg>
            <div class="number">
                <h2>{percent}<span>%</span></h2>
            </div>
        </div>
<h2 class="text">{skill}</h2>
    </div>
</div>);
}
const Skills = function(){
    return (
        <div class="outer skills-background">
            
            <h1 class="education-heading">Skills</h1>
            <div class="skill-container">
                {skillComp("75","HTML")};
                {skillComp("70","CSS")};
                {skillComp("90","JavaScript")};
                {skillComp("60","PHP")};
                {skillComp("80","C++")};
                {skillComp("90","Java")};
                {skillComp("90","React JS")};
                {skillComp("80","MySQL")}
            </div>
            <a id="Projects"></a>
        </div>
    );
}
export default Skills;