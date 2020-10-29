import React, {Component} from 'react';
import AppNavbar from '../navigation/navigation';
import './order.css';
import {AuthContext} from '../../context/AuthContext';


class Order extends Component{
    static contextType = AuthContext

    componentDidMount(){
    }

    render(){
        return(
            <div className="order-body">
            <AppNavbar></AppNavbar>
                <p className="order-note">If Your Order Are Not Showing Here. Then, Your Order Is Cancelled By Our Restaurant Or May Not Be Ordered Properly. Sorry For The
                Inconvenience Caused. See You Again! </p>
            </div>
        )
    }
}

export default Order;