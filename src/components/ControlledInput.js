// Code ControlledInput Component Here

import React, { Component } from 'react';

class ControlledInput extends Component{

    state={
        value: '',
    }
    
    handleChange = (event) => {
        event.preventDefault()
        this.setState({
            value: event.target.value
        })
    }

    render() {
        return(
            <form>
                <input 
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                />
            </form>
        )
    }

}

export default ControlledInput