import React, { Component } from 'react';
import axios from 'axios';
import SwiftSlider from 'react-swift-slider'
import { BrowserRouter as Router, Switch,Route,Link }from 'react-router-dom';
const data =  [
  {'id':'1','src':'3.jpg'},
 
  {'id':'3','src':'sh.jpg'},
  {'id':'4','src':'https://media.mfbproject.co.za/repos/alfa-romeo-giulia-quadrifoglio-2017-us-wallpapers-and-hd-images-13.jpg'},
  {'id':'5','src':'https://media.mfbproject.co.za/repos/ARWP_Infra_Desk_1920_1080_Quad.png'}
];
export default class HomeComponent extends Component {
	render(){
		return(
		<div>
		<SwiftSlider data={data}/>
		<div  className="container-fluid">
		<div className="container">
		
		<div className="row">
		
		</div>
		</div>
		
		
		
<div className="row">

<div  className="col-sm-3">
<img  src={'pic6.jpeg'}  className="img-responsive"  id="img-rounded"/><br/>

<button className="btn btn-info btn-lg">ADD To CART</button>

</div>

<div  className="col-sm-3 ">
<img  src={'pic7.jpeg'}  className="img-responsive" />
<br/><br />

<button className="btn btn-info btn-lg">ADD To CART</button>

</div>

<div  className="col-sm-3 ">
<img  src={'pic4.jpeg'}  className="img-responsive img-thumbnail"  id="img-rounded"/>
<br/>
<br/>
<button className="btn btn-info btn-lg">ADD To CART</button>


</div>

<div  className="col-sm-3">
<img  src={'pic8.jpeg'}  className="img-responsive"  id="img-rounded"/>
<br/>

<button className="btn btn-info btn-lg">ADD To CART</button>


</div>

		</div>
		<br/><br/>
		
		<div className="row">

<div  className="col-sm-3">
<img  src={'pic3.jpeg'}  className="img-responsive"  id="img-rounded"/>

</div>

<div  className="col-sm-3 ">
<img  src={'pic4.jpeg'}  className="img-responsive" />

</div>

<div  className="col-sm-3 ">
<img  src={'pic2.jpeg'}  className="img-responsive img-thumbnail"  id="img-rounded"/>

</div>

<div  className="col-sm-3">
<img  src={'pic9.jpeg'}  className="img-responsive"  id="img-rounded"/>

</div>

		</div>
		
		
		
		
		
		</div></div>
		
		)
	}
	
	
	
}