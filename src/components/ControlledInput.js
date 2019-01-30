import React from "react";

export default class Form extends React.Component {
  state = {
    firstName: "John",
    lastName: "Henry"
  };
  handleFirstNameChange = event => {
    this.setState({
      firstName: event.target.value
    });
  };

  handleLastNameChange = event => {
    this.setState({
      lastName: event.target.value
    });
  };

  // handleChange = event => {
  //   this.setState({
  //     [event.target.id]: event.target.value
  //   })
  // }

  postFormDataToAPI = (firstName, lastName) => {
    fetch(someURL, {
      method: "POST",
      body: JSON.stringify({
        firstName,
        lastName
      })
    }).then(res => res.json());
  };

  handleSubmit = event => {
    event.preventDefault();
    this.postFormDataToAPI(this.state.firstName, this.state.lastName);
  };

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <input
          type="text"
          id="firstName"
          onChange={event => this.handleFirstNameChange(event)}
          value={this.state.firstName}
        />
        <input
          type="text"
          id="lastName"
          onChange={event => this.handleLastNameChange(event)}
          value={this.state.lastName}
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
