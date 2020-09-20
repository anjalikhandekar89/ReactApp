import React, { Component } from 'react';
import ToDoApp from './components/todo/ToDoApp'
import './App.css';

class App extends Component{
  
  render()


{                
  return (
    //JSX COde//
    <div className="App">
      {/*<h1>My ToDo Application</h1>*/}
     
     <ToDoApp/> 


    </div>
  );
}
}
//class component



//class component




//how to create function component here by using function for third component //
 
/*
function FourthComponent(){

  return (
    <div className="FourthComponent">
      <h1>FourthComponent</h1>
    </div>
  );

}
function FifthComponent(){

  return (
    <div className="FifthComponent">
      <h1>FifthComponent</h1>
    </div>
  );


}
*/
/*
class learningComponents extends Component{

  render()


  {
    return (
      //JSX COde//
      <div className="learningComponents">
        <learningComponents></learningComponents>
        
  
  
      </div>
    );
  }

}
/*
//class component
class ThirdComponent extends Component{
  render()
  

{
  return (
    <div className="ThirdComponent">
      <h1>ThirdComponent</h1>
    </div>
  );
}
}
*/
export default ToDoApp;
