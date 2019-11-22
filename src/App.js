// create your App component here
import React, { Component } from 'react';

export default class App extends Component {
    state = { 
        astros: [],
        total:0
    }
    componentDidMount(){
        fetch("http://api.open-notify.org/astros.json")
        .then(resp => resp.json())
        .then(astros => {
            let newAstros = []
            astros.people.forEach(astro => {
                newAstros.push(astro)
            })
            this.setState({
                astros: newAstros,
                total: astros.number
            })
        })
    }

    renderAstros(){
        return this.state.astros.map(astro => {
            return <p style={{textAlign: "center"}} key={astro.name}>{astro.name} at craft: {astro.craft}</p>
        })
    }

    render() {
        return (
            <div>   
                {this.renderAstros()}
        <h2 style={{textAlign: "center"}}>Total of: {this.state.total} people</h2>
            </div>
        )
    }
}


