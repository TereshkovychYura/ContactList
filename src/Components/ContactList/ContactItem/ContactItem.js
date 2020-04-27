import React, { Component, Fragment } from "react";
import "./ContactItem.css";
import { Link } from "react-router-dom";

class ContactItem extends Component {
  state = {
    name: this.props.name,
    address: this.props.address,
    phone: this.props.phone,
    email: this.props.email,
    gender: this.props.gender,
    avatar: this.props.avatar,
    isFavorite: this.props.isFavorite,
  };

  onRandomAvatar = () => {
    const randomAvatar = Math.floor(Math.random() * Math.floor(99));
    console.log(randomAvatar);
    this.setState({
      avatar: randomAvatar,
    });
  };

  /*  onChangeFavorite = () => {
    this.setState({
      isFavorite: !this.state.isFavorite
    });
  }; */
  render() {
    const {
      name,
      address,
      phone,
      email,
      gender,
      avatar,
      isFavorite,
    } = this.state;
    const URL = `http://api.randomuser.me/portraits/${gender}/${avatar}.jpg`;

    let iconStyle = "fa fa-star-o fa-2x star";

    if (this.props.isFavorite) {
      iconStyle = "fa fa-star fa-2x star";
    }

    return (
      <Fragment>
        <li className="list-group-item">
          <div className="col-xs-12 col-sm-3">
            <img src={URL} alt={name} className="img-responsive img-circle" />
          </div>
          <div className="col-xs-12 col-sm-9">
            <span className="name">
              {name}
              <span>
                {" "}
                <i
                  id="icon"
                  className={iconStyle}
                  aria-hidden="true"
                  onClick={this.props.onFavoriteChange}
                ></i>
                <Link to={"/editcontact"}>
                  <i
                    className="fa fa-pencil-square-o fa-2x edit"
                    aria-hidden="true"
                    onClick={this.props.onEditContact}
                  ></i>
                </Link>
                <i
                  className="fa fa-trash-o fa-2x trash"
                  aria-hidden="true"
                  onClick={this.props.onDeleteContact}
                ></i>
              </span>
            </span>

            <br />
            <span
              className="glyphicon glyphicon-map-marker text-muted c-info"
              data-toggle="tooltip"
              title={address}
            ></span>
            <span>
              <span className="text-muted">{address}</span>
              <br />
            </span>
            <span
              className="glyphicon glyphicon-earphone text-muted c-info"
              data-toggle="tooltip"
              title={phone}
            ></span>
            <span>
              <span className="text-muted">{phone}</span>
              <br />
            </span>
            <span
              className="fa fa-comments text-muted c-info"
              data-toggle="tooltip"
              title={email}
            ></span>
            <span>
              <span className="text-muted">{email}</span>
              <br />
            </span>
          </div>
          <div className="clearfix"></div>
          <button
            className="btn btn-warning btn-random"
            onClick={this.onRandomAvatar}
          >
            Random avatar
          </button>
        </li>
      </Fragment>
    );
  }
}

export default ContactItem;
