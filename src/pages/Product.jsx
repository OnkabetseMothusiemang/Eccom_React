import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../Components/Breadcrumbs/Breadcrumbs';

export const Product = () => {
  const {all_product}=useContext(ShopContext);
  const {productID} = useParams();
  const product = all_product.find((e)=> e.id === Number(productID));
  return (
    <div>
        <Breadcrumbs product={product}/>
    </div>
  )
}

export default Product
