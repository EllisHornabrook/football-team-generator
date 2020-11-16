import React, { Component } from "react";
import styles from "./SubmitForm.module.scss";

class SubmitForm extends Component {

  state = {
    entry: ""
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.entry === "") {
      alert('Please enter a name and try again.')
    } else {
    this.props.onFormSubmit(this.state.entry);
    this.setState({ entry: "" });
    }
  }

  render() {
    if (this.props.isLandingHidden) {
      return null;
    } else {
      return (
        <form onSubmit={this.handleSubmit}>
        <input 
          type="text"
          maxLength="11"
          placeholder="Add Player"
          value={this.state.entry}
          onChange={(e) => this.setState({entry: e.target.value})}
        />
        <button>Add</button>
      </form>
      );
    }
  }
}

export default SubmitForm;
