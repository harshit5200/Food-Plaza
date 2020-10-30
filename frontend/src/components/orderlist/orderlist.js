import React, {Component} from 'react';
import {Table, Button} from 'react-bootstrap';
import AppNavbar from '../navigation/navigation';
import './order.css';
class OrderList extends Component{

    constructor(props){
        super(props);
        this.state = {
          Orders : [],
            userID:'',
            foodID:'',
            orderQuantity:'',
            orderPrice:'',
            cartCount:0
        }
      }


    componentDidMount(){
      if(localStorage.getItem('itemsArray')){
        this.setState({cartCount:JSON.parse(localStorage.getItem('itemsArray')).length})
      }
        fetch('http://localhost:5000/api/retrieveorder')
          .then(Orders => Orders.json())
            .then(Orders => this.setState({Orders:Orders}))
      }

      confirmOrder(id, event){
        event.preventDefault();
        fetch("http://localhost:5000/api/updateorder",{
          method: 'put',
          headers:{
            'content-type':'application/x-www-form-urlencoded; charset=utf-8'
          },
          body:`_id=${id}`
    
        });

        window.location.reload();
      }


    cancelOrder(id, event){
      event.preventDefault();
      fetch("http://localhost:5000/api/orderupdate",{
        method: 'put',
        headers:{
          'content-type':'application/x-www-form-urlencoded; charset=utf-8'
        },
        body:`_id=${id}`
  
      });

      window.location.reload();
      }

    render(){
        return(
          <div>
          <AppNavbar cartItemCount = {this.state.cartCount}></AppNavbar>
            <Table striped bordered hover variant="light" className="order-table">
                <thead>
                    <tr>
                    <th>Order ID</th>
                    <th>User ID</th>
                    <th>Food ID</th>
                    <th>Order Quantity</th>
                    <th>Order Price</th>
                    <th>Is Approved</th>
                    <th>Date</th>
                    <th>Cancel Order</th>
                    <th>Confirm Order</th>
                    </tr>
                </thead>
                <tbody>
                {
                    this.state.Orders.map(Order => (
                      <tr>
                        <td>{Order._id}</td>
                        <td>{Order.userID}</td>
                        <td>{Order.foodID}</td>
                        <td>{Order.orderQuantity}</td>
                        <td>{Order.orderPrice}</td>
                        <td>{Order.orderDate}</td>
                        <td>{Order.isApproved}</td>
                        <td><Button className="cancelBtn" disabled={Order.isApproved} variant="btn btn-primary" type="button" onClick={this.cancelOrder.bind(this, Order._id)}>Cancel Order</Button></td>
                        <td><Button variant="btn btn-outline-primary" disabled={Order.isApproved} type="button" onClick={this.confirmOrder.bind(this, Order._id)}>Confirm Order</Button></td>
                      </tr>
                    ))
                  }
                </tbody>
            </Table>
          </div>
        );
    }
}

export default OrderList;