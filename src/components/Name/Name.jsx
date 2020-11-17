import React, { Component } from "react";
import styles from "./Name.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

class Name extends Component {
  render() {
    return (
      <div className={styles.name}>
        <p>{this.props.content}</p>
        <FontAwesomeIcon icon={faTimesCircle} onClick={() => this.props.onDelete(this.props.id)} className={styles.icon}/>
      </div>
    );
  }
}

export default Name;
