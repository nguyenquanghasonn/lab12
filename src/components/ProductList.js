import React from 'react';
import products from '../data/products';

export default function ProductList() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 text-white fw-bold">Featured Products</h2>
      <div className="row g-4">
        {products.map((product) => (
          <div className="col-md-4 col-sm-6" key={product.id}>
            <div className="card bg-secondary text-white h-100 shadow-sm border-0">
              <img 
                src={product.image} 
                className="card-img-top" 
                alt={product.name} 
                style={{ height: '250px', objectFit: 'cover' }} 
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5 className="card-title fw-bold">{product.name}</h5>
                  <p className="card-text text-warning fs-5 mb-1">
                    {product.price.toLocaleString('vi-VN')} VNĐ
                  </p>
                  <span className="badge bg-success">{product.status}</span>
                </div>
                <button className="btn btn-dark mt-3 w-100">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}