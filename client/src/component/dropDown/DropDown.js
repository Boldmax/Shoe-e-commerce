import "./DropDown.css";
import { useSelector, useDispatch } from "react-redux";
import Cartcompo from '../cartCompo/cartCompo';


// action 
import { removeFromCart } from "../redux/action/cartActions";



const DropDown = ({ open, view }) => {

    const dispatch = useDispatch();

    let drpDownClass = ["cart-items-container "];

    open ? drpDownClass.push("active") : drpDownClass.join(" ")

    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    const removefromcart = (id) => {
        dispatch(removeFromCart(id))
    };



    return (
        <div className={drpDownClass.join(" ")}>

            {cartItems.length === 0 ? (
                <div>
                    Your cart is empty {/* <Link to="/" >Go to home page</Link> */}
                </div>
            ) : cartItems.map((item, x) => (
                <Cartcompo key={x} item={item}
                    removefromcart={removefromcart}

                />
            ))}

            <a href="#" className="btn" onClick={view}>checkout now</a>
        </div>
    )
}

export default DropDown;
