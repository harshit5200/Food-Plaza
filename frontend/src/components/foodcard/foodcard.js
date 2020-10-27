import React, {Component} from 'react';
import './foodcard.css';
import {Card, Button} from 'react-bootstrap';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';
import FeatherIcon from 'feather-icons-react';
import Rating from '../rating/rating';

class FoodCard extends Component{

    constructor(props){
        super(props);
        this.state = {
            counter: 1
        }
    }
    
    addtoCart(){
        
        confirmAlert({
            title: 'Food Plaza',
            message: 'Add Food To Cart',
            buttons: [
              {
                label: 'CONFIRM',
                onClick: () => {
                    var newItem = {
                        'idNo': this.props.id, 'foodName': this.props.foodName, 'foodType': this.props.foodType, 'foodRating': this.props.foodRating, 'foodPrice': this.props.foodPrice,
                        'foodImage': this.props.foodImage, 'limit': this.state.counter
                    }
                    var cartItem = JSON.parse(localStorage.getItem('itemsArray')) || [];
                    cartItem.push(newItem);
            
                    localStorage.setItem('itemsArray', JSON.stringify(cartItem)); 
                }
              },
              {
                label: 'CANCEL'
              }
            ]
          });
        
    }

    handleIncrement = () => {
        if(this.state.counter >= 1){
          this.setState(state => ({ counter: state.counter + 1 }));  
        }      
        };
      
        
        handleDecrement = () => {
          if(this.state.counter > 1){
            this.setState(state => ({ counter: state.counter - 1 }));  
          } 
        };
    

    render(){
        return(
            <Card style={{ width: '18rem' }} className="food-card">
            <Card.Img variant="top" src={`http://localhost:5000/images/${this.props.foodImage}`}/>
            <Card.Body>
                <Card.Title className="food-card-name">{this.props.foodName}</Card.Title>
                <Card.Subtitle>{this.props.foodDescription}</Card.Subtitle><br />
                <Card.Text className="food-card-type">{this.props.foodType}</Card.Text>
                <Rating rating={this.props.foodRating}></Rating><br/>
                <Card.Text className="food-card-price">Rs {this.props.foodPrice}</Card.Text>
                <div className="row cart-counter">
                    <Button className="minus-btn" onClick={this.handleDecrement.bind()} ><FeatherIcon icon="minus" /></Button>
                    <Card.Text className="food-card-quantity">{this.state.counter}</Card.Text>
                    <Button className="plus-btn" onClick={this.handleIncrement.bind()}><FeatherIcon icon="plus" /></Button>
                </div><br/>
                <Button variant="primary" onClick={this.addtoCart.bind(this)}>Add To Cart</Button>
            </Card.Body>
            </Card>
        );
    }
}

export default FoodCard;