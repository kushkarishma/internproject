import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import QuantitySelector from "./components/quantityselector";
import { getBackendData } from "./api/api-service";

function Products() {
  const [allProducts, setAllProducts] = useState([]); // all data
  const [products, setProducts] = useState([]);       // filtered data
  const [selectedCategory, setSelectedCategory] = useState("All");
  let [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 6;
  const navigate = useNavigate();

  const categories = [
    "All",
    "men's clothing",
    "jewelery",
    "electronics",
    "women's clothing"
  ];

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    filterProducts();
  }, [selectedCategory, page]);

  const getProducts = async () => {
    try {
      const result = await getBackendData("products");
      if (!result || result.length === 0) {
        setAllProducts([]);
        setTotalPages(1);
        setProducts([]);
        return;
      }
      setAllProducts(result);
      setTotalPages(Math.ceil(result.length / limit));
      setProducts(result.slice(0, limit));
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const filterProducts = () => {
    let filtered =
      selectedCategory === "All"
        ? allProducts
        : allProducts.filter((p) => p.category === selectedCategory);

    setTotalPages(Math.ceil(filtered.length / limit));


    const start = (page - 1) * limit;
    const end = start + limit;
    setProducts(filtered.slice(start, end));
  };

  const handleAddToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    toast.success("Added to cart!");
  };

  const handleViewCart = () => {
    navigate("/addtocart");
  };

  return (
    <section className="products-page py-5" style={{ backgroundColor: "#fff5f5" }}>
      <div className="container">
        <h2 className="text-center mb-5 fw-bold" style={{ color: "#d6336c" }}>
          Products Collection
        </h2>

        {/* Category Section */}
        <div className="mb-5 text-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setSelectedCategory(cat); setPage(1); }}
              className={`btn btn-sm me-2 mb-2 ${selectedCategory === cat ? "btn-danger" : "btn-outline-danger"
                }`}
            >
              {cat === "All" ? "All Products" : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="row g-4">
          {products.map((product) => (
            <div className="col-lg-3 col-md-4 col-sm-6" key={product.id}>
              <div className="card h-100 product-card shadow-sm border-0">
                <div className="overflow-hidden" style={{ height: "180px" }}>
                  <img
                    src={product.image}
                    className="card-img-top h-100 w-100 p-3"
                    alt={product.title}
                    style={{ objectFit: "contain", transition: "transform 0.3s" }}
                  />
                </div>
                <div className="card-body d-flex flex-column">
                  <h6 className="card-title fw-bold" style={{ minHeight: "50px" }}>
                    {product.title}
                  </h6>
                  <p className="text-muted small mb-1">
                    <strong>Category:</strong> {product.category}
                  </p>
                  <p className="fw-bold text-success mb-2">
                    ₹ {(product.price * 83).toFixed(2)}
                  </p>
                  <p className="small mb-3">{product.description.substring(0, 80)}...</p>

                  <QuantitySelector
                    initial={product.quantity || 1}
                    onChange={(newQty) => {
                      const updatedProducts = products.map((p) =>
                        p.id === product.id ? { ...p, quantity: newQty } : p
                      );
                      setProducts(updatedProducts);
                      const updatedAllProducts = allProducts.map((p) =>
                        p.id === product.id ? { ...p, quantity: newQty } : p
                      );
                      setAllProducts(updatedAllProducts);
                    }}
                  />

                  <button
                    className="btn btn-danger mt-auto w-100 mb-2"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </button>
                  <button
                    className="btn btn-outline-danger w-100"
                    onClick={handleViewCart}
                  >
                    View Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="d-flex justify-content-center align-items-center gap-3 mt-5">
          <button
            onClick={() => { if (page > 1) setPage(page - 1); }}
            className="btn btn-outline-secondary"
          >
            ⬅ Prev
          </button>
          <span>Page {page} of {totalPages}</span>
          <button
            onClick={() => { if (page < totalPages) setPage(page + 1); }}
            className="btn btn-outline-secondary"
          >
            Next ➡
          </button>
        </div>
      </div>
    </section>
  );

}

export default Products;
