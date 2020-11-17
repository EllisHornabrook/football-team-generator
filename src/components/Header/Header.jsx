import React, { Component } from "react";
import styles from "./Header.module.scss";

class Header extends Component {

  numCheck = () => {
    if (this.props.playerCount === 1) {
      return "player"
    } else {
      return "players"
    }
  }

  render() {
    if (this.props.isLandingHidden) {
      return (
        <div className={styles.header}>
          <h2>Enjoy the game!</h2>
        </div>
    )} else {
      return (
        <div className={styles.header}>
          <h1>Football Team Generator</h1>
          <h2>You have {this.props.playerCount} {this.numCheck()}</h2>
        </div>
      );
    }
  }
}

export default Header;

