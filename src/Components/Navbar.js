import React from 'react';
import './Style.css';
import About from './About';
export default class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.state={show: false, barsClicked:true};
    }
    componentDidMount(){
        window.addEventListener('scroll',()=>{if(window.pageYOffset>150 && this.state.show===true){
            this.setState({show:false});
        }
        else if(window.pageYOffset<150 && this.state.show===false){
            this.setState({show:true});
        }
        
    });
    
    }
    verticalNav(){
        this.setState({...this.state,barsClicked:!this.state.barsClicked})
    }
    render(){
        var cls=this.state.show?"navbar":"navbar show";
        var sidebar=this.state.barsClicked?"sidebar hideside":"sidebar";
        
    return(
        
        <div class={cls}>
            <div class="bars" style={this.state.barsClicked?{}:{transform:"translateX(50vw)"}} onClick={this.verticalNav.bind(this)}><div></div><div></div><div></div></div>
            <div class={sidebar}>
            
            <a href="#Home" onClick={this.verticalNav.bind(this)}>Home</a>
            <a href="#About" onClick={this.verticalNav.bind(this)}>About</a>
            <a href="#Education" onClick={this.verticalNav.bind(this)}>Education</a>
            <a href="#Skills" onClick={this.verticalNav.bind(this)}>Skills</a>
            <a href="#Projects" onClick={this.verticalNav.bind(this)}>Projects</a>
            <a href="#Experiences" onClick={this.verticalNav.bind(this)}>Experiences</a>
            <a href="#Contact" onClick={this.verticalNav.bind(this)}>Contact</a>
        </div></div>
    );
}
}