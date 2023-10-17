import React, { useEffect, useState } from "react";

import Product from "./Product";

function ProductsList() {
  const api_url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const getProducts = () => {
    fetch(api_url).then((res) => {
      res.json().then((data) => setProducts(data));
    }, []);
  };

  const getCategories = () => {
    fetch(`${api_url}/categories`).then((res) => {
      res.json().then((data) => setCategories(data));
    }, []);
  };

  const getProductsInCategory = (categoryName) => {
    fetch(`${api_url}/category/${categoryName}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  useEffect(() => {
    getProducts();
    getCategories();
  });

  return (
    <>
      <h2 className="text-center p-4">Our Products</h2>
      <div className="container">
        <button className="btn btn-info" onClick={() => getProducts()}>
          All
        </button>

        {categories.map((category) => {
          return (
            <button
              key={category}
              className="btn btn-info"
              onClick={() => getProductsInCategory(category)}
            >
              {category}
            </button>
          );
        })}

        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-4 mb-3" key={product.id}>
                <Product product={product} showButton={true} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProductsList;
