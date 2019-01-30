import React, { Component } from 'react';

export default class ControlledInput extends Component {

    state = {
        value: ''
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.sendFormDataSomewhere(this.state)
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <input
            type='text'
            value={this.state.value}
            onChange={this.handleChange}
            />
            </form>
        )
    }

}