import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="foss-united-logo">
                    <p>PART OF</p>
                    <div className="fu-box">
                        <img src="D:\kk\onam\Chapppu onam\practice\logo dsgn" alt="Page 2" />
                    </div>
                </div>
            </div>

            <div className="footer-middle">
                <h2 className="connect-us">CONNECT US</h2>
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
