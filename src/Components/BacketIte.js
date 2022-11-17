import React from "react";

function BacketIte(props) {
  const { id, name, price, quantity, incrementQuantity, decrementQuantity } =
    props;

  return (
    <div>
      <li className="collection-item">
        {name} x {quantity} = {price * quantity} <b>$</b>
        <span className="secondary-content">
          <div className="Basket_item-control-btns">
            <a
              className="waves-effect waves-light btn"
              onClick={() => incrementQuantity(id)}
            >
              <i className="material-icons left">exposure_plus_1</i>Add
            </a>
            <a
              className="waves-effect waves-light btn "
              onClick={() => decrementQuantity(id)}
            >
              <i className="material-icons left">exposure_minus_1</i>Remove
            </a>
            <a
              className="waves-effect waves-light btn "
              onClick={() => props.removeFromBacket(id)}
            >
              <i className="material-icons left">delete</i>delet
            </a>
          </div>
        </span>
      </li>
    </div>
  );
}

export default BacketIte;
