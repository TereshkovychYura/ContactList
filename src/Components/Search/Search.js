import React from "react";
import "./Search.css";

class Search extends React.Component {
  state = {
    search: ""
  };

  onSearch = event => {
    const value = event.target.value;
    this.setState({
      search: value
    });
    this.props.onSearch(value);
  };

  render() {
    return (
      <div className="navbar-form navbar-right">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            onChange={this.onSearch}
          />
        </div>
        {/*  <button type="submit" className="btn btn-default">
          Submit
        </button> */}
      </div>
    );
  }
}

export default Search;
