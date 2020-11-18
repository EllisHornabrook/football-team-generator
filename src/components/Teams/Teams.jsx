import React, { Component } from "react";
import styles from "./Teams.module.scss";

class Teams extends Component {
  setDefenceTeamOne = () => {
    this.defence = [this.props.teamOne[1], this.props.teamOne[5], this.props.teamOne[8]]
    return this.defence.map((defender) => defender === undefined ? null : <span>{defender}</span>)
  }

  setMidfieldTeamOne = () => {
    this.midfield = [this.props.teamOne[2], this.props.teamOne[3], this.props.teamOne[6], this.props.teamOne[9]]
    return this.midfield.map((midfielder) => midfielder === undefined ? null : <span>{midfielder}</span>)
  }

  setAttackTeamOne = () => {
    this.attack = [this.props.teamOne[4], this.props.teamOne[7], this.props.teamOne[10]]
    return this.attack.map((attacker) => attacker === undefined ? null : <span>{attacker}</span>)
  }

  setDefenceTeamTwo = () => {
    this.defence = [this.props.teamTwo[1], this.props.teamTwo[5], this.props.teamTwo[8]]
    return this.defence.map((defender) => defender === undefined ? null : <span>{defender}</span>)
  }

  setMidfieldTeamTwo = () => {
    this.midfield = [this.props.teamTwo[2], this.props.teamTwo[3], this.props.teamTwo[6], this.props.teamTwo[9]]
    return this.midfield.map((midfielder) => midfielder === undefined ? null : <span>{midfielder}</span>)
  }

  setAttackTeamTwo = () => {
    this.attack = [this.props.teamTwo[4], this.props.teamTwo[7], this.props.teamTwo[10]]
    return this.attack.map((attacker) => attacker === undefined ? null : <span>{attacker}</span>)
  }
  
  render() {
    if (this.props.isLandingHidden) {
      return (
        <div className={styles.pitch}>
          <section className={styles.teamOne}>
            <div className={styles.keeper}><span>{this.props.teamOne[0]}</span></div>
            <div className={styles.defence}>{this.setDefenceTeamOne()}</div>
            <div className={styles.midfield}>{this.setMidfieldTeamOne()}</div>
            <div className={styles.attack}>{this.setAttackTeamOne()}</div>
          </section>

          <section className={styles.teamTwo}>
            <div className={styles.attack}>{this.setAttackTeamTwo()}</div>
            <div className={styles.midfield}>{this.setMidfieldTeamTwo()}</div>
            <div className={styles.defence}>{this.setDefenceTeamTwo()}</div>
            <div className={styles.keeper}><span>{this.props.teamTwo[0]}</span></div>
          </section>
        </div>
    )} else {
      return (
        null
      );
    }
  }
}

export default Teams;
