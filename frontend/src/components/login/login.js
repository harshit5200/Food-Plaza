import React, {Component} from 'react';
import {login} from '../../actions/Auth'
import {Form, Button ,Alert} from 'react-bootstrap';
import {AuthContext} from '../../context/AuthContext';
import AppNavbar from '../navigation/navigation';
import './login.css';
import {TextField} from '@material-ui/core';

class Login extends Component{

    static contextType = AuthContext;

    state = {
        message: null,
        variant: "success",
        token: localStorage.getItem('token')
    }

    onChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    componentDidUpdate(){
        if(this.context.isAuthenticated){
            this.props.history.push('/')
        }
    }

    onSubmit = e => {
        e.preventDefault();
        const {email, password, token} = this.state;
        const data = {email, password, token}
        login(data, res => {
            if(res.data.success){
                this.setState(
                    {
                        message: res.data.message,
                        variant: "success"
                    })
                this.context.login(res)
            }
            else{
                this.setState(
                    {
                        message: res.data.message,
                        variant: "danger"
                    })
            }
        })
    }

    render(){
        return(
            <div className="login-form">
            <AppNavbar></AppNavbar>
                <Form onSubmit={this.onSubmit} className="login-box" id="login">
                <Form.Group>
                    <h1 className="login-title">Food Plaza</h1>
                    <h6 className="login-subtitle">Your Safety Is Our Priority</h6>
                    </Form.Group>
                    {this.state.message ? (
                        <Alert variant={this.state.variant}>{this.state.message}</Alert>
                    ) : null }
                <TextField id="outlined-basic" label="Email" variant="outlined"  name="email" onChange={this.onChange} type="email" className="login-input"/>
                <TextField id="outlined-basic" label="Password" variant="outlined" name="password" onChange={this.onChange} type="password" className="login-input" />
                <Button type="submit" className="login-btn">Sign In</Button>
            </Form>
        </div>
        );
    }
}

export default Login;