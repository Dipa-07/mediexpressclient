import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import './Footer.css';
const Footer = () => {
    return (
        <div class="footer-dark">
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="#">24 Hours Medical Consultation</a></li>
                            <li><a href="#">Medicine Home Delivery</a></li>
                            <li><a href="#">Emergency Home Treatment by Doctor</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-6 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li><a href="#">Company</a></li>
                            <li><a href="#">Team</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </div>
                    <div class="col-md-6 item text">
                        <h3>MediExpress</h3>
                        <p>MediExpress can be the best possible solution for emergency medical services.</p>
                        <h6>Call Now: +8801709605706</h6>
                    </div>
                    <div style={{marginTop:'5%'}} class="col item social"> <a href="//www.facebook.com" target="_blank"><FacebookIcon/></a> <a href="//www.twitter.com" target="_blank"><TwitterIcon/></a> <a href="//www.youtube.com" target="_blank"> <YouTubeIcon/> </a> </div>
                </div>
                <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
            </div>
        </footer>
        </div>
        );
};

export default Footer;