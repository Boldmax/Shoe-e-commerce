import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-col">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#menu">Our products</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            {/* <li><a href="#">Affiliate Program</a></li> */}
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Get help</h4>
                        <ul>
                            <li><a href="#contact">FAQ</a></li>
                            <li><a href="#">Shipping</a></li>
                            <li><a href="#">Returns</a></li>
                            <li><a href="#">Payment Options</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Online shop</h4>
                        <ul>
                            <li><a href="#menu">Children shoes</a></li>
                            <li><a href="#menu">Ladies shoes</a></li>
                            <li><a href="#menu">Sport shoes</a></li>
                            <li><a href="#menu">Office shoes</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Follow us</h4>
                        <div className="social-links">
                            <a href="https://facebook.com"><i className="fas fa-facebook social"></i></a>
                            <a href="https://twitter.com"><i className="fas fa-twitter social"></i></a>
                            <a href="https://instagram.com"><i className="fas fa-instagram social"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
