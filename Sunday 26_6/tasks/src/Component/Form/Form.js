import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import HomePage from '../Home/Home';
import "./form.css";

class FormApp extends Component {
    constructor(props){
      super(props);
      this.state={
        InputEmail:"",
        InputPassword:"",
        isDisplay:true
      };
      this.handleEmailChange=this.handleEmailChange.bind(this);
      this.handlePasswordChange=this.handlePasswordChange.bind(this);
      this.handleSubmit=this.handleSubmit.bind(this);
    }
      handleEmailChange(event){
       this.setState({
        InputEmail:event.target.value
       });
          
        
    }
    handlePasswordChange(event){
      this.setState({
      InputPassword:event.target.value
    });
}
     handleSubmit(event){
      event.preventDefault();
      document.getElementById('emailH1').innerHTML=this.state.InputEmail;
      document.getElementById('passwordH1').innerHTML=this.state.InputPassword;
      this.setState({

      isDisplay:false });
      // ... submit to API or something
    };
    handleAbout(){
      
      window.location.href="../About"
    }
    handleHome(){
      
      window.location.href="../Home/Home"
    }
    render() { 
        return (
          <>
    <Form style={{display:this.state.isDisplay?'block':'none'}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email" className='input' onChange={this.handleEmailChange}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"  name="password" className='input' onChange={this.handlePasswordChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button className='container mt-5' onClick={this.handleSubmit} variant="primary" type="submit">
        Submit
      </Button>
      <h1 id="emailH1"> </h1>
      <h1 id="passwordH1"></h1>
    </Form>
    <HomePage email={this.state.InputEmail} password={this.state.InputPassword} />
    <Button className='container btn-danger' onClick={this.handleAbout} variant="primary" type="submit">
        About
      </Button>
      <Button className='container btn-danger' onClick={this.handleHome} variant="primary" type="submit">
        Home
      </Button>
    </>
  );
}

}
 
export default FormApp;