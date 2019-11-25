// create your App component here
import React, { Component } from 'react';

export class App extends Component {

    state = {
        space: null,
        loading: true
    }

    componentDidMount() {
        // fetch
        fetch("http://api.open-notify.org/astros.json")
            .then(resp => resp.json())
            .then(data => this.setState({
                space: data,
                loading: false
            }))
    }
    
    render() {
        return (
            <div>
                {/* <-- stuff --/> */}
                { !this.state.loading ? this.state.space.people.count : null }
            </div>
        );
    }
}

export default App;
