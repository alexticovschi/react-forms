import React, { Component } from 'react';
import FormFields from '../widgets/Forms/formFields';


class User extends Component {

    state = {
        formData: {
            firstname: {
                element: 'input',
                value: '',
                label: true,
                labelText: 'Firstname',
                config: {
                    name: 'firstname_input',
                    type: 'text',
                    placeholder: 'Enter your firstname'
                }
            },
            lastname: {
                element: 'input',
                value: '',
                label: true,
                labelText: 'Lastname',
                config: {
                    name: 'lastname_input',
                    type: 'text',
                    placeholder: 'Enter your lastname'
                }
            }
        }
    }

    // updates the state of the form with a new state
    updateForm = (newState) => {
        this.setState({
            formData: newState
        })

        //console.log('Firstname: ', this.state.formData.firstname.value)
        //console.log('Lastname: ', this.state.formData.lastname.value) 
    }

    submitForm = (event) => {
        event.preventDefault();
        let dataToSubmit = {};

        for(let key in this.state.formData) {
            dataToSubmit[key] = this.state.formData[key].value;
        }
    }


    render(){
        return(
            <div className="container">
                <form onSubmit={this.submitForm}>
                    <FormFields 
                        formData={this.state.formData}

                        // updateForm is responsible for taking the new state of the input and updating the state
                        change={(newState) => this.updateForm(newState)}
                    />

                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default User;