import React, { Component } from 'react';
import axios from 'axios';
import ViewuserProduct from './ViewuserProduct';

import ViewProduct1 from './ViewProduct1';

import Donate from './Donate';
import { BrowserRouter as Router, Switch,Route,Link }from 'react-router-dom';

export default class CreateComponent extends Component {
	render(){
		return(
		<div>
		<h3>Welcome  To User </h3>
		<Router>
		   <div className="container">
		        <nav className="navbar navbar-default">
				    <ul>
					    
						<li><Link to={'/viewproduct'} className="nav-link">View Product</Link></li>
						
						
						
						
						<li><Link to={'/buyproduct'} className="nav-link">Buy Products</Link></li>
						
						
						
					</ul>
				
				
				
				</nav>
				<Switch>
				   
					<Route exact path='/viewproduct' component ={ViewuserProduct} />
					<Route exact path='/buyproduct' component ={ViewProduct1} />
					<Route exact path='/donate' component ={Donate} />
					
				</Switch>
		   </div>
		</Router>
		
		</div>
		
		)
	}
	
	
	
}