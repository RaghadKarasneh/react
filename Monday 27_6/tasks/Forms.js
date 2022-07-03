import React, { Component } from 'react';

import Data from "./Data";





  class Forms  extends Component {
    constructor(props){
      super(props);
      this.state={
        email:"",
        uname:"",
        phone:"",
        isDisplay:true
      };
      this.handleEmailChange=this.handleEmailChange.bind(this);
      this.handleNameChange=this.handleNameChange.bind(this);
      this.handlePhoneChange=this.handlePhoneChange.bind(this);
      this.handleSubmit=this.handleSubmit.bind(this);
    }
      handleEmailChange(event){
       this.setState({
        email:event.target.value
       });
          
        
    }
    handleNameChange(event){
      this.setState({
      uname:event.target.value
    });
}
handlePhoneChange(event){
  this.setState({
  phone:event.target.value
});
}
     handleSubmit(event){
      event.preventDefault();
   
      this.setState({

      isDisplay:false });
      // ... submit to API or something
    };
    render() { 
      return (
        <div className="login-box">
  <h2 style={{display:this.state.isDisplay?'block':'none'}}>Form</h2>
  <form  style={{display:this.state.isDisplay?'block':'none'}}>
    <div className="user-box">
      <input type="text" name="" required="" onChange={this.handleNameChange}/>
      <label>Name</label>
    </div>
    <div className="user-box">
      <input type="email" name="" required="" onChange={this.handleEmailChange}/>
      <label>Email</label>
    </div>
    <div className="user-box">
      <input type="number" name="" required="" onChange={this.handlePhoneChange}/>
      <label>Phone Number</label>
    </div>
    <a href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <button onClick={this.handleSubmit}>Print</button>
      {/* <h1 id="emailH1"> </h1>
      <h1 id="passwordH1"></h1>
      <h1 id="passwordH11"></h1> */}
    
    </a>
  </form>
  <div style={{display:this.state.isDisplay?'none':'block'}}>
  <Data email={this.state.email} name={this.state.uname}  phone={this.state.phone}/>
  </div>
</div>
      );
    }
  }
   
  export default Forms ;