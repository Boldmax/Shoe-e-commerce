import React from 'react';
import "./HomePage.css";

import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Menu from '../pages/menu/Menu';
import Product from '../pages/product/Product';
import Review from '../pages/review/Review';
import Contact from '../pages/contact/Contact';
import Blog from '../pages/blog/Blog';

const HomePage = () => {
    return (
        <div className="body">
            <Home />
            <About />
            <Menu />
            <Product />
            <Review />
            <Contact />
            <Blog />
        </div>
    )
}

export default HomePage
