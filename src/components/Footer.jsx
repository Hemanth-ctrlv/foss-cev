import React from 'react';
import './Footer.css';
import photo from '../photos/page2.png'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="foss-united-logo">
                    <p>PART OF</p>
                    <div className="">
                        <img src={photo} alt="FOSS" />
                    </div>
                </div>
            </div>

            <div className="footer-middle">
                <div class="text-wrapper" data-aos="zoom-in" data-aos-duration="1000">
                    <div class="text-outline">CONNECT US</div>

                    <div class="text-solid">CONNECT US</div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="socials">
                    <div className="social-icon">IG</div>
                    <div className="social-icon">IN</div>
                    <span className="handle">fosscev</span>
                </div>
                <div className="copyright">
                    <p>&copy; FOSS Club CE VADAKARA</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
