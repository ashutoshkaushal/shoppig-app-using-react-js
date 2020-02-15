import React from "react";

export default class AddProduct extends React.Component {
  constructor() {
    super();
    this.state = {
      pro_name: "",
      details: "",
	  psw:"",
	  phone:""
    };
  }
  onChangeProName = e => {
    e.preventDefault();
    this.setState({
      pro_name: e.target.value
    });
  };
  
  onChangePhone = e => {
    e.preventDefault();
    this.setState({
      phone: e.target.value
    });
  }; 
  
   onChangePsw = e => {
    e.preventDefault();
    this.setState({
      psw: e.target.value
    });
  }; 
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  onChangeDetails = e => {
    e.preventDefault();
    this.setState({
      details: e.target.value
    });
  };
  onSubmit = e => {
    e.preventDefault();
    const data = new FormData();
    data.append("image", this.uploadInput.files[0]);
    data.append("pro_name", this.state.pro_name);
    data.append("details", this.state.details);
	data.append("phone",this.state.phone);
	data.append("psw",this.state.psw);
    const time = Date.now();
    data.append("time", time);
    fetch("http://localhost:4200/productinsert", {
      method: "POST",
      body: data
    }).then(response => console.log(response));
    this.setState({
      pro_name: "",
      details: ""
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
         Product Name:
          <input  className="form-control"
            type="text"
            name="pro_name"
            value={this.state.pro_name}
            onChange={this.onChangeProName}
          />
          <br />
		  No Of quantity
		   <input  className="form-control"
            type="text"
            name="pro_name"
            value={this.state.psw}
            onChange={this.onChangePsw}
          />
          <br />
		  Price
		   <input  className="form-control"
            type="text"
            name="phone"
            value={this.state.phone}
            onChange={this.onChangePhone}
          />
          <br />
		  
		  
          Description
          <textarea
            type="text"   className="form-control"
            name="details"
            value={this.state.details}
            onChange={this.onChangeDetails}
          />
		  ProductImage:
          <input   className="form-control"
            type="file"
            name="image"
            ref={ref => {
              this.uploadInput = ref;
            }}
          />
          <br />
          <input type="submit" value="Add Product"  className="btn btn-info btn-lg btn-block" />
        </form>
      </div>
    );
  }
}
