import React from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import "./EditContact.css";

class EditContact extends React.Component {
  state = {
    id: this.props.currentContact.id,
    name: this.props.currentContact.name,
    address: this.props.currentContact.address,
    phone: this.props.currentContact.phone,
    avatar: this.props.currentContact.avatar,
    email: this.props.currentContact.email,
    gender: this.props.currentContact.gender,
    isFavorite: this.props.currentContact.isFavorite,
    isSended: false
  };

  getName = event => {
    this.setState({
      name: event.target.value
    });
  };

  getAddress = event => {
    this.setState({
      address: event.target.value
    });
  };

  getPhone = event => {
    this.setState({
      phone: event.target.value
    });
  };

  getAvatar = event => {
    this.setState({
      avatar: event.target.value
    });
  };

  getEmail = event => {
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
    const {
      id,
      name,
      address,
      phone,
      email,
      gender,
      avatar,
      isFavorite
    } = this.state;
    this.props.onEditCurrentContact(
      id,
      name,
      address,
      phone,
      avatar,
      email,
      gender,
      isFavorite
    );
    this.setState({
      isSended: true
    });
  };

  render() {
    const {
      name,
      address,
      phone,
      email,
      gender,
      avatar,
      isFavorite,
      isSended
    } = this.state;
    if (isSended) {
      return <Redirect to="/" />;
    }
    if (gender === "men") {
      document.getElementById("men").setAttribute.checked = true;
    } else {
      document.getElementById("women").setAttribute.checked = true;
    }
    return (
      <div>
        <form onSubmit={this.onSendData}>
          <div className="form-group">
            <div className="form-group">
              <label forhtml="name">Name</label>
              <input
                type="text"
                className="form-control"
                onChange={this.getName}
                value={name}
              />
            </div>
            <div className="form-group">
              <label forhtml="Address">Address</label>
              <input
                type="text"
                className="form-control"
                onChange={this.getAddress}
                value={address}
              />
            </div>
            <div className="form-group">
              <label forhtml="Phone">Phone</label>
              <input
                type="tel"
                className="form-control"
                onChange={this.getPhone}
                value={phone}
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
                value={avatar}
              />
            </div>
            <label forhtml="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={this.getEmail}
              value={email}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group form-check">
            <input id="men" type="radio" name="gender" value="men" />
            Men
            <br />
            <input id="women" type="radio" name="gender" value="women" />
            Women
            <br />
            <br />
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />{" "}
            Add to favorite
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default EditContact;
