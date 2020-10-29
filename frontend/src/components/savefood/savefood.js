import React, {Component} from 'react';
import {Form, Button , Alert} from 'react-bootstrap';
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
                <input name="foodName" onChange={this.onChange} type="text" className="login-input" placeholder="Food Name"/>
                <select onChange={this.onChange} name="foodType" className="login-input">
                    <option value="">Food Type</option>
                    <option value="Veg">Veg</option>
                    <option value="Non-Veg">Non-Veg</option>
                </select>
                <select onChange={this.onChange} name="foodRating" className="login-input">
                    <option value="">Food Rating</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <input name="foodDescription" onChange={this.onChange} type="text" className="login-input" placeholder="Food Description"/>
                <input name="foodPrice" onChange={this.onChange} type="text" className="login-input" placeholder="Food Price"/>
                <input type="file" name="foodImage" onChange={this.fileUpload}/>   
                <Button type="submit" className="btn login-btn">Save Food</Button>
                </Form>
            </div>
        </div>
        );
    }
}

export default FoodForm;
