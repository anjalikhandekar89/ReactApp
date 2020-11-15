import { render } from '@testing-library/react'
import React, { Component } from 'react'

import {BrowserRouter as Router, Link, Route, Switch,} from 'react-router-dom' 



class TodoApp extends Component
{
    render()
 
    {
        return(
            <div className='ToDoApplication'>


                <Router>
               
                    <>
                    <HeaderComponent/>
                    <Switch>
                            <Route path="/" exact component={LoginComponent}/>
                            <Route path="/login" component={LoginComponent}/>
                            <Route path="/welcome/:name" component={WelcomeComponent}/>
                            <Route path="/todos" component={ListTodosComponent}/>
                            <Route path="/logout" component={LogoutComponent}/>
                            <Route  component={ErrorComponent}/>
                    </Switch>
                    <FooterComponent/>
                        
                   </>      

                    
                    </Router>

                {/*<LoginComponent/>}
                //<WelcomeComponent/>*/}
                
                </div>
        )
    
    }



}



class ListTodosComponent extends Component{

    constructor(props)
    {
        super(props)
        this.state = {
           
           
            todo :
            [ 
                {id :1 ,description : 'Learn React',done:false,targetDate: new Date()}, 
                {id :2 ,description : 'expert in React',done:false,targetDate: new Date()} ,
                {id :3 ,description : 'Functionality React',done:false,targetDate: new Date()}, 
                {id :4 ,description : 'Learn React',done:false,targetDate: new Date()} ,
                {id :5 ,description : 'Learn React',done:false,targetDate: new Date()} ,
            ]
  
        
        
    }
}


    render()
    {
        return(

       <div>
           <h1>List ToDos</h1>
                    <table>

                        <thead>
                            <tr>
                                <th>id</th>
                                <th>description</th>
                                <th>Target Date</th>
                                <th>Is completed?</th>
                        

                                </tr>
                            </thead>
                            
                               <tbody>

                                    {
                                    this.state.todo.map(

                                                todo =>
                                        
                                                <tr>
                                                    <td>{todo.id}</td>
                                                    <td>{todo.description}</td>
                                                    <td>{todo.done.toString()}</td>
                                                    <td>{todo.targetDate.toString()}</td>
                                                </tr>
                                                )
                                    }
        
                                    </tbody>
                                    
                        </table>
                      
            </div>
           
            )
        }
          
        
    }   
    
    

    class HeaderComponent extends Component{


        render()
        {
            return(
    <header>
<nav className="navbar navbar-expand-md navbar-dark bg-dark">
<div><a href="http://www.w3school.com">28 min</a></div>
<ul className="navbar-nav">
     <li><Link className="nav-link" to="/welcome/28min">Home</Link></li>
     <li><Link className="nav-link" to="/todos">Todos</Link></li>
</ul>
<ul className="navbar-nav navbar-collapse justify-content-end">
     <li><Link className="nav-link" to="/login">Login</Link></li>
     <li><Link className="nav-link" to="/logout">Logout</Link></li>



</ul>

    </nav>

        </header>
           
            )
        }
        
    } 





class FooterComponent extends Component{


        render()
        {
            return(
    

<footer className="footer">

<span className="text-muted">All Right Reserved 2020 </span>

</footer>

            )
        }
        
    } 


    class LogoutComponent extends Component{


        render()
        {
            return(
    
           <>

               <h1>You are Logged Out!!!!</h1>
               <div className="container">
                   <h1>Thank You for Using Our Application</h1>
                </div>
                   
            </>
            )
        }
        
    } 

class WelcomeComponent extends Component{


    render()
    {
        return(

       <div>Welcome {this.props.match.params.UserName}.you can manage your to do <Link href="/todos">here</Link>
   </div>
        )
    }
    
} 





function ErrorComponent()
{
return <div>An Error Occured.I don't know what to do! Contact support at assdd</div>
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
        this.props.history.push('/welcome/${this.state.name}')

        // this.setState({showSuccessMessage:true})
        // this.setState({hasLoginFailed:false})
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
           <h1>Login</h1>
           <div className="container">
               </div>

{/*<ShowInvalidCredentials hasLoginFailed = {this.state.hasLoginFailed}/>*/}

    {this.state.hasLoginFailed && <div className="container">Invalid Credentials</div>}
   {this.state.showSuccessMessage && <div>Login successfull</div>}

{/*<ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/>*/}

  <h1 style={{color: "black",padding: '50',width:'100%',fontSize:50,backgroundColor:'pink' }}> UserName:</h1> <input type ="text" name="UserName" value={this.state.UserName} onChange={this.handleChange} id="1"/>

  <h1 style={{color: "black",padding: '10',width:'100%',fontSize:50,backgroundColor:'pink' }}> Password:</h1> <input type="password" name="password" value={this.state.password} onChange={this.handleChange} id="2"/>

        <button  onClick={this.loginClicked} type="submit"><h1>Login</h1></button>
          
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