import React, { Component } from "react";
import styles from "./GenerateTeams.module.scss";

class GenerateTeams extends Component {
  render() {
    if (this.props.isLandingHidden) {
      return (
        <div className={styles.buttons}>
          <button onClick={this.props.edit}>Edit Players</button>
        </div>
    )} else {
      return (
        <div className={styles.buttons}>
          <button onClick={this.props.generate}>Generate Teams</button>
        </div>
      );
    }
  }
}

export default GenerateTeams;
