import React, { Component } from 'react';

class Uncontrolled extends Component {

    handleSubmit = (event) => {
        event.preventDefault();

        const values = {
            firstname: this.firstname.value,
            lastname: this.lastname.value
        }

        console.log(values)
    }

    render(){
        return(
            <div className="container">
            <form>
                <div className="form_element">
                    <label>Enter Firstname</label>
                    <input 
                        type="text"
                        ref={input => this.firstname = input}
                    />
                </div>
                <div className="form_element">
                    <label>Enter Lastname</label>
                    <input 
                        type="text"
                        ref={input => this.lastname = input}
                    />
                </div>
                <button onClick={this.handleSubmit}>Sign In</button>
            </form>
        </div>
        )
    }
}

export default Uncontrolled;