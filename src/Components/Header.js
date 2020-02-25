import React from 'react';
import './Style.css';
const Header = function(props){
   
    return(<>
        <div className="outer header-background" onScroll={()=>{props.onScroll(window.pageYOffset)}}>
            
            <div className="header-inner" >
            <h1 className="header-upper-h1">I'm</h1>
            <h1 className="header-lower-h1">Ayush Jain</h1>
        
            </div>
           
       
      
        </div>
        <a id="About"></a>
        </>
    );
}
export default Header;