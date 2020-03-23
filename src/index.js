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
  state = {
    List: [
      {
        id: uuid(),
        name: "Scott Stevens",
        adress: "5842 Hillcrest Rd",
        phone: "(870) 288-4149",
        email: "scott.stevens@example.com",
        gender: "men",
        avatar: 47,
        isFavorite: false
      },
      {
        id: uuid(),
        name: "Bob Marley",
        adress: "3222 Brighton Br",
        phone: "(068) 672-6732",
        email: "bob.marley@example.com",
        gender: "men",
        avatar: 5,
        isFavorite: true
      },
      {
        id: uuid(),
        name: "Linus Torvalds",
        adress: "5842 Vidinska Str",
        phone: "(098) 675-2345",
        email: "linus.torvalds@example.com",
        gender: "men",
        avatar: 32,
        isFavorite: false
      },
      {
        id: uuid(),
        name: "Marie Curie",
        adress: "5842 Psheprasha Vul",
        phone: "(098) 675-2345",
        email: "maria.radium@example.com",
        gender: "women",
        avatar: 32,
        isFavorite: false
      }
    ]
  };

  onFavoriteChange = id => {
    const index = this.state.List.findIndex(elem => elem.id === id);
    let tempList = this.state.List.slice();
    tempList[index].isFavorite = !tempList[index].isFavorite;
    this.setState(state => {
      return {
        isFavorite: !this.tempList
      };
    });
  };

  onAddContact = (name, address, phone, avatar, email, gender, isFavorite) => {
    console.log(
      `Name: ${name}\nAdderss: ${address}\nPhone: ${phone}\nAvatar: ${avatar}\nEmail: ${email}\nGender: ${gender}\nIsFavorite: ${isFavorite}`
    );
    const newContact = {
      id: uuid(),
      name: name,
      adress: address,
      phone: phone,
      email: email,
      gender: gender,
      avatar: avatar,
      isFavorite: isFavorite
    };
    const newList = [...this.state.List, newContact];
    this.setState({
      List: newList
    });
  };

  onEditContact = (id, name, address, phone, avatar, email) => {
    const index = this.state.List.findIndex(elem => elem.id === id);
    const newContact = {
      id: uuid(),
      name: name,
      adress: address,
      phone: phone,
      email: email,
      gender: "men",
      avatar: avatar,
      isFavorite: false
    };
  };

  onDeleteContact = id => {
    const index = this.state.List.findIndex(elem => elem.id === id);
    const partOne = this.state.List.slice(0, index);
    const partTwo = this.state.List.slice(index + 1);
    const newList = [...partOne, ...partTwo];
    this.setState({
      List: newList
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <Router>
            <Header />
            <Switch>
              <Route
                path="/"
                exact
                render={() => (
                  <ContactList
                    List={this.state.List}
                    onFavoriteChange={this.onFavoriteChange}
                    onDeleteContact={this.onDeleteContact}
                  />
                )}
              />
              <Route
                path="/addcontact"
                exact
                render={() => <AddContact onAddContact={this.onAddContact} />}
              />
              <Route path="*" component={NotFound} />
              <Route
                path="/editcontact"
                exact
                render={() => (
                  <EditContact onEditContact={this.onEditContact} />
                )}
              />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
