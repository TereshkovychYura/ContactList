import React from "react";
import uuid from "react-uuid";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";

// Components
import ContactList from "./Components/ContactList/ContactList";
import AddContact from "./Components/AddContact/AddContact";
import Header from "./Components/Header/Header";
import NotFound from "./Components/NotFound/NotFound";
import EditContact from "./Components/EditContact/EditContact";

class App extends React.Component {
  URL = "https://my-db-f6af5.firebaseio.com/list.json"; // URL to firebase

  state = {
    List: [],
    currentContact: "",
    findContact: "",
    currency: "",
  };

  updateContactList = () => {
    fetch(this.URL, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          List: data,
        });
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.updateContactList();
  }

  onFavoriteChange = (id) => {
    const index = this.state.List.findIndex((elem) => elem.id === id);
    let tempList = this.state.List.slice();
    tempList[index].isFavorite = !tempList[index].isFavorite;
    this.setState((state) => {
      return {
        isFavorite: !this.tempList,
      };
    });
  };

  async saveNewContact(newList) {
    await fetch(this.URL, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newList),
    })
      .then(function (res) {
        console.log(res);
      })
      .catch(function (res) {
        console.log(res);
      });
    this.updateContactList();
  }

  onAddContact = (name, address, phone, avatar, email, gender, isFavorite) => {
    /*  console.log(
      `Name: ${name}\nAdderss: ${address}\nPhone: ${phone}\nAvatar: ${avatar}\nEmail: ${email}\nGender: ${gender}\nIsFavorite: ${isFavorite}`
    ); */
    const newContact = {
      id: uuid(),
      name: name,
      address: address,
      phone: phone,
      email: email,
      gender: gender,
      avatar: avatar,
      isFavorite: isFavorite,
    };
    const newList = [...this.state.List, newContact];
    this.saveNewContact(newList);
  };

  onEditContact = (id) => {
    const index = this.state.List.findIndex((elem) => elem.id === id);
    const currentContact = this.state.List[index];
    this.setState({
      currentContact: currentContact,
    });
  };

  onEditCurrentContact = (
    id,
    name,
    address,
    phone,
    avatar,
    email,
    gender,
    isFavorite
  ) => {
    const editedContact = {
      id: id,
      name: name,
      address: address,
      phone: phone,
      email: email,
      gender: gender,
      avatar: avatar,
      isFavorite: isFavorite,
    };
    const index = this.state.List.findIndex((elem) => elem.id === id);
    const partOne = this.state.List.slice(0, index);
    const partTwo = this.state.List.slice(index + 1);
    const newList = [...partOne, editedContact, ...partTwo];
    this.setState({
      List: newList,
    });
    this.saveNewContact(newList);
  };

  onDeleteContact = (id) => {
    const index = this.state.List.findIndex((elem) => elem.id === id);
    const partOne = this.state.List.slice(0, index);
    const partTwo = this.state.List.slice(index + 1);
    const newList = [...partOne, ...partTwo];
    this.saveNewContact(newList);
  };

  onSearch = (contactName) => {
    /*    console.log("Contact Name =>", contactName); */
    this.setState({
      findContact: contactName,
    });
  };

  onShowContact = (items, searchValue) => {
    // console.log("Start items => ", items, "\nSearchValue => ", searchValue);
    if (searchValue.length === 0) {
      return items;
    }
    return items.filter((item) => {
      // console.log("item => ", item.name);

      return item.name.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
    });
  };

  render() {
    const showContacts = this.onShowContact(
      this.state.List,
      this.state.findContact
    );
    return (
      <div className="container">
        <div className="row">
          <Router>
            <Header onSearch={this.onSearch} />
            <Switch>
              <Route
                path="/"
                exact
                render={() => (
                  <ContactList
                    List={showContacts}
                    onFavoriteChange={this.onFavoriteChange}
                    onDeleteContact={this.onDeleteContact}
                    onEditContact={this.onEditContact}
                  />
                )}
              />
              <Route
                path="/addcontact"
                exact
                render={() => <AddContact onAddContact={this.onAddContact} />}
              />
              <Route
                path="/editcontact"
                render={() => (
                  <EditContact
                    currentContact={this.state.currentContact}
                    onEditCurrentContact={this.onEditCurrentContact}
                  />
                )}
              />
              <Route path="*" component={NotFound} />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
