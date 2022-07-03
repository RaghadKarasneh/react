import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
constructor(props){
  super(props);
this.state={
  item:[],
  isloaded:false,
}}

componentDidMount(){
  axios.get(`http://localhost/API/connection.php`)
  .then(res=>this.setState({item:res.data , isloaded:true}));
}

delete(id){
  axios.delete(`http://localhost/API/Delete/${id}`)
  .then (()=>{return axios.get(`http://localhost/API/Delete/${id}`)})}
  update(id){
    axios.update(`http://localhost/API/Update/${id}`)
    .then (()=>{return axios.get(`http://localhost/API/Update/${id}`)})
  }
  
  render() { 
    const{item , isloaded} = this.state;     console.log(this.state.item)
    return (   
      <>
   {/* Fetch Data */}
    {this.state.item.map(items=>{
      return(
              <h1>{items.name}</h1>
            )
        })
    }
      
      {/* <ul>
        <li>{JSON.stringify(item)}</li>

      </ul> */}
      
      </>
    );
  }
}

export default App;