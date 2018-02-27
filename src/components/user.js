import React, { Component } from 'react';
import FormFields from '../widgets/Forms/formFields';

import { firebaseDB } from '../firebase';

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
                },
                validation: {
                    required: true,
                    minLen: 5
                },
                valid: false,
                touched: false,
                validationMessage: ''
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
                },
                validation: {
                    required: true,
                    minLen: 5
                },
                valid: true,
                touched: false,
                validationMessage: ''
            },
            message: {
                element: 'textarea',
                value: '',
                label: true,
                labelText: 'Message',
                config: {
                    name: 'message_input',
                    rows: 4,
                    cols: 36
                },
                validation: {
                    required: false,
                },
                valid: true
            },
            age: {
                element: 'select',
                value: '',
                label: true,
                labelText: 'Age',
                config: {
                    name: 'age_input',
                    options: [
                        {val: '1', text: '10-20'},
                        {val: '2', text: '20-30'},
                        {val: '3', text: '+30'},                        
                    ]
                },
                validation: {
                    required: false,
                },
                valid: true
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
        let formIsValid = true;

        for(let key in this.state.formData) {
            dataToSubmit[key] = this.state.formData[key].value;
        }

        for(let key in this.state.formData) {
            formIsValid = this.state.formData[key].valid && formIsValid;
        }

        if(formIsValid) { 
            firebaseDB.ref('users').push(dataToSubmit)
                .then(() => {
                    console.log('new user added');
                }).catch( error => {
                    console.log(error);
                })
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