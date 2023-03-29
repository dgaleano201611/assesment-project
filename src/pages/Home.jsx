import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import ProductCard from "../components/ProductCard";

import "../css/Home.css";
import ProductCardPrueba from "../components/ProductCardPrueba";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <main className="container-main">
      <p className="main-title">Products List</p>
      <div className="container-products">
        {products.map((product) => (
          <ProductCardPrueba product={product}/>
        ))}
      </div>
    </main>
  );
};

export { Home };
