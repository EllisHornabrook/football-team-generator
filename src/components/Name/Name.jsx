import React, { Component } from "react";
import styles from "./Name.module.scss";

class Name extends Component {
  render() {
    return (
      <div className={styles.name}>
        <p>{this.props.content}</p>
        <button onClick={() => this.props.onDelete(this.props.id)}>x</button>
      </div>
    );
  }
}

export default Name;
