import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchData } from "../api/api-service";
import "./home.css";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchData("products");
        setProducts(data.slice(0, 3)); // Top 3 products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    getProducts();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section>
        <div className="container py-5 custom-hero">
          <div className="row align-items-center">
            <div className="col-lg-6 text-lg-start mb-4 mb-lg-0 ps-lg-5 hero-text">
              <h1>Style & Tech for Every Moment</h1>
              <h2>From Trendy Jewelry to Cutting-Edge Electronics</h2>
              <p>Explore our curated collection designed to elevate your lifestyle.</p>
              <Link to="/products" className="btn btn-hero btn-lg">
                Shop Now
              </Link>
            </div>

            <div className="col-lg-6 text-center">
              <img src="/shop3.png" alt="Fashion & Tech" className="img-fluid hero-img" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="featured-section container py-5">
        <h2 className="text-center mb-5 fw-bold text-danger">Trending Now</h2>

        <div className="row g-4">
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product.id} className="col-lg-4 col-md-6">
                <div className="card h-100 shadow-sm border-0 product-card">
                  <div className="overflow-hidden" style={{ height: "220px" }}>
                    <img
                      src={product.image}
                      className="card-img-top h-100 w-100 p-3"
                      alt={product.title}
                      style={{ objectFit: "contain", transition: "transform 0.3s" }}
                    />
                  </div>

                  <div className="card-body text-center d-flex flex-column">
                    <h6 className="card-title fw-bold" style={{ minHeight: "50px" }}>
                      {product.title}
                    </h6>

                    <Link
                      to={`/products/${product.id}`}
                      className="btn btn-danger w-100 mt-auto"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">Loading products...</p>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer text-center text-white py-3 bg-dark mt-5">
        <p className="mb-0">© 2025 MyShop. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
