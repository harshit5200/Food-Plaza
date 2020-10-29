import React, {Component} from 'react';
import {Table, Button} from 'react-bootstrap';

class OrderList extends Component{

    constructor(props){
        super(props);
        this.state = {
          Orders : [],
            userID:'',
            foodID:'',
            orderQuantity:'',
            orderPrice:'',
            disabledBtn: false
        }
      }


    componentDidMount(){
        fetch('http://localhost:5000/api/retrieveorder')
          .then(Orders => Orders.json())
            .then(Orders => this.setState({Orders:Orders}))
      }

      confirmOrder(){
        this.setState({disabledBtn: true})
      }


    cancelOrder(id, event){
        event.preventDefault();
        fetch("http://localhost:5000/api/deleteorder",{
          method: 'delete',
          headers:{
            'content-type':'application/x-www-form-urlencoded; charset=utf-8'
          },
          body:`_id=${id}`
    
        });

        window.location.reload();
      }

    render(){
        return(
            <Table striped bordered hover variant="light" className="user-table">
                <thead>
                    <tr>
                    <th>Order ID</th>
                    <th>User ID</th>
                    <th>Food ID</th>
                    <th>Order Quantity</th>
                    <th>Order Price</th>
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
                        <td><Button className="cancelBtn" disabled={this.state.disabledBtn} variant="btn btn-primary" type="button" onClick={this.cancelOrder.bind(this, Order._id)}>Cancel Order</Button></td>
                        <td><Button variant="btn btn-outline-primary" type="button" onClick={this.confirmOrder.bind(this)}>Confirm Order</Button></td>
                      </tr>
                    ))
                  }
                </tbody>
            </Table>
        );
    }
}

export default OrderList;