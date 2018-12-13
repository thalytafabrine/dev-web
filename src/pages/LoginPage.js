import React, { Component } from 'react';
import NavBar from '../components/NavBar/NavBar';
import * as firebase from 'firebase';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '' 
        };

        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUserChange(evt) {
        this.setState({
            email: evt.target.value,
        });
    }
  
    handlePassChange(evt) {
        this.setState({
            password: evt.target.value,
        });
    };

    handleSubmit(evt) {
        evt.preventDefault();
    
        if (!this.state.email) {
            return this.setState({ error: 'Email is required' });
        }
    
        if (!this.state.password) {
            return this.setState({ error: 'Password is required' });
        }
    }

    login = async() => {
        await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password);
    }

    register = async() => {
        await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password);
    }

    render() {
        return (
            <div>
                <NavBar />
                <div>
                <TextField
                    required
                    id="email"
                    label="Email"
                    value={this.state.email}
                    onChange={this.handleUserChange}
                    margin="normal"
                    variant="outlined"
                />
                </div>
                <div>
                <TextField
                    required
                    id="password"
                    label="Password"
                    value={this.state.password}
                    onChange={this.handlePassChange}
                    margin="normal"
                    variant="outlined"
                    type="password"
                />
                </div>
                <Button variant="outlined" color="primary" size="large" onClick={this.login}>
                    Login
                </Button>
            </div>
        );
    }
}

export default LoginPage;
