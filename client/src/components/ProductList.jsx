import React from 'react';
import Products from './Products.jsx';

const ProductList = (props) => {
  return (
    < div className='product-list' align="right" >
      {
        props.lists.map((list, i) => (
          <Products list={list} key={i} id={props.id} />
        ))
      }
    </div >
  )
}

export default ProductList