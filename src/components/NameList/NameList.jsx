import React, { Component } from "react";
import styles from "./NameList.module.scss";
import Name from "../Name";

class NameList extends Component {
  render() {
    if (this.props.isLandingHidden) {
      return null;
    } else {
      return (
        <div className={styles.nameList}>
          {this.props.names.map((name, index) => {
            return <Name content={name} key={index} id={index} onDelete={this.props.onDelete} />
          })}
        </div>
      );
    }
  }
}

export default NameList;
