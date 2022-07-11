import React from "react";
import "./App.css";
import Form from "./components/Form/Form";
import CardList from "./components/CardList/CardList";

const testData = [
  {
    name: "mojombo",
    avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
    company: "Facebook",
  },
  {
    name: "defunkt",
    avatar_url: "https://avatars.githubusercontent.com/u/2?v=4",
    company: "Google",
  },
  {
    name: "pjhyett",
    avatar_url: "https://avatars.githubusercontent.com/u/3?v=4",
    company: "Amazone",
  },
];

class App extends React.Component {
  state = {
    profiles: [],
  };
  addNewProfile = (profileData) => {
    this.setState((prevState) => ({
      profiles: [...prevState.profiles, profileData],
    }));
    console.log(profileData);
  };
  render() {
    return (
      <div className="app">
        <div className="header"> {this.props.title}</div>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
      </div>
    );
  }
}

export default App;
