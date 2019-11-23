import React, { Component } from 'react';

class App extends Component {
    

    state = {  
        people: []
    }
    
    render() { 
        return (  
            <div>
                {this.state.people.map((person, id) => <h1 key={id}>{person.name}</h1> )}
            </div>
        );
    }
    
    componentDidMount() {
        const api =  'http://api.open-notify.org/astros.json'
        return fetch(api).then(res => res.json())
        .then(data => this.setState(
            { people:  data.people }
            ))
    }
}
 
export default App;