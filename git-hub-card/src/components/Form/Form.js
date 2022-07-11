import React from "react";
import "./Form.css";

class Form extends React.Component {
  state = { userName: "" };
  handleSubmit = async (event) => {
    event.preventDefault();
    const res = await fetch(
      `https://api.github.com/users/${this.state.userName}`,
      { method: "GET" }
    );
    const result = await res.json();
    this.props.onSubmit(result);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="input-form">
          <input
            className="input-text"
            type="text"
            value={this.state.userName}
            onChange={(event) =>
              this.setState({ userName: event.target.value })
            }
          />
          <button className="add-btn">Add</button>
        </div>
      </form>
    );
  }
}

export default Form;
