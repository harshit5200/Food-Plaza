import React, {Component} from 'react';
import './foodlist.css';
import {Table, Button} from 'react-bootstrap';
import AppNavbar from '../navigation/navigation';

class FoodList extends Component{

    constructor(props){
        super(props);
        this.state = {
          Foods : [],
            foodName:'',
            foodType:'',
            foodDescription:'',
            foodRating:'',
            foodPrice:'',
            cartCount:0
        }
    }

    componentDidMount(){
      if(localStorage.getItem('itemsArray')){
        this.setState({cartCount:JSON.parse(localStorage.getItem('itemsArray')).length})
      }
        fetch('http://localhost:5000/api/retrievefood')
          .then(Foods => Foods.json())
            .then(Foods => this.setState({Foods:Foods}))
    }

    deleteUser(id, event){
        event.preventDefault();
        fetch("http://localhost:5000/api/deletefood",{
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
            <Table striped bordered hover variant="light" className="food-table">
                <thead>
                    <tr>
                    <th>Image</th>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Description</th>
                    <th>Rating</th>
                    <th>Price</th>
                    <th>Operation</th>
                    </tr>
                </thead>
                <tbody>
                {
                    this.state.Foods.map(Food => (
                      <tr>
                      <td><img className="img-list" src={`http://localhost:5000/images/${Food.foodImage}`} /></td>
                        <td>{Food._id}</td>
                        <td>{Food.foodName}</td>
                        <td>{Food.foodType}</td>
                        <td>{Food.foodDescription}</td>
                        <td>{Food.foodRating}</td>
                        <td>{Food.foodPrice}</td>
                        <td><Button variant="btn btn-outline-primary" type="button" onClick={this.deleteUser.bind(this, Food._id)}>Delete</Button></td>
                      </tr>
                    ))
                  }
                </tbody>
            </Table>
          </div>
        );
    }
}

export default FoodList;