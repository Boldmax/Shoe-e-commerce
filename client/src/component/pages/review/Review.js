import './Review.css';

import qimg from '../../images/quote-img.png';
import img1 from '../../images/pic-1.png';
import img2 from '../../images/pic-2.png';
import img3 from '../../images/pic-3.png';

const Review = () => {
    return (
        <section className="review" id="review">

            <h1 className="heading"> customer's <span>review</span> </h1>

            <div className="box-container">

                <div className="box">
                    <img src={qimg} alt="" className="quote" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla sit libero nemo fuga sequi nobis? Necessitatibus aut laborum, nisi quas eaque laudantium consequuntur iste ex aliquam minus vel? Nemo.</p>
                    <img src={img1} className="user" alt="" />
                    <h3>James Mcarthy</h3>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </div>
                </div>

                <div className="box">
                    <img src={qimg} alt="" className="quote" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla sit libero nemo fuga sequi nobis? Necessitatibus aut laborum, nisi quas eaque laudantium consequuntur iste ex aliquam minus vel? Nemo.</p>
                    <img src={img2} className="user" alt="" />
                    <h3>Magret Oliver</h3>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </div>
                </div>

                <div className="box">
                    <img src={qimg} alt="" className="quote" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla sit libero nemo fuga sequi nobis? Necessitatibus aut laborum, nisi quas eaque laudantium consequuntur iste ex aliquam minus vel? Nemo.</p>
                    <img src={img3} className="user" alt="" />
                    <h3>Michael A.</h3>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Review
