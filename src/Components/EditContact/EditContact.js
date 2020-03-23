import React from "react";

import "./EditContact.css";

class EditContact extends React.Component {
  state = {
    name: null,
    address: null,
    phone: null,
    avatar: null,
    email: null
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

  onSendEditedData = event => {
    event.preventDefault();
  };

  render() {
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
              defaultChecked
            />
            Men
            <br />
            <input id="women-radio" type="radio" name="gender" value="women" />
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
