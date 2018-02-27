import React, { Component } from 'react';
import { firebase, googleAuth } from '../firebase';

class Login extends Component {

    state = {
        status: false
    }

    signIn = () => {
        firebase.auth().signInWithPopup(googleAuth);
        console.log('Present state:',this.state.status);
    }

    signOut = () => {
        firebase.auth().signOut();
        console.log('Present state:',this.state.status);
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged((user)=>{
            this.setState({
                status: user ? false: true
            })
        });
    }

    render() {
        return(
            <div>
                { this.state.status ?
                    <button onClick={ this.signIn }>Login</button> 
                    :
                    <button onClick={ this.signOut }>Logout</button>
                }
            </div>
        )
    }
}

export default Login;