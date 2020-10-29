import React, {Component} from 'react';
import './about.css';
import AppNavbar from '../navigation/navigation';
import AboutImg from './about-img.jpg';
import SideImg from './about-img2.jpg';
import Footer from '../footer/footer';
import CountUp from 'react-countup';
import FeatherIcon from 'feather-icons-react';

class AboutUs extends Component{

    render(){
        return(
            <div className="about-body">
                <AppNavbar></AppNavbar>
                <img src={AboutImg} alt="FoodImage" className="about-img"></img>
                <div className="container">
                    <h1 className="about-head1">Our Aim Is To Provide High Quality Food</h1>
                    <h5 className="text-muted sub-head1">Changing The Way You Eat.</h5>
                    <h3>Enhancing Food Quality!</h3>
                    <p>We are committed to provide you fast and better service quality. We assure you to provide high quality foods with an ease.
                    We will provide you the best possible efforts from our side to resolve your queries.</p><br/>
                    <h3>Food Plaza</h3>
                    <p className="text-muted">An Online Food Delivery System.</p>
                    <ul>
                        <li>Best Quality Foods</li>
                        <li>Safe and Secure Delivery</li>
                        <li>Resolve Every Possible Query</li>
                        <li>Hygienic Processing of Food</li>
                    </ul><br/><br />
                    <h1>We Have Grown A Lot!</h1><br/>
                    <div className="row">
                    <div className="col-lg-6">
                        <div className="user-count-div">
                        <FeatherIcon icon="users" size="50" className="users-icon"></FeatherIcon>
                        <CountUp className="user-count" end={1000} duration={15}></CountUp>
                        </div><br/>
                        <div className="order-count-div">
                        <FeatherIcon icon="shopping-bag" size="50" className="order-icon"></FeatherIcon>
                        <CountUp className="order-count" end={100000} duration={15}></CountUp>
                        <br/><br/><br/><br/>
                        <h5>Keep Calm And Eat Food!</h5>
                        </div>
                        </div>
                        <div className="col-lg-6">
                        <img src={SideImg} className="side-img" alt="No Image"></img>
                    </div>
                    </div>
                </div>
            <Footer></Footer>
            </div>
        );
    }
}

export default AboutUs;