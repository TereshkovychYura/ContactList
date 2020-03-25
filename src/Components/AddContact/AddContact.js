import React from "react";
import "./AddContact.css";
import { Redirect } from "react-router-dom";

class AddContact extends React.Component {
  state = {
    name: null,
    address: null,
    phone: null,
    avatar: null,
    email: null,
    gender: null,
    isFavorite: null,
    isRedirect: false
  };

  getName = event => {
    //console.log(event.target.value);
    this.setState({
      name: event.target.value
    });
  };

  getAddress = event => {
    //console.log(event.target.value);
    this.setState({
      address: event.target.value
    });
  };

  getPhone = event => {
    //console.log(event.target.value);
    this.setState({
      phone: event.target.value
    });
  };

  getAvatar = event => {
    //console.log(event.target.value);
    this.setState({
      avatar: event.target.value
    });
  };

  getEmail = event => {
    //console.log(event.target.value);
    this.setState({
      email: event.target.value
    });
  };

  getGender = event => {
    this.setState({
      gender: event.target.value
    });
  };

  getFavorite = event => {
    this.setState({
      isFavorite: event.target.checked
    });
  };

  onSendData = event => {
    event.preventDefault();
    /*  console.log(
      `Name: ${this.state.name}\nAdderss: ${this.state.address}\nPhone: ${this.state.phone}\nAvatar: ${this.state.avatar}\nEmail: ${this.state.email}`
    ); */
    const {
      name,
      address,
      phone,
      avatar,
      email,
      gender,
      isFavorite
    } = this.state;
    this.props.onAddContact(
      name,
      address,
      phone,
      avatar,
      email,
      gender,
      isFavorite
    );
    this.setState({
      isRedirect: true
    });
  };

  render() {
    if (this.state.isRedirect) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        {/*  {this.state.name}
        {this.state.address}
        {this.state.phone}
        {this.state.avatar}
        {this.state.email} */}
        <form onSubmit={this.onSendData}>
          <div className="form-group">
            <div className="form-group">
              <label forhtml="name">Name</label>
              <input
                type="text"
                className="form-control"
                onChange={this.getName}
              />
            </div>
            <div className="form-group">
              <label forhtml="Address">Address</label>
              <input
                type="text"
                className="form-control"
                onChange={this.getAddress}
              />
            </div>
            <div className="form-group">
              <label forhtml="Phone">Phone</label>
              <input
                type="tel"
                className="form-control"
                onChange={this.getPhone}
              />
            </div>
            <div className="form-group">
              <label forhtml="Avatar">Avatar</label>
              <input
                type="number"
                min="1"
                max="99"
                className="form-control"
                onChange={this.getAvatar}
              />
            </div>
            <label forhtml="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={this.getEmail}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group form-check">
            <input
              id="men-radio"
              type="radio"
              name="gender"
              value="men"
              onClick={this.getGender}
              defaultChecked
            />
            Men
            <br />
            <input
              id="women-radio"
              type="radio"
              name="gender"
              value="women"
              onClick={this.getGender}
            />
            Women
            <br />
            <br />
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
              onClick={this.getFavorite}
            />
            {" Add to favorite"}
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default AddContact;
