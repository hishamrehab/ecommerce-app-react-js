import React from "react";
import { Link } from "react-router-dom";
function Product(props) {
  const { product, showButton } = props;
  return (
    <>
      <div className="card" style={{ height: "100%"  }}>
        <img
          src={product.image}
          className="card-img-top"
          alt={product.title}
          style={{ width: "100%", height: "350px" }}
        />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description}</p>
          <p>price : {product.price}$</p>
          {showButton && (<Link className="btn btn-primary" to={`/product/${product.id}`}>Details</Link>)}
        </div>
      </div>
    </>
  );
}
export default Product;
