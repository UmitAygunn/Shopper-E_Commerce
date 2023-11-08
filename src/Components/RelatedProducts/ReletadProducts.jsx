import React from "react";
import "./ReletadProducts.css";
import data_product from "../Assets/data";
import Item from "../Item/Item";

const ReletadProducts = () => {
  return (
    <div className="reletadproducts">
      <h1>Related Products</h1>
      <hr />
      <div className="reletadproducts-item">
        {data_product.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ReletadProducts;
