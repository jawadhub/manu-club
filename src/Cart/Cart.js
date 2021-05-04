import React from 'react';

const Cart = (props) => {
  console.log(props);
  const cart = props.cart;
  let totalSalary = 0;
  for (let i = 0; i < cart.length; i++) {
    const player = cart[i];
    totalSalary = totalSalary + player.salary;
  }

  return (
    <div>
      <p>Your list : {cart.length}</p>
      <p>Total expenses : {totalSalary} </p>
      <ul>
        {cart.map((play) => ( <li>{play.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;