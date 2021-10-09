import "./Blog.css";

import blog from '../../images/blog-1.jpg';
import blog2 from '../../images/blog-2.jpg';
import blog3 from '../../images/blog-3.jpg';


const Blog = () => {
    return (

        <section className="blogs" id="blogs">

            <h1 className="heading"> our <span>blogs</span> </h1>

            <div className="box-container">

                <div className="box">
                    <div className="image">
                        <img src={blog} alt="" />
                    </div>
                    <div className="content">
                        <a href="#" className="title">shoes that matters</a>
                        <span>by Olabode / 21st oct, 2021</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, dicta.</p>
                        <a href="#" className="btn">read more</a>
                    </div>
                </div>

                <div className="box">
                    <div className="image">
                        <img src={blog2} alt="" />
                    </div>
                    <div className="content">
                        <a href="#" className="title">your shoes your pasonality</a>
                        <span>by Olabode / 21st oct, 2021</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, dicta.</p>
                        <a href="#" className="btn">read more</a>
                    </div>
                </div>

                <div className="box">
                    <div className="image">
                        <img src={blog3} alt="" />
                    </div>
                    <div className="content">
                        <a href="#" className="title">trendy fashions</a>
                        <span>by Olabode / 21st Oct, 2021</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, dicta.</p>
                        <a href="#" className="btn">read more</a>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Blog
