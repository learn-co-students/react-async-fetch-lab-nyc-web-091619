// create your App component here
import React from 'react'

class App extends React.Component{

    state={
        peopleInSpace: []
    }

    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.json())
        .then(data => {
            let newPersons = []
            data.people.forEach(person => newPersons.push(person))
            this.setState({
                peopleInSpace: newPersons
            })
        })
            
    }
    
    render(){
        console.log(this.state)
        return (
            <div>
                {this.state.peopleInSpace.map((people)=><h1>{people.name}</h1>)}
            </div>
        )
    }
}
export default App