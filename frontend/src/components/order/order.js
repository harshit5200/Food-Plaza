import React, {Component} from 'react';
import AppNavbar from '../navigation/navigation';
import './order.css';
import {AuthContext} from '../../context/AuthContext';
import {Table} from 'react-bootstrap';

class Order extends Component{
    static contextType = AuthContext

    constructor(props){
        super(props)
        this.state = {
            Orders : [],
            userID:'',
            foodID:'',
            orderQuantity:'',
            orderPrice:'',
            cartCount:0,
        }
    }

    componentDidMount(){
        if(localStorage.getItem('itemsArray')){
            this.setState({cartCount:JSON.parse(localStorage.getItem('itemsArray')).length})
        }
        var fd = new FormData();
          if (this.context.currentID){
          fd.append("currentUser", this.context.currentID);
          fetch("http://localhost:5000/api/getorder",{
            method: 'POST',
            body:fd,
          }).then(Orders => Orders.json())
            .then(Orders => this.setState({Orders:Orders}))
        }
    }

    render(){
        return(
            <div className="order-body">
            <AppNavbar cartItemCount = {this.state.cartCount}></AppNavbar>
                <p className="order-note">If Your Order Are Not Showing Here. Then, Your Order May Not Be Requested Properly. Sorry For The
                Inconvenience Caused. See You Again! <br/> <b>Note:</b>&nbsp;&nbsp;&nbsp;&nbsp;false means your order is cancelled by our restaurant and  true means your order is 
                confirmed by our restaurant</p>
                <Table striped bordered hover variant="light" className="order-table">
                <thead>
                    <tr>
                    <th>Order ID</th>
                    <th>Food Image</th>
                    <th>Food Name</th>
                    <th>Order Quantity</th>
                    <th>Order Price</th>
                    <th>Order Placed</th>
                    <th>Date & Time</th>
                    </tr>
                </thead>
                <tbody>
                {
                    this.state.Orders.map(Order => (
                      <tr key={Order._id}>
                        <td>{Order._id}</td>
                        <td><img className="img-list" src={`http://localhost:5000/images/${Order.fooddetails[0].foodImage}`} /></td>
                        <td>{Order.fooddetails[0].foodName}</td>
                        <td>{Order.orderQuantity}</td>
                        <td>{Order.orderPrice}</td>
                        <td>{Order.isApproved}</td>
                        <td>{Order.orderDate}</td>
                      </tr>
                    ))
                  }
                </tbody>
            </Table>
            </div>
        )
    }
}

export default Order;