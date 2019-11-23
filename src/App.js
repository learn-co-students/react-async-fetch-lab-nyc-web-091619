// create your App component here
import React, { Component } from 'react'

const SITE = "http://api.open-notify.org/astros.json"

export default class App extends Component {

    componentDidMount() {
        fetch(SITE)
        .then (resp => resp.json())
        .then (json => console.log(json))
    }
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
