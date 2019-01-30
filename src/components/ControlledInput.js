import React from 'react';

class ControlledInput extends React.Component {
    state = {
        value: '',
    }

    handleSubmit = event => {
        event.preventDefault()
        this.sendFormDataSomewhere(this.state)
    }

    render() {
        return (
            <form onSubmit={event => this.handleSubmit(event)}>
                <input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                />
            </form>
        );
    }
}

export default ControlledInput;