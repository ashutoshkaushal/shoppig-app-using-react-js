import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from "react-router-dom";

export default class Viewdonatror extends Component {
	
	constructor(props){
		
		super(props);
		this.state ={ post:[]};
	}
	
	
	componentDidMount(){
		
		Axios.get(`http://localhost:4200/getdonator`)
		.then(res => { 
		  // console.log(res);
		   if(res.status == 200){
			   this.setState({post:res.data});
		   }
		})
		.catch(err => console.log(err));
		
	}
	
	onDelete = e =>{
		//console.log("delete");
		e.preventDefault();
		const id = e.target.id;
		console.log(id);
		Axios.post(`http://localhost:4200/delete/${id}`).then(res => {
			console.log(res);
			
		});
	};


render(){
	return(
	   <div>
	     <table className="table">
		    <tr>
			   
				<th>NGo</th>
				<th>Donator</th>
				
				<th>Address</th>
				
				<th>Image</th>
			</tr>
			<tbody>
			{this.state.post.map((item, index) => {
				
				return(
				    <tr key={index}>
						<td>{item.ngo_name}</td>
						<td>{item.donator}</td>
						
						<td>{item.address}</td>
						<td><img src={item.image} height="100px" width="100px"/></td>
						
						
					</tr>
					);
			})}
			</tbody>
		</table>
	</div>
	);
    }				
			 	
}	

