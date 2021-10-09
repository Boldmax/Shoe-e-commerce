import "./Menu.css";
import { useEffect } from "react";
import Product from './Products';


import { useSelector, useDispatch } from 'react-redux';

// actions
import { getProducts as listProducts } from "../../redux/action/foodActions";


const Menu = () => {

    const dispatch = useDispatch();

    const getProduct = useSelector(state => state.getProducts);
    const { products, loading, error } = getProduct;

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])


    return (
        <section className="menu" id="menu">

            <h1 className="heading"> our <span>menu</span> </h1>

            <div className="box-container">

                {loading ? (<h2>Loading...</h2>) : error ? (<h2>{error}</h2>) : (products.map((product, key) => (
                    <Product
                        productId={product._id}
                        key={key}
                        name={product.name}
                        price={product.price}
                        description={product.description}
                        imageUrl={product.imageUrl}
                    />
                ))
                )}

            </div>

        </section>
    )
}

export default Menu;
