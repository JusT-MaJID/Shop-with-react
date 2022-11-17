import React, { useState, useEffect } from "react";
import { API_KEY, API_URL } from "../config";
import Loader from "./Loader";
import Goodlist from "./Goodlist";
import Card from "./Card";
import BacketList from "./BacketList";
import { toast } from "react-toastify";
function ShopM() {
  const [goods, setGods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBacketShow, setBashektShow] = useState(false);

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.featured && setGods(data.featured);
        setLoading(false);
      });
  }, []);

  const addToBacket = (item) => {
    const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id);

    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return orderItem;
        }
      });
      setOrder(newOrder);
    }
    toast.success("Good added to backet successfully", { theme: "colored" });
  };
  const handleBasketShow = () => {
    setBashektShow(!isBacketShow);
  };
  const incrementQuantity = (itemID) => {
    const newOrder = order.map((el) => {
      if (el.id === itemID) {
        const newQuantty = el.quantity + 1;
        return {
          ...el,
          quantity: newQuantty,
        };
      } else {
        return el;
      }
    });
    setOrder(newOrder);
  };

  const decrementQuantity = (itemID) => {
    const newOrder = order.map((el) => {
      if (el.id === itemID) {
        const newQuantty = el.quantity - 1;
        return {
          ...el,
          quantity: newQuantty >= 0 ? newQuantty : 0,
        };
      } else {
        return el;
      }
    });
    setOrder(newOrder);
  };
  const removeFromBacket = (itemID) => {
    const newOrder = order.filter((item) => item.id !== itemID);
    setOrder(newOrder);
    toast.error("Good deleted From backet",);
  };

  return (
    <div className=" container content">
      <Card handleBasketShow={handleBasketShow} quantity={order.length} />
      {loading ? (
        <Loader />
      ) : (
        <Goodlist goods={goods} addToBacket={addToBacket} />
      )}
      {isBacketShow && (
        <BacketList
          removeFromBacket={removeFromBacket}
          handleBasketShow={handleBasketShow}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          order={order}
        />
      )}
    </div>
  );
}

export default ShopM;
