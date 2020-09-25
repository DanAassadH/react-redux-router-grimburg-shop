import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ProductImage from './ProductImage';

import './css/product-image.css'
import './css/product-list.css';


export default (props) => {
    const product = props.product

    return (
      <article className="product-card">
        <Link to={`/products/${product.id}`}>
            <ProductImage path={product.image} rarity={product.rarity} name={product.name} />
            <div className="item-name">
              <p>{product.name}</p>
            </div>
        </Link>
      </article>
    )
}
