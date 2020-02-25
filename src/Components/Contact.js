import React from 'react';
import './Style.css';
import Axios from 'axios';
export default class Contact extends React.Component{
    constructor(props){
        super(props);
        this.state={name:"",email:"",message:"",formSubmit:false, formMessage:"", fieldBlank:false};
    }
 
    submitForm(event){
        if(this.state.name=="" || this.state.email=="" || this.state.message==""){
            this.setState({...this.state,fieldBlank:true});
        }
        else
        {
        Axios.post('https://formcarry.com/s/lL7BcwIQ-2Z',{name:this.state.name,_replyto: this.state.email,
        Subject:"n/a",
        Message: this.state.message, }).then(()=>{
            this.setState({...this.state,formSubmit:false,formMessage:"Your message has been conveyed"});
            
        }).catch((err)=>{console.log(err);
            this.setState({...this.state,formSubmit:false, formMessage:"Some error occured"});
           
        });
        this.setState({...this.state,formSubmit:true,fieldBlank:false});}
    }
    render(){
       var spanClass=this.state.fieldBlank?"error":"form-success";
        var loading=<div class="sk-chase">
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
      </div>;
        return(
        
    <div class="outer contact-background">
       <div> <h2 class="about-heading">Get in Touch</h2>
       <h3 class="about-heading">Please fill the form below.</h3>
        <input type="text" placeholder="Name" onChange={(event)=>{this.setState({...this.state,name:event.target.value})}}/>
        <input type="email" placeholder="Email Id" onChange={(event)=>{this.setState({...this.state,email:event.target.value})}}/>
        <textarea cols="70" rows="5" placeholder="Message" onChange={(event)=>{this.setState({...this.state,message:event.target.value})}}/>
        <span class={spanClass}>{this.state.fieldBlank?"Please fill all the fields":this.state.formMessage}</span>
        <button onClick={this.state.formSubmit?()=>{}:this.submitForm.bind(this)}>{this.state.formSubmit?loading:"Submit"}</button>
        
        </div>
       
    </div>
    
    );
}
}