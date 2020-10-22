import React, {Component} from 'react';
import './userlist.css';
import {Table, Button} from 'react-bootstrap';

class FoodCard extends Component{

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
            state:''
          
        }
      }


    componentDidMount(){
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
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>Username</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Mobile No</th>
                    <th>Address</th>
                    <th>Pincode</th>
                    <th>City</th>
                    <th>State</th>
                    <td></td>
                    </tr>
                </thead>
                <tbody>
                {
                    this.state.Users.map(User => (
                      <tr>
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
        );
    }
}

export default FoodCard;