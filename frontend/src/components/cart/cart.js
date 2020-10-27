import React, {Component} from 'react';
import AppNavbar from '../navigation/navigation';
import './cart.css';
import {Card, Button} from 'react-bootstrap';
import emptyCart from './emptyCart.png'
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';
import {AuthContext} from '../../context/AuthContext';
import Rating from '../rating/rating';
import Footer from '../footer/footer'

class Cart extends Component{
    static contextType = AuthContext
    constructor(props){
        super(props);
        this.state = {
            counter: 1,
            totalPrice: null
        }
    }

    orderNow(){
        confirmAlert({
            title: 'Food Plaza',
            message: 'Confirm Your Order',
            buttons: [
              {
                label: 'CONFIRM',
                onClick: () => {
                    // Order Your Food Now 
                }
              },
              {
                label: 'CANCEL'
              }
            ]
          }); 
    }
    removefromCart(){
        confirmAlert({
            title: 'Food Plaza',
            message: 'Do You Really Want To Clear Cart',
            buttons: [
              {
                label: 'YES',
                onClick: () => {
                    localStorage.removeItem("itemsArray");
                    window.location.reload();
                }
              },
              {
                label: 'NO'
              }
            ]
          });
    }
    componentDidMount(){
        var price = JSON.parse(localStorage.getItem('itemsArray'))
        var i;
        var calPrice = 0;
        if(price){
        for (i = 0; i < price.length; i++) {
        calPrice += Number(price[i].foodPrice) * Number(price[i].limit);
        }
        this.setState({
            totalPrice: calPrice
        })
    }
    }
    render(){
      if(localStorage.getItem('itemsArray')){
            return(
              <div>
                <div className="cart-card">
                <AppNavbar></AppNavbar>
                <div className="container">
                <br />
                <h4 className="amount-to-pay">Total Amount to Pay: Rs {this.state.totalPrice}</h4>
                <Button variant="primary" onClick={this.removefromCart.bind(this)} className="clear-cart-btn">Clear Cart</Button>
                <Button variant="outline-primary"  className="order-now-btn" onClick={this.orderNow.bind(this)}>Order Now</Button>
                <div className="row">
                {
                JSON.parse(localStorage.getItem('itemsArray')).map(Cart => (
                    <Card style={{ width: '18rem' }} className="food-card" key={Cart.idNo} >
                    <Card.Img variant="top" src={`http://localhost:5000/images/${Cart.foodImage}`}/>
                    <Card.Body>
                        <Card.Title className="food-card-name">{Cart.foodName}</Card.Title>
                        <Card.Text className="food-card-type">{Cart.foodType}</Card.Text>
                        <Rating rating={Cart.foodRating}></Rating>
                        <br/>
                        <Card.Text className="food-card-price">₹ {Cart.foodPrice}</Card.Text>
                        <Card.Text className="food-card-limit">Quantity: {Cart.limit}</Card.Text>
                    </Card.Body>
                    </Card>
                    ))
                }               
                </div>
                </div>
                </div>
                <Footer></Footer>
                </div>
            );
        }
        else{
            return(
                <div className="alt-cart">
                <AppNavbar></AppNavbar>
                <img src={emptyCart} className="cart-image" alt="Empty Cart" />
                <Footer></Footer>
                </div> 
            );
        }
    }
}

export default Cart;