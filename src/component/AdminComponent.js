import React,{Component} from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch,Route,Link }from 'react-router-dom';
import AddProduct from './AddProduct';
import ViewProduct from './ViewProduct';
import Viewuser from './Viewuser';
import Viewdonator from './Viewdonator';


export default class AdminComponent extends Component{
	
	constructor(props){
		super(props);
	}
	render(){
		return(
		<div>
		<h3>Admin Page</h3>
		<Router>
		   <div className="container">
		        <nav className="navbar navbar-default">
				    <ul>
					    <li className="nav-item">
						    <Link to={'/addproduct'} className="nav-link">Add Product</Link>
							
						</li>
						<li><Link to={'/viewproduct'} className="nav-link">View Product</Link></li>
						
						<li><Link to={'/viewuser'} className="nav-link">View User</Link></li>
					<li><Link to={'/viewdonator'} className="nav-link">View  Most Poular Products</Link></li>	
						
						
					</ul>
				
				
				
				</nav>
				<Switch>
				    <Route exact path='/addproduct' component ={AddProduct} />
					<Route exact path='/viewproduct' component ={ViewProduct} />
					
					<Route exact path='/viewuser' component ={Viewuser} />
					
					<Route exact path='/viewdonator' component ={Viewdonator} />
					
				</Switch>
		   </div>
		</Router>
		
		</div>
		
		)
	}
	
	
	
}