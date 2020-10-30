import React, {Component} from 'react';
import {Navbar, Button , Nav} from 'react-bootstrap';
import {AuthContext} from '../../context/AuthContext';
import './navigation.css';
import FeatherIcon from 'feather-icons-react';

class AppNavbar extends Component{
    static contextType = AuthContext

    render(){
        if(this.context.isAuthenticated && this.context.currentEmail != 'admin@foodplaza.in'){
            return(
                <div>
                <Navbar className="navbar-nav">
                <Navbar.Brand href = '/' className="navbar-brand">Food Plaza</Navbar.Brand>
                    <Navbar.Toggle/>
                    <Navbar.Collapse className="justify-content-end">
                        <Nav>
                            <Nav.Link href = "/" className="nav">Home</Nav.Link>
                            <Nav.Link href = "/foodmenu" className="nav">Menu</Nav.Link>
                            <Nav.Link href = "/order" className="nav">Order</Nav.Link>
                            <Nav.Link href = "/aboutus" className="nav">About Us</Nav.Link>
                            <Nav.Link>
                            <Button className="logout-btn" onClick={() => this.context.logout()}>Logout</Button>
                        </Nav.Link>       
                        <Nav.Link href="/cart"><FeatherIcon icon="shopping-cart" size="24" className="cart-icon"/><span className='badge badge-warning' id='lblCartCount'>{this.props.cartItemCount}</span></Nav.Link>
                        </Nav> 
                    </Navbar.Collapse>
                </Navbar>
                </div>
            );
        }
        else if (this.context.isAuthenticated && this.context.currentEmail === 'admin@foodplaza.in'){
            return(
             <div>
             <Navbar className="navbar-nav">
                 <Navbar.Brand href = '/' className="navbar-brand">Food Plaza</Navbar.Brand>
                     <Navbar.Toggle/>
                     <Navbar.Collapse className="justify-content-end">
                         <Nav>
                             <Nav.Link href = "/" className="nav">Home</Nav.Link>
                             <Nav.Link href = "/foodmenu" className="nav">Menu</Nav.Link>
                             <Nav.Link href = "/aboutus" className="nav">About Us</Nav.Link> 
                             <Nav.Link href = "/orderlist" className="nav">Order Info</Nav.Link> 
                             <Nav.Link href = "/userlist" className="nav">Customer Info</Nav.Link>
                             <Nav.Link href = "/foodlist" className="nav">Food Info</Nav.Link>
                             <Nav.Link href = "/savefood" className="nav">New Food</Nav.Link>
                             <Nav.Link>
                            <Button className="logout-btn" onClick={() => this.context.logout()}>Logout</Button>
                        </Nav.Link> 
                        <Nav.Link href="/cart"><FeatherIcon icon="shopping-cart" size="24" className="cart-icon"/><span className='badge badge-warning' id='lblCartCount'>{this.props.cartItemCount}</span></Nav.Link>
                         </Nav>  
                     </Navbar.Collapse>
             </Navbar>
         </div>
            );
         }
        else{
           return(
            <div>
            <Navbar className="navbar-nav">
                <Navbar.Brand href = '/' className="navbar-brand">Food Plaza</Navbar.Brand>
                    <Navbar.Toggle/>
                    <Navbar.Collapse className="justify-content-end">
                        <Nav>
                            <Nav.Link href = "/" className="nav">Home</Nav.Link>
                            <Nav.Link href = "/foodmenu" className="nav">Menu</Nav.Link>
                            <Nav.Link href = "/aboutus" className="nav">About Us</Nav.Link>
                            <Nav.Link href = "/login" className="nav">Sign In</Nav.Link> 
                            <Nav.Link href = "/register" className="nav">Sign Up</Nav.Link>   
                            <Nav.Link href="/cart"><FeatherIcon icon="shopping-cart" size="24" className="cart-icon"/><span className='badge badge-warning' id='lblCartCount'>{this.props.cartItemCount}</span></Nav.Link>  
                        </Nav>  
                    </Navbar.Collapse>
            </Navbar>
        </div>
           );
        }
    }
}

export default AppNavbar;