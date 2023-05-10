import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import authenticatorClient from '../../services/authenticator-api-client';

class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            redirectToReferrer: false,
            message: "",
            formErrors: { username: "", password: "" },
            usernameValid: false,
            passwordValid: false,
            formValid: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.login = this.login.bind(this);
    }

    handleChange(e) {
        const id = e.target.id;
        const value = e.target.value;
        this.setState({ [id]: value }, () => {
            this.validateField(id, value);
        });
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let { usernameValid, passwordValid } = this.state;

        switch (fieldName) {
            case "username":
                usernameValid = value.length >= 6;
                fieldValidationErrors.username = usernameValid ? '' : 'Username is invalid';
                break;
            case "password":
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '' : 'Password is too short';
                break;
            default:
                break;
        }

        this.setState({
            formErrors: fieldValidationErrors,
            usernameValid: usernameValid,
            passwordValid: passwordValid,
            formValid: usernameValid && passwordValid
        });
    }

    login(e) {
        e.preventDefault();
        authenticatorClient.login(this.state.username, this.state.password).then(() => {
            this.setState({ redirectToReferrer: authenticatorClient.isAuthenticated });
        }).catch((eMsg) => {
            this.setState({ message: eMsg });
        });
    }

    render() {
        const { from } = this.props.location.state || { from: { pathname: "/" } };
        const { redirectToReferrer } = this.state;

        if (redirectToReferrer) {
            return <Redirect to={from.pathname} />
        }

        return (
            <div className='row'>
                <h1 className="text-primary text-center">Login Component</h1>

                {
                    this.state.message
                        ? <h4 className="alert alert-danger">{this.state.message}</h4>
                        : null
                }

                <div className="col-sm-6 offset-sm-3">
                    <Form onSubmit={this.login}>
                        <Form.Group className='mb-3' controlId='username'>
                            <Form.Label>Username</Form.Label>
                            <Form.Control autoFocus type='text' value={this.state.username} onChange={this.handleChange} />
                            {
                                this.state.formErrors.username
                                    ? <Form.Text className='text-danger'>{this.state.formErrors.username}</Form.Text>
                                    : <Form.Text className='text-muted'>
                                        We'll never share your email/username with anyone else.
                                    </Form.Text>
                            }
                        </Form.Group>
                        <Form.Group className='mb-3' controlId='password'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' value={this.state.password} onChange={this.handleChange} />
                            {
                                this.state.formErrors.password
                                    ? <Form.Text className='text-danger'>{this.state.formErrors.password}</Form.Text>
                                    : null
                            }
                        </Form.Group>
                        <Button variant="primary" type="submit" disabled={!this.state.formValid}
                            style={!this.state.formValid ? { cursor: 'not-allowed', pointerEvents: 'all' } : {}}>
                            Login
                        </Button>
                    </Form>
                </div>
            </div>
        );
    }
}

export default LoginComponent;