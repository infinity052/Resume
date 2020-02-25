import React from 'react';
const About=()=>{
return (
    
    <div class="outer about-background">
        
        <h1 className="about-heading">About Me</h1>
        
            <img src={require('../Images/about.jpeg')} className="profile-pic" alt=""/>
            
            <p>
                <br/>"I am a fresher currently pursuing B.tech from Maharaja Surajmal Institute of Technology. I am a certified MERN Stack Web Developer and capable of developing flawless websites with the utmost precision. I am a hardworking professional with a "NEVER QUIT" attitude. I am also the kind of person who is courageous enough to dream big and has the potential to chase that dream no matter what the cost. The only thing that drives me and makes me get up in the morning is my persistent will to make sure that my tomorrow will be better than my yesterday through constant hard work."

            </p>
            <a id="Education"></a>
    </div>
);

}
export default About;