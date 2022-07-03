import React, { Component } from 'react';
import axios from 'axios';

class php extends Component {
constructor(props){
  super(props);
this.state={
  item:[],
  isloaded:false,
}}



  render() { 
    const{item , isloaded} = this.state;
    return (
      <>
      {item.map((raghad)=>
      <ul key={raghad.id}>
        <li>{raghad.name}</li>
        <li>{raghad.email}</li>
      </ul>
      )}
      </>
    );
  }
}

export default php;
