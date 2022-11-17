import React from "react";
import Gooditem from "./Gooditem";

function Goodlist(props) {
  const { goods = [], addToBacket } = props;
  if (!goods.length) {
    return <h3>Nothing here</h3>;
  }
  return (
    <div className="goods">
      {goods.map((item) => (
        <Gooditem key={item.id} {...item} addToBacket={addToBacket} />
      ))}
    </div>
  );
}

export default Goodlist;
