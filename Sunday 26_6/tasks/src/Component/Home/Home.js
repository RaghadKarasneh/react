import React, { Component } from 'react';
import NavbarFun from '../../Navbar';
import FormApp from '../Form/Form';
class HomePage extends Component {
    
    render() { 
        return (
            <div>
                <h1>Home</h1>
                {/* <FormApp email={this.props.InputEmail} password={this.props.InputPassword} /> */}
                <h1>{this.props.email}</h1>
                <h1>{this.props.password}</h1>
            </div>
        );
    }
}
 
export default HomePage;