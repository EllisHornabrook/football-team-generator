import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import NameList from "./components/NameList";
import SubmitForm from "./components/SubmitForm";
import GenerateTeams from "./components/GenerateTeams";
import Teams from "./components/Teams"

class App extends Component {
  state = {
    names: [],
    teamOne: [],
    teamTwo: [],
    isLandingHidden: false
  }

  handleDelete = (index) => {
    const newNameList = [...this.state.names];
    newNameList.splice(index, 1);
    this.setState({names: newNameList});
  }

  handleSubmit = (Name) => {
    if (this.state.names.length >= 22) {
      alert("You have way too many friends...")
    } else {
      this.setState({names: [...this.state.names, Name]})
    }
  }

  handleRandomise = (myArr) => {    
    var l = myArr.length, temp, index;  
    while (l > 0) {  
        index = Math.floor(Math.random() * l);  
        l--;  
        temp = myArr[l];          
        myArr[l] = myArr[index];          
        myArr[index] = temp;      
    }    
    return myArr;  
  }

  handleGenerate = () => {
    if (this.state.names.length >= 4) {
      const namesArray = [...this.state.names];
      const randomisedArray = this.handleRandomise(namesArray);
      const firstArray = randomisedArray.splice(0, Math.floor(randomisedArray.length / 2));
      const secondArray = randomisedArray;
      this.setState({teamOne: firstArray, teamTwo: secondArray, isLandingHidden: true})
    } else {
      alert("You must have at least four players to generate teams.")
    }
  }

  handleEditTeam = () => {
    this.setState({teamOne: [], teamTwo: [], isLandingHidden: false})
  }

  handleIsLandingHidden = () => {
    const newIsLandingHidden = !this.state.isLandingHidden
    this.setState({isLandingHidden: newIsLandingHidden});
  }

  render() {
    return (
      <div className="container">
        <Header
          playerCount={this.state.names.length}
          isLandingHidden={this.state.isLandingHidden}
        />
        <NameList
          names={this.state.names}
          onDelete={this.handleDelete}
          isLandingHidden={this.state.isLandingHidden}
        />
        <SubmitForm
          onFormSubmit={this.handleSubmit}
          isLandingHidden={this.state.isLandingHidden}
        />
        <GenerateTeams
          generate={this.handleGenerate}
          edit={this.handleEditTeam}
          isLandingHidden={this.state.isLandingHidden}
        />
        <Teams
          teamOne={this.state.teamOne}
          teamTwo={this.state.teamTwo}
          isLandingHidden={this.state.isLandingHidden}
        />
      </div>
    )
  }
}

export default App;
