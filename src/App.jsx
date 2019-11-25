// create your App component here
import React, { Component } from "react";

class App extends Component {
  state = {
    peopleInSpace: []
  };

  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
      .then(resp => resp.json())
      .then(data => this.setState({ peopleInSpace: data.people }));
  }

  render() {
    return (
      <React.Fragment>
        <h1>People in Space</h1>
      </React.Fragment>
    );
  }
}

export default App;
