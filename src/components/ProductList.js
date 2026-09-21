import React from 'react';
import products from '../data/products';

export default function ProductList() {
  return (
    <div className="container my-5">
      <h3 className="text-center mb-4 text-white fw-bold">Sản Phẩm Mới</h3>
      <div className="row g-4"> 
        {products.map((product) => (
          <div className="col-lg-4 col-md-6 col-sm-6" key={product.id}>
            <div className="bg-white text-dark p-4 rounded text-center shadow-sm h-100 d-flex flex-column">
              <img 
                src={product.image} 
                alt={product.name} 
                className="img-fluid mb-3 rounded" 
                style={{ height: '200px', objectFit: 'cover' }} 
              />
              <h5 className="fw-bold mb-2">{product.name}</h5>
              <p className="text-danger fs-5 fw-semibold mb-3 flex-grow-1">
                {product.price.toLocaleString('vi-VN')} VNĐ
              </p>
              <button className="btn btn-outline-dark w-100 mt-auto">Chọn mua</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}