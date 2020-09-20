import React, { Component } from 'react'
import './ShowInvalidCredentials'
import { ShowInvalidCredentials } from './ShowInvalidCredentials'
import './ShowLoginSuccessMessage'
import { ShowLoginSuccessMessage } from './ShowLoginSuccessMessage'

class TodoApp extends Component
{
    render()
 
    {
        return(
            <div className='ToDoApplication'>

                <LoginComponent/>
                <WelcomeComponent/>
                
                </div>
        )
    
    }



}
class WelcomeComponent extends Component{


    render()
    {
        return(

            <div>Welcomme anjali</div>
        )
    }
    
}    

class LoginComponent extends Component
{

    constructor(props)
    {
        super(props)
       
        this.state = {
            UserName: '28min',
            password:'',
            hasLoginFailed: false,
            showSuccessMessage: false,
            
        }
        // this.handleUserNameChange = this.handleUserNameChange.bind(this);
        // this.handlepasswordChange = this.handlepasswordChange.bind(this);
this.handleChange = this.handleChange.bind(this);

this.loginClicked = this.loginClicked.bind(this);
    }
//change event for all controlls//
    handleChange(event){
       // console.log(this.state);
        this.setState(

            {
                [event.target.name]
                :event.target.value
            }
       

// 
//HandleUsernameChange//
// handleUserNameChange(event)
// {
    // console.log(event.target.value);

// this.setState({UserName:event.target.value})


//Password to cahnge//


// handlepasswordChange(event)
// {
    // console.log(event.target.value);

// this.setState({password:event.target.value})
// }



)

}
loginClicked()
{
    if(this.state.UserName==='28min' && this.state.password==='dummy'
    ){
        console.log('successfull')

        this.setState({showSuccessMessage:true})
        this.setState({hasLoginFailed:false})
    }

    else
    {
        console.log('Failed')
        this.setState({showSuccessMessage:false})
        this.setState({hasLoginFailed:true})
    }
   

    
  //console.log(this.state)
}
  
  
  render()
    {

return(
       <div>  

{/*<ShowInvalidCredentials hasLoginFailed = {this.state.hasLoginFailed}/>*/}

    {this.state.hasLoginFailed && <div>Invalid Credentials</div>}
   {this.state.showSuccessMessage && <div>Login successfull</div>}



 {/*<ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/>*/}

 
             
              UserName: <input type="text" name="UserName" value={this.state.UserName} onChange={this.handleChange} id="1"/>

              Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} id="2"/>

        <button onClick={this.loginClicked} type="submit">Login</button>
          
         </div>

        );
}
}

function ShowInvalidCredentials(props)
{
    if(props.hasLoginFailed){
return <div>Invalid Credentials</div>

    }
    return null
}
function ShowLoginSuccessMessage(props)
{
    if(props.showSuccessMessage){
return <div>Login Succesfull</div>

    }
    return null
}



export default TodoApp;