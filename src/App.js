
import './App.css';
import React, { Component } from 'react'

import Showb from './showb';

export default class App extends Component {
    state ={
      count : 0,
         show : false,
    }
  render() {
    return (
      <div>
   <button style={{color : 'red',fontWeight: 'bold' ,width : 100, height : 50}} onClick ={()=>this.setState({show:!this.state.show})}>SHOW</button>

  {this.state.show ? <Showb /> : null}
  <h1>Life cycle ={this.state.count}</h1>
      </div>
    )
  }
  componentDidMount() { setInterval(() => {
    this.setState({count:this.state.count+1})
  }, 1000); }

}

