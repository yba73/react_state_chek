import React, { Component } from 'react'
import movies from './movies.jpg'

export default class Showb extends Component {
    state ={
      
        fullName : "BEN AZOUZ yassine",
        bio :'MY bio',
        imgSrc : <img className='animei' src={movies} alt="anime" />, 
         profession : 'Student' ,
   };
  render() {
    return (
      <div>
         <h1 style={{color : 'violet'}}>my name is {this.state.fullName} </h1>  <br />
         <h1 style={{color : 'green'}}>my bio is {this.state.bio}</h1>  <br />
          {this.state.imgSrc} <br />
         <h1 style={{color : 'blue'}}> my profession is "{this.state.profession}"</h1> 
      </div>
     
    )
  }
}
