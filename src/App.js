import React, {Component} from 'react'
import './App.css'
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {
  
  state = {
    username: 'Laury'
  }

  updateUserName = event => {
    this.setState({
      username: event.target.value
    })
  }

  render() {
    return (
    <div className="App">
      <UserInput
        changed={this.updateUserName}
        currentUserName={this.state.username}
      />
      <UserOutput userName={this.state.username}/>
      <UserOutput userName={this.state.username}/>
      <UserOutput userName="Henk"/>
    </div>
    )
  }

}

export default App
