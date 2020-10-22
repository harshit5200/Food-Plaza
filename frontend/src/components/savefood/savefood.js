import React, {Component} from 'react';
import {Form, Button , Alert} from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import './savefood.css';

class FoodForm extends Component{


    state = {
        foodName:null,
        foodType:null,
        foodRating:null,
        foodDescription:null,
        foodPrice:null,
        foodImage:null
    }


    onChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    fileUpload = e => {
        this.setState({[e.target.name] : e.target.files[0]});
        
    }

    onSubmit = e => {
        var fd = new FormData();
        fd.append("foodName", this.state.foodName);
        fd.append("foodType", this.state.foodType);
        fd.append("foodRating", this.state.foodRating);
        fd.append("foodDescription", this.state.foodDescription);
        fd.append("foodPrice", this.state.foodPrice);
        fd.append("foodImage", this.state.foodImage)
        e.preventDefault();
        fetch("http://localhost:5000/api/foodmenu",{
            method: 'POST',
            body:fd,
    });
    window.location.reload();

    }


    render(){
        return(
            <div>
            <div className="fill-space"></div>
            <div className="food-form">
            <Form onSubmit = {this.onSubmit} id = 'signup' className="food-box" encType="multipart/form-data">
            <Form.Group>
                <h1 className="food-title">Food Plaza</h1>
                <h6 className="food-subtitle">Wake Up Your Taste Buds</h6>
            {this.state.message ? (
                <Alert variant={this.state.variant}>{this.state.message}</Alert>
            ) : null}
            </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Enter Name" onChange={this.onChange} name = "foodName" className="food-input"/>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Enter Type" onChange={this.onChange} name = "foodType" className="food-input"/>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Enter Rating" onChange={this.onChange} name = "foodRating" className="food-input"/>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Enter Description" onChange={this.onChange} name = "foodDescription" className="food-input"/>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Enter Price" onChange={this.onChange} name = "foodPrice" className="food-input"/>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="file"  onChange={this.fileUpload} name = "foodImage" className="food-input"/>
                </Form.Group>
                <Button type="submit" className="btn login-btn">Save Food</Button>
                </Form>
            </div>
        </div>
        );
    }
}

export default FoodForm;