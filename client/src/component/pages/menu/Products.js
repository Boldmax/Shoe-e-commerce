import { Link } from "react-router-dom";

const Products = ({ imageUrl, name, price, description, productId }) => {
    
    return (
        <div className="box">
            <img src={imageUrl} alt={name} />
            <h3>{name}</h3>
            <div className="price">${price} <span>20.99</span></div>
            
            <Link to={`/shoe/${productId}`} className="btn" >Buy now</Link>
        </div>
    )
}

export default Products;
