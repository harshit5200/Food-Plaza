import React, {Component} from 'react'; 
import {BrowserRouter as Router} from 'react-router-dom';
import {AuthContext} from './context/AuthContext';
import {login} from './actions/Auth';
import Register from './components/register/register';
import Login from './components/login/login';
import Home from './components/home/home';
import FoodForm from './components/savefood/savefood';
import FoodMenu from './components/menu/menu';
import UserList from './components/userlist/userlist'
import Cart from './components/cart/cart'

const Route = require('react-router-dom').Route;

class Routes extends Component{
    static contextType = AuthContext;

    componentDidMount(){
        const token = localStorage.getItem('token');
        if(token && !this.context.isAuthenticated){
            const data = {token, email: null, password: null}
            login(data, (res) => {
                if (res.data.success){
                    this.context.login(res)
                }else{
                    localStorage.removeItem('token')
                    console.log(res.data.message);
                }
            })
        }
    }

    render(){
        return(
            <Router>
                <Route exact path='/' component={Home} ></Route>
                <Route exact path='/register' component={Register} ></Route>
                <Route exact path='/login' component={Login} ></Route>
                <Route exact path='/savefood' component={FoodForm} ></Route>
                <Route exact path='/foodmenu' component={FoodMenu} ></Route>
                <Route exact path='/userlist' component={UserList} ></Route>
                <Route exact path='/cart' component={Cart} ></Route>
            </Router>
        );
    }
}

export default Routes;