import React from 'react'
import { game } from '../utils/contants'

class Start extends React.Component{
  constructor(props) {
    super(props)
  
    this.state = {
       name: ''
    }
  }

  handleChangeName = e => {
    this.setState({name: e.target.value.toUpperCase()})
  }

  render(){
    return (
      <div>
          <h1>Ready For War</h1>
          <input onChange={this.handleChangeName} value={this.state.name} type='text' placeholder='Enter your name'/>
          <button onClick={() => {
            this.props.changePage(game);
            this.props.myName(this.state.name)}}>Start</button>
      </div>
    )
  }
  
}

export default Start