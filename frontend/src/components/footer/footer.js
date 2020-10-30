import React, {Component} from 'react';
import './footer.css'
import FeatherIcon from 'feather-icons-react';

class Footer extends Component{
    render() {
        return (
            <div className="footer-body">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <h5>Food Plaza</h5>
                        <p>An Online Food Delivery System with good <br/> quality foods and fast services.</p>
                        <p>Some Useful Links</p>
                        <a href="/foodmenu">Menu</a><br/>
                        <a href="/aboutus">About Us</a>
                    </div>
                    <div className="col-lg-4">
                        <h6>Social Links</h6><br/>
                        <div className="row">
                        <FeatherIcon icon="youtube" className="yt"></FeatherIcon>
                        <FeatherIcon icon="instagram" className="insta"></FeatherIcon>
                        <FeatherIcon icon="facebook" className="fb"></FeatherIcon>
                        </div><br></br>
                        <h6>Email Address:</h6>
                        <p>admin@foodplaza.in</p>
                    </div>
                    <div className="col-lg-3">
                        <h5>Contact Details</h5>
                        <p>8770780280</p>
                        <h5>Address Details</h5>
                        <p>Dr. Ambedkar Colony</p>
                        <p>Bhopal, Madhya Pradesh</p>
                        <p>India-462023</p>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Footer;