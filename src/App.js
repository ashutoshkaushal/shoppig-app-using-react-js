import React, { Component } from 'react';
import { BrowserRouter as Router, Switch,Route,Link }from 'react-router-dom';
import  LoginComponent from './component/LoginComponent';
import WelcomeComponent from './component/WelcomeComponent';
import AdminComponent from './component/AdminComponent';

import About from './component/About';

import HomeComponent from './component/HomeComponent';
import Contact from './component/Contact';
import Signup from './component/Signup';

import EditComponent from './component/EditComponent';

import Help from './component/Help';


const divStyle = {

  margin: '-7px',

  
};

const footer={
  backgroundColor:'black',
  height:'200px',
  color:'white',
  clear:'both'
  };

class App extends Component{
	
	render(){
		return(
		   <Router>
		    <div className= "container">
			
			<div  className="jumbotron">
			<div  className="row">
			
			<div  className="col-sm-2">
			<img  src={'logo1.jpg'}  className="img-responsive"  id="img-rounded"/>

			
			</div>
			
			
			<div  className="col-sm-9">
			<h1>E-Shopping</h1></div>
			</div>
			
			
		
			<div  className="container">
			
			<div  className="row">
			
			<div  className="col-md-12">
			<div style={divStyle} >
			    <nav className="navbar navbar-default">
					<ul className="nav navbar-nav">
					
					<li className="nav-item">
						   <Link to={'/'} className="nav-link">Home</Link> 
						</li>
						<li className="nav-item">
						   <Link to={'/login'} className="nav-link">Login</Link> 
						</li>
						
						<li className="nav-item">
						   <Link to={'/about'} className="nav-link">About</Link> 
						</li>
						
						<li className="nav-item">
						   <Link to={'/signup'} className="nav-link">Signup</Link> 
						</li>
						<li className="nav-item">
						   <Link to={'/contact'} className="nav-link">Contact us</Link> 
						</li>
						<li className="nav-item">
						   <Link to={'/help'} className="nav-link">Help</Link> 
						</li>
						<li className="nav-item">
						   <Link to={'/logout'} className="nav-link">Logout</Link> 
						</li>
						
						
					</ul>
				</nav>
				</div></div></div></div>
				
				
				<Switch>
				<Route exact path='/' component={HomeComponent} />
				    <Route exact path='/login' component={LoginComponent} />
					<Route exact path='/welcome' component={WelcomeComponent} />
					<Route exact path='/admin' component={AdminComponent} />
					<Route exact path='/about' component={About} />
					<Route exact path='/contact' component={Contact} />
					
					<Route exact path='/signup' component={Signup} />
					<Route exact path='/help' component={Help} />
					
					<Route exact path='/logout' component={HomeComponent} />
					
					<Route exact path="/edit/:id" component={EditComponent} />
					
					
					
					
					
					
				</Switch>
			<div  style={footer}>
				
				<h3>copyright &copy 2018-2019 @ngowebsite</h3>
				
				
				</div>	
			</div>
			</div>
		
		   </Router>
		);
	}
}
export default App;