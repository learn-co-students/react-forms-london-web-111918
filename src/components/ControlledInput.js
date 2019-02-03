// Code ControlledInput Component Here
import React from 'react';

class ControlledInput extends React.Component {
  state = {
    firstName: '',
    lastName: ''
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {

  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)} onChange={this.handleChange}>
      <input type="text" name="firstName" value={this.state.firstName} />
      <input type="text" name="lastName" value={this.state.lastName} />
      </form>
    );
  }
}

export default ControlledInput;
