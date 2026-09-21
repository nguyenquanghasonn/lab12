import React from 'react';

export default function Header() {
  return (
    <header className="bg-dark px-5 py-3 border-bottom border-secondary w-100">
      <div className="container-fluid d-flex align-items-center justify-content-between">
        <div>
          <img 
            src="/Images/logo.jpg" 
            alt="Logo" 
            style={{ height: '60px', objectFit: 'contain' }} 
          />
        </div>
        <nav className="d-flex align-items-center gap-5">
          <a href="#home" className="text-white text-decoration-none fs-5">Home</a>
          <a href="#product" className="text-white text-decoration-none fs-5">Product</a>
          <a href="#men" className="text-white text-decoration-none fs-5">Men</a>
          <a href="#women" className="text-white text-decoration-none fs-5">Women</a>
          <a href="#contact" className="text-white text-decoration-none fs-5">Contact</a>
        </nav>
      </div>
    </header>
  );
}
