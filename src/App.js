


import React, { Component } from 'react'

class App extends Component {
  
    componentDidMount(){
        fetch("http://api.open-notify.org/astros.json")
    }


    render() {
        return (
            <div>HI</div>
        )
    }
}

export default App