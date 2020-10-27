import React, {Component} from 'react';
import {Form, Button , Alert} from 'react-bootstrap';
import {AuthContext} from '../../context/AuthContext';
import {register} from '../../actions/Auth';
import AppNavbar from '../navigation/navigation'
import './register.css';

class Register extends Component{

    static contextType = AuthContext

    state = {
        email: null,
        firstName: null,
        lastName: null,
        variant: null,
        password: null,
        message: null,
        mobileNo: null,
        address: null,
        city: null,
        state: null,
        pincode: null,
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
        const {email, firstName, lastName, password, mobileNo, address, city, state, pincode} = this.state;

        const newUser = {email, firstName, lastName, password, mobileNo, address, city, state, pincode}

        register(newUser, res => {
            if(res.data.success){
                this.setState({
                    message: res.data.message,
                    variant: 'success'
                })
            this.context.login(res)
            }
            else{
                this.setState({
                    message: res.data.message,
                    variant: 'danger'
                })
            }
        })
    }

    render(){
        return(
            <div className="register-form">
            <AppNavbar></AppNavbar>
            <Form onSubmit = {this.onSubmit} id = 'signup' className="register-box">
            <Form.Group>
                <h4 className="register-subtitle">Be The Part Of Our Family.</h4>
            {this.state.message ? (
                <Alert variant={this.state.variant}>{this.state.message}</Alert>
            ) : null}
            </Form.Group>
                <input name="email" onChange={this.onChange} type="email" className="register-input" placeholder="Email" />
                <input name="firstName" onChange={this.onChange} type="text" className="register-input" placeholder="First Name" />
                <input name="lastName" onChange={this.onChange} type="text" className="register-input" placeholder="Last Name" />
                <input name="password" onChange={this.onChange} type="password" className="register-input" placeholder="Password" />
                <input name="mobileNo" onChange={this.onChange} type="text" className="register-input" placeholder="Contact No." />
                <input name="address" onChange={this.onChange} type="text" className="register-input" placeholder="Address" />
                <input name="city" onChange={this.onChange} type="text" className="register-input" placeholder="City" />
                <input name="pincode" onChange={this.onChange} type="text" className="register-input" placeholder="Pincode" />
                <input name="state" onChange={this.onChange} type="text" className="register-input" placeholder="State" />
                <Button type="submit" className="register-btn">Sign In</Button>
                </Form>
            </div>
        );
    }
}

export default Register;

