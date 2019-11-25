import React from 'react';

const Products = (props) => {
  return (
    <div onClick={() => { console.log('clicked!'); props.id(props.list.id) }} className='product-list-entry'>
      <div >Item:
      {props.list.item}
      </div>
      <div>
        Current Bid: ${props.list.curr_bid}
      </div>
      <div>
        Ends In: {props.list.ends_in} Days

      </div>
      <img src={props.list.image} height="200" width="200" />
    </div>
  )
}

export default Products

// click the current item  click hadler will pickup the id and dis play the current view