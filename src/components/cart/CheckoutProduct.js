import React from 'react'
import { Link } from "react-router-dom";

import { addToBasket,removeFromBasket } from '../../slices/basketSlice';
import { useDispatch } from 'react-redux';

import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

function CheckoutProduct
({id,productImage,price,title}) {
    
    const dispatch=useDispatch();

    const addItemToBasket=()=>{
        const product={id,title,productImage,price};
        dispatch(addToBasket(product));
    }

    const removeItemFromBasket=()=>{
        dispatch(removeFromBasket({id}));
    }

    return (
        <tr>
        <td className="img">
          <Link to={`/product/${id}`}>
            <img
              src={productImage}
              alt={title}
            />
          </Link>
        </td>
        <td>
          <div className="desc">
              
            <h5>{title}</h5>

            <h6 className="product-property">S</h6>
          </div>
          <a href="#" className="remove-btn">
            REMOVE
          </a>
        </td>
        <td className="item-price">$ {price} USD</td>
        <td className="quantity">
          <div id="quantity-selector">
            <span onClick={removeItemFromBasket} id="quantity-minus">
              <RemoveIcon />
            </span>
            <input
              aria-label="quantity"
              type="text"
              defaultValue="1"
              pattern="[0-9]*"
            />
            <span onClick={addItemToBasket} id="quantity-plus">
              <AddIcon />
            </span>
          </div>
        </td>
      </tr>

    )
}

export default CheckoutProduct;

