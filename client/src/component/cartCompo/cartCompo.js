import "./cartCompo.css";

const CartCompo = ({ item, removefromcart }) => {
    return (
        <div className="cart-item">
            <span className="fas fa-trash" onClick={() => removefromcart(item.product)}></span>
            <img src={item.imageUrl} alt={item.name} />
            <div className="content">
                <h3>{item.name}</h3>
                <div className="price">${item.price}</div>
            </div>
        </div>
    )
}

export default CartCompo;
