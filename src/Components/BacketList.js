import React from "react";
import BacketIte from "./BacketIte";

function BacketList(props) {
  const {
    order,
    handleBasketShow,
    removeFromBacket,
    incrementQuantity,
    decrementQuantity,
  } = props;
  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0);
  return (
    <ul className="collection backet-list">
      <li className="collection-item active">Backet</li>
      {order.length ? (
        order.map((item) => {
          return (
            <BacketIte
              removeFromBacket={removeFromBacket}
              incrementQuantity={incrementQuantity}
              decrementQuantity={decrementQuantity}
              key={item.id}
              {...item}
            />
          );
        })
      ) : (
        <li className="collection-item">BacketList is empty</li>
      )}
      <li className="collection-item active">
        Total Price: {totalPrice}
        <b>$</b>
      </li>
      <i className="material-icons backet-close" onClick={handleBasketShow}>
        close
      </i>
    </ul>
  );
}

export default BacketList;
