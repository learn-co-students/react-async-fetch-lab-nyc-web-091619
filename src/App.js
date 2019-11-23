// create your App component here
import React, { Component } from 'react';

export default class App extends Component {

    state = {
        astronauts: []
    }

    renderAstronauts = () => {
        return this.state.astronauts.map((astronaut, index) => {
            return <li key={index}>{astronaut.name}</li> 
        })
    }

    render() {
        return (
            <div>
                <h1>Here are all the people in space: </h1>
                <ul>
                    {this.renderAstronauts()}
                </ul>
            </div>
        )
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.json())
        .then(json => {
            this.setState({ astronauts: json.people })
        })
    }

}