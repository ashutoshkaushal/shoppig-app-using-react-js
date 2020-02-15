import React from "react";

export default class Donate extends React.Component {
  constructor() {
    super();
    this.state = {
      pro_name: "",
      details: "",
	  psw:"",
	  phone:"",
	  ccno:"",
	  bank:""
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
  
  
  onChangeCcno = e => {
    e.preventDefault();
    this.setState({
      ccno: e.target.value
    });
  }; 
  
  
   onChangeBank = e => {
    e.preventDefault();
    this.setState({
      bank: e.target.value
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
	
	data.append("bank",this.state.bank);
	
	data.append("ccno",this.state.ccno);
    const time = Date.now();
    data.append("time", time);
    fetch("http://localhost:4200/donate", {
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
         NGO Name:
          <input  className="form-control"
            type="text"
            name="pro_name"
            value={this.state.pro_name}
            onChange={this.onChangeProName}
          />
          <br />
		 Donator
		   <input  className="form-control"
            type="text"
            name="pro_name"
            value={this.state.psw}
            onChange={this.onChangePsw}
          />
          <br />
		  Amount
		   <input  className="form-control"
            type="text"
            name="phone"
            value={this.state.phone}
            onChange={this.onChangePhone}
          />
          <br />
		  
		 Bank Name
		   <input  className="form-control"
            type="text"
            name="phone"
            value={this.state.bank}
            onChange={this.onChangeBank}
          />
          <br /> 
		  
		  
		 CCNo/Pinno
		   <input  className="form-control"
            type="text"
            name="phone"
            value={this.state.ccno}
            onChange={this.onChangeCcno}
          />
          <br /> 
		  
		  
		  
          Address
          <textarea
            type="text"   className="form-control"
            name="details"
            value={this.state.details}
            onChange={this.onChangeDetails}
          />
		  Image:
          <input   className="form-control"
            type="file"
            name="image"
            ref={ref => {
              this.uploadInput = ref;
            }}
          />
          <br />
          <input type="submit" value="Donate "  className="btn btn-info btn-lg btn-block" />
        </form>
      </div>
    );
  }
}
