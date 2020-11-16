import React, { Component } from "react";
import styles from "./Player.module.scss";

class Player extends Component {
  render() {
    return (
      <div className={styles.player}>
        <p>{this.props.content}</p>
      </div>
    );
  }
}

export default Player;
