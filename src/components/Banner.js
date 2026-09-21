import React from 'react';

export default function Banner() {
  return (
    <div className="container my-4">
      <div className="text-center mb-3">
        <h2 className="fw-bold text-white">Promotional Banner</h2>
      </div>


      <div id="carouselExample" className="carousel slide shadow rounded overflow-hidden" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

        <div className="carousel-inner">

          <div className="carousel-item active">
            <img src="/Images/banner1.jpg" className="d-block w-100" style={{ height: '400px', objectFit: 'cover' }} alt="Banner 1" />
            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
              <h3 className="fw-bold">FASHION COLLECTION 2026</h3>
              <p>Discover the latest fashion trends for 2026.</p>
            </div>
          </div>


          <div className="carousel-item">
            <img src="/Images/banner2.jpg" className="d-block w-100" style={{ height: '400px', objectFit: 'cover' }} alt="Banner 2" />
            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
              <h3 className="fw-bold">SUMMER SALE UP TO 50%</h3>
              <p>Enjoy special discounts on selected product.s</p>
            </div>
          </div>


          <div className="carousel-item">
            <img src="/Images/banner3.jpg" className="d-block w-100" style={{ height: '400px', objectFit: 'cover' }} alt="Banner 3" />
            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
             <h3 className="fw-bold">NEW ARRIVALS</h3>
              <p>Explore our newest clothing collection.</p>
            </div>
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}