import React, {Component} from 'react';
import AppNavbar from '../navigation/navigation'
import './home.css';
import { Carousel} from 'react-bootstrap';
import Slide1 from './Slide1.jpg';
import Slide2 from './Slide2.jpg';
import Slide3 from './Slide3.jpg';
import Footer from '../footer/footer'

class Home extends Component{

    constructor(props){
        super(props)
        this.state = {
            cartCount: 0
        }
    }

    componentDidMount(){
        if(localStorage.getItem('itemsArray')){
            this.setState({cartCount:JSON.parse(localStorage.getItem('itemsArray')).length})
        }
    }

    pageTransform(){
        window.location.href="/foodmenu "
    }

    render(){
        return(
            <div className="home-body">
                <AppNavbar cartItemCount = {this.state.cartCount}></AppNavbar>
                <Carousel>
                    <Carousel.Item className="carousel-height">
                        <img 
                        className="d-block w-100"
                        src={Slide1}
                        alt="First Slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item className="carousel-height">
                        <img
                        className="d-block w-100"
                        src={Slide2}
                        alt="Third Slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item className="carousel-height">
                        <img
                        className="d-block w-100"
                        src={Slide3}
                        alt="Third Slide"
                        />
                    </Carousel.Item>
                </Carousel>
                <button className="home-menu-btn" onClick={this.pageTransform.bind(this)}>Hungry? Explore Now!</button>
                <Footer></Footer>
            </div>
        );
    }
}

export default Home;