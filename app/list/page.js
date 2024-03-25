"use client";

import { useState } from "react";

export default function List() {
  let products = ["Tomatoes", "Pasta", "Coconut"];
  const [count, setCount] = useState([0, 0, 0]);

  return (
    <div>
      <h2>Products</h2>
      {products.map((product, index) => (
        <div className="food" key={index}>
          <img src={`/food${index}.png`} alt="product" className="food-img" />
          <h4>{product} $40</h4>
          <span>{count[index]}</span>
          <button
            onClick={() => {
              let newCount = [...count];
              newCount[index]++;
              setCount(newCount);
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              let newCount = [...count];
              newCount[index]--;
              setCount(newCount);
            }}
          >
            -
          </button>
        </div>
      ))}
    </div>
  );
}
