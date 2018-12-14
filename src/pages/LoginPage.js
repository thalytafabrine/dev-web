import React, { Component } from 'react';
import NavBar from '../components/NavBar/NavBar';
import * as firebase from 'firebase';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './LoginPage.css';

class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            register: false
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

    setRegister = () => {
      this.setState({register: !this.state.register});
    }

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
        this.setState({register: false});
        window.location.href = `http://localhost:3000/disciplina`;
    }

    register = async() => {
        await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password);
        this.login();
    }

    render() {
        return (
            <div>
              <NavBar auth={false}/>
              {this.state.register ? (
                <div>
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
                  <Button
                    className="button"
                    variant="outlined"
                    color="primary"
                    size="large"
                    onClick={this.login}
                    style={{marginBottom: 30}}
                  >
                      Login
                  </Button>
                  <Typography variant="overline">
                      Ainda não tem conta? Cria, vai ser legal :)
                  </Typography>
                  <Button 
                    className="button"
                    variant="outlined"
                    color="primary"
                    size="large"
                    onClick={this.setRegister}
                    style={{marginBottom: 30}}
                  >
                      Criar conta
                  </Button>
                  </div>
              ) : (
                <div>
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
                <Button 
                  className="button"
                  variant="outlined"
                  color="primary"
                  size="large"
                  onClick={this.register}
                  style={{marginBottom: 30}}
                >
                    Cadastrar
                </Button>
                <Typography variant="overline">
                    Seja bem-vindx :)
                </Typography>
                <Typography variant="overline">
                      Já tem uma conta? Clique aqui
                </Typography>
                <Button 
                    className="button"
                    variant="outlined"
                    color="primary"
                    size="large"
                    onClick={this.setRegister}
                    style={{marginBottom: 30}}
                  >
                      Já tenho conta!
                  </Button>
                </div>
              )}

            </div>
        );
    }
}

export default LoginPage;
