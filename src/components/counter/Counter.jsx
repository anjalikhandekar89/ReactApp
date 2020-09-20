

import React, { Component } from 'react';
import './Counter.css';


class Counter extends Component(){

//Define initial state in constructor//
//state=> counetr 0


constructor()
{
    super();
this.state={

    counetr: 0,
    SecondCounter: 100

}
this.increment = this.increment.bind(this);

}
    render()
    {

    
    return (
      <div className="counter">
        <button onClick={this.state.Counter}>+1</button>
        <span className="count">0</span>
      </div>
    )
    }

    increment() //Update state//---counter++
  {
      //console.log('increment');
      this.state.Counter++;
      this.setState
      ({
          state:this.state.counter + 1
      })
  }

  
  }
 

  export default Counter ;