import React, { Component } from 'react';

class Controlled extends Component {

    state = {
        firstname: '',
        lastname:  ''
    }

    handleFirstNameChange = (event) => {
        this.setState({
            firstname: event.target.value
        })
    }

    handleLastNameChange = (event) => {
        this.setState({
            lastname: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        console.log(this.state);
    }

    render(){
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="form_element">
                        <label>Enter Firstname</label>
                        <input 
                            type="text"
                            onChange={this.handleFirstNameChange}
                            value={this.state.firstname}
                        />
                    </div>
                    <div className="form_element">
                        <label>Enter Lastname</label>
                        <input 
                            type="text"
                            onChange={this.handleLastNameChange}
                            value={this.state.lastname}
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Controlled;