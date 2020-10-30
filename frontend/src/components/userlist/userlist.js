import React, {Component} from 'react';
import './userlist.css';
import {Table, Button} from 'react-bootstrap';
import AppNavbar from '../navigation/navigation';

class UserList extends Component{

    constructor(props){
        super(props);
        this.state = {
          Users : [],
            email:'',
            firstName:'',
            lastName:'',
            mobileNo:'',
            address:'',
            pincode:'',
            city:'',
            state:'',
            cartCount:0
          
        }
      }


    componentDidMount(){
      if(localStorage.getItem('itemsArray')){
      this.setState({cartCount:JSON.parse(localStorage.getItem('itemsArray')).length})
      }
        fetch('http://localhost:5000/api/retrieveuser')
          .then(Users => Users.json())
            .then(Users => this.setState({Users:Users}))
      }


    deleteUser(id, event){
        event.preventDefault();
        fetch("http://localhost:5000/api/deleteuser",{
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
          <div>
            <AppNavbar cartItemCount = {this.state.cartCount}></AppNavbar>
            <Table striped bordered hover variant="light" className="user-table">
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Email</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Mobile No</th>
                    <th>Address</th>
                    <th>Pincode</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Operation</th>
                    </tr>
                </thead>
                <tbody>
                {
                    this.state.Users.map(User => (
                      <tr>
                        <td>{User._id}</td>
                        <td>{User.email}</td>
                        <td>{User.firstName}</td>
                        <td>{User.lastName}</td>
                        <td>{User.mobileNo}</td>
                        <td>{User.address}</td>
                        <td>{User.pincode}</td>
                        <td>{User.city}</td>
                        <td>{User.state}</td>
                        <td><Button variant="btn btn-outline-primary" type="button" onClick={this.deleteUser.bind(this, User._id)}>Delete</Button></td>
                      </tr>
                    ))
                  }
                </tbody>
            </Table>
          </div>
        );
    }
}

export default UserList;