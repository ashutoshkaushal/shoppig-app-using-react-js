import React, { Component } from "react";
import Axios from "axios";

export default class EditComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      port: "",
	  bname:"",
	  hname:"",
	  cname:""
    };
  }
  componentDidMount = e => {
    const id = this.props.match.params.id;
    console.log(id);
    Axios.get(`http://localhost:4200/getselectedproduct/${id}`).then(res => {
      res = res.data[0];
      this.setState({
        id: id,
        name: res.pro_name,
        port: res.phone
      });
    });
  };

  onChangeHostName = e => {
    this.setState({
      name: e.target.value
    });
  };
  
  
  onChangeIName = e => {
    this.setState({
      id: e.target.value
    });
  };
  onChangeBank = e => {
    this.setState({
      bname: e.target.value
    });
  };
  onChangeCard = e => {
    this.setState({
      cname: e.target.value
    });
  };
  
  onChangeHolderName = e => {
    this.setState({
      hname: e.target.value
    });
  };
  
  
  
  
  onChangePort = e => {
    this.setState({
      port: e.target.value
    });
  };
  onSubmit = e => {
    e.preventDefault();
    const serverPort = { ...this.state };
    const id = serverPort.id;
    Axios.post(`http://localhost:4200/payment`, serverPort).then(res =>
      console.log(res.data)
    );
    this.setState({
      name: "",
      port: ""
    });
  };
  render() {
    return (
      <div style={{ marginTop: 50 }}>
        <h3>Add New Server</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Product Id </label>
            <input
              type="text"
              value={this.state.id}
              className="form-control"
              onChange={this.onChangeIName}
            />
          </div>
		   <div className="form-group">
            <label>Product Name </label>
            <input
              type="text"
              value={this.state.name}
              className="form-control"
              onChange={this.onChangeHostName}
            />
          </div>
		  
		   <div className="form-group">
            <label>Bank </label>
            <input
              type="text"
              value={this.state.bname}
              className="form-control"
              onChange={this.onChangeBank}
            />
          </div>
		   <div className="form-group">
            <label>Account Holder Name </label>
            <input
              type="text"
              value={this.state.hname}
              className="form-control"
              onChange={this.onChangeHolderName}
            />
          </div>
		   <div className="form-group">
            <label>Card No/Atm/Debit/Credit </label>
            <input
              type="text"
              value={this.state.cname}
              className="form-control"
              onChange={this.onChangeCard}
            />
          </div>
		  
		  
		  
          <div className="form-group">
            <label>Amount </label>
            <input
              type="text"
              value={this.state.port}
              className="form-control"
              onChange={this.onChangePort}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Payment"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
