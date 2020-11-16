import React from 'react';

const Cart = (props) => {
    const cart=props.cart;
  // const total=cart.reduce((total,prd)=>total + prd.price,0);
  let total= 0;
  for(let i=0;i<cart.length;i++){
      const product=cart[i];
      total=total + product.price;
  };
  let shipping=12.99;
  if(total>35){
      shipping=0;
  }
  else if(total>15){
      shipping=4.99;
  }
  else if(total>0){
      shipping = 12.90;
  }; 
  const grandTotal=(total + shipping);
    return (
        <div>
            <h1>Order Summary</h1>
            <h2>Items ordered:{cart.length}</h2>
            <p>Product Price:{total}</p>
            <p>Shipping Cost:{shipping}</p>
            <p>Total Price:{grandTotal}</p>
        </div>
    );
};

export default Cart;