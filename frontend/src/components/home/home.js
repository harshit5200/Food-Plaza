import React, {Component} from 'react';
import AppNavbar from '../navigation/navigation'
import './home.css';
import { Carousel, Button } from 'react-bootstrap';
import Slide1 from './Slide1.jpg';
import Slide2 from './Slide2.jpg';
import Slide3 from './Slide3.jpg';
import {TextField} from '@material-ui/core';
import FeatherIcon from 'feather-icons-react';

class Home extends Component{

    onChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render(){
        return(
            <div className="home-body">
                <AppNavbar></AppNavbar>
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
                <div className="row home-search">
                    <TextField id="outlined-basic" label="Searching For Food?" variant="outlined"  name="searchBar" onChange={this.onChange} type="text" className="home-search-bar"/>
                    <Button className="search-btn"><FeatherIcon icon="search" /></Button>
                </div>
            </div>
        );
    }
}

export default Home;