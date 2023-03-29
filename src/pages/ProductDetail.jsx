import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import "../css/ProductDetail.css";

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const navegar = useNavigate();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        console.log(product);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id, navegar]);

  return (
    <main className="main-content-product-detail">
      <p className="main-content-product-detail__title">Product Detail</p>
      <section className="main-container-detail">
        <article>
          <p className="main-container__title">{product.title}</p>
          <figure classNAme="figure-container">
            <img
              className="figure-container__image"
              src={product.image}
              alt="ima"
            />
          </figure>
        </article>
        <article>
          <p>${product.price}</p>
          <p>{product.category}</p>
          <p>Description: {product.description}</p>
        </article>
      </section>
    </main>
  );
};
export { ProductDetail };
