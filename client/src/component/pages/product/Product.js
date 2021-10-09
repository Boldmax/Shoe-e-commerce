import './Product.css';
/* import { useSelector, useDispatch } from "react-redux"; */

import product1 from '../../images/product-1.jpg';
import product2 from '../../images/product-2.jpg';
import product3 from '../../images/product-3.jpg';

/* // action 
import { addToCart } from "../../redux/action/cartActions"; */

const Product = () => {

/*     const dispatch = useDispatch();

    const cart = useSelector(state => state.cart);
    const { cartItems } = cart; */

/*     const addToCartHandler = () => {
        dispatch(addToCart(product._id, qty));
    } */
    return (
        <section className="products" id="products">

            <h1 className="heading"> our <span>products</span> </h1>

            <div className="box-container">

                <div className="box">
                    <div className="icons">
                        <a href="#" className="fas fa-shopping-cart" /* onClick={addToCartHandler} */></a>
                        <a href="#" className="fas fa-heart"></a>
                        <a href="#" className="fas fa-eye"></a>
                    </div>
                    <div className="image">
                        <img src={product1} alt="" />
                    </div>
                    <div className="content">
                        <h3>Lovely shoes</h3>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                        <div className="price">$15.99 <span>$20.99</span></div>
                    </div>
                </div>

                <div className="box">
                    <div className="icons">
                        <a href="#" className="fas fa-shopping-cart"></a>
                        <a href="#" className="fas fa-heart"></a>
                        <a href="#" className="fas fa-eye"></a>
                    </div>
                    <div className="image">
                        <img src={product2} alt="" />
                    </div>
                    <div className="content">
                        <h3>Lovely shoes</h3>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                        <div className="price">$15.99 <span>$20.99</span></div>
                    </div>
                </div>

                <div className="box">
                    <div className="icons">
                        <a href="#" className="fas fa-shopping-cart"></a>
                        <a href="#" className="fas fa-heart"></a>
                        <a href="#" className="fas fa-eye"></a>
                    </div>
                    <div className="image">
                        <img src={product3} alt="" />
                    </div>
                    <div className="content">
                        <h3>Lovely shoes</h3>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                        <div className="price">$15.99 <span>$20.99</span></div>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Product
