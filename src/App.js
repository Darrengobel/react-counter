import React, { Component } from 'react';
import Button from './Button';
import './App.css';
export default class App extends Component {

constructor(props){
  super();
  this.state= {
    count:0
  }
}

incrementCounter= () => {
  this.setState({
    count:this.state.count+1
  })
}

decrementCounter= () => {
  this.setState({
    count:this.state.count-1
  })
}

render() {
  let { count } =this.state
  return (
    <div className= "btn">
      <h2 className="count">Count: { count } </h2>
      <Button className="btnplus"
        title = { "+" }
        task = { this.incrementCounter }
      />
      <Button className="btnminus"
        title = { "-" }
        task = { this.decrementCounter }
      />
     </div>
  );
}

}