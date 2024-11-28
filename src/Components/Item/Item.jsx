import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

export const Item = (props) => {
  return (
    <div className='item'>
      {/* Corrected Link component with proper URL interpolation */}
      <Link to={`/product/${props.id}`}>
        <img src={props.image} alt={props.name} />
      </Link>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">
          R{props.new_price}
        </div>
        <div className="item-price-old">
          R{props.old_price}
        </div>
      </div>
    </div>
  );
};

export default Item;
