
// src/components/ControlledInput.js
import React from 'react'

class ControlledInput extends React.Component {
  state = {
    myValue: ''
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.sendFormDataSomewhere(this.state)
  }

  render () {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <input
          type='text'
          value={this.state.myValue}
          onChange={this.handleChange}
          name='myValue'
        />
      </form>
    )
  }
}

export default ControlledInput

// import React, { Component } from 'react'

// class ControlledInput extends Component {
//     state = {
//       firstName: 'John',
//       lastName: 'Henry'
//     }

//     // Form with 'CONTROLLED STATE COMPONENT'
//     // handleFirstNameChange = event => {
//     //   this.setState({
//     //     firstName: event.target.value
//     //   })
//     // }

//     //   handleLastNameChange = event => {
//     //     this.setState({
//     //       lastName: event.target.value
//     //     })
//     //   }

//     // Refactor both functions into one handler
//     handleChange = event => {
//       this.setState({
//         [event.target.name]: event.target.value
//       })
//     }

//     render () {
//       return (
//         <form>
//           {/* <input type='text' id='firstName' onChange={event => this.handleFirstNameChange(event)} value={this.state.firstName} />
//           <input type='text' id='lastName' onChange={event => this.handleLastNameChange(event)} value={this.state.lastName} /> */}
//           <input type='text' id='firstName' onChange={event => this.handleChange(event)} value={this.state.firstName} />
//           <input type='text' id='lastName' onChange={event => this.handleChange(event)} value={this.state.lastName} />
//         </form>
//       )
//     }
// }

// export default ControlledInput
