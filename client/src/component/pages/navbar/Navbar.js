import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from 'react';
import DropDown from '../../dropDown/DropDown';
import SearchBar from '../../searchBar/SearchBar';
import { useSelector } from "react-redux";
/* import Logo from '../../images/Logo.png'; */

const Navbar = () => {

    const [toggle, setToggle] = useState(false);
    const [show, setShow] = useState(false);
    const [nav, setNav] = useState(false);

    // responsive navbar
    const navShow = () => {
        setNav(!nav)
    };

    let navbarClass = ["navbar"];
    nav ? navbarClass.push("active") : navbarClass.join(" ")





    const click = () => {
        setToggle(!toggle)
    };

    const open = () => {
        setShow(!show)
    };

    // badge
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    const cardContent = () => {
        return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
    }

    return (
        <div className="header" id="header">
            <Link to="./" className="logo">
                <span className="logo-text">trendy</span>
                {/* <img src={Logo} alt="Logo" /> */}
            </Link>

            <nav className={navbarClass.join(" ")}>
                <a href="#home" onClick={navShow}>home</a>
                <a href="#about" onClick={navShow}>about</a>
                <a href="#menu" onClick={navShow}>menu</a>
                <a href="#products" onClick={navShow}>products</a>
                <a href="#review" onClick={navShow}>review</a>
                <a href="#contact" onClick={navShow}>contact</a>
                <a href="#blogs" onClick={navShow}>blogs</a>
            </nav>

            <div className="icons">
                <div className="fas fa-search" id="search-btn" onClick={open}></div>
                <div className="fas fa-shopping-cart" id="cart-btn" onClick={click}><span className="badge">{cardContent()}</span></div>
                <div className="fas fa-bars" id="menu-btn" onClick={navShow}></div>
            </div>
            <SearchBar show={show} />
            <DropDown open={toggle} view={click} />
        </div>
    )
}

export default Navbar;
